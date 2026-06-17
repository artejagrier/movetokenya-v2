import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const migrationsDir = path.join(__dirname, "..", "supabase", "migrations");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return Object.fromEntries(
    fs
      .readFileSync(filePath, "utf8")
      .split("\n")
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const index = line.indexOf("=");
        return [line.slice(0, index), line.slice(index + 1)];
      })
  );
}

const env = {
  ...loadEnv(path.join(process.cwd(), ".env.local")),
  ...loadEnv(path.join(process.cwd(), ".env")),
  ...process.env,
};

function projectRefFromUrl(url) {
  const match = url?.match(/https:\/\/([^.]+)\.supabase\.co/);
  return match?.[1] ?? null;
}

function getMigrationFiles() {
  return fs
    .readdirSync(migrationsDir)
    .filter((file) => file.endsWith(".sql"))
    .sort()
    .map((file) => ({
      file,
      sql: fs.readFileSync(path.join(migrationsDir, file), "utf8"),
    }));
}

async function applyViaManagementApi(ref, token, sql) {
  const res = await fetch(
    `https://api.supabase.com/v1/projects/${ref}/database/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: sql }),
    }
  );

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Management API ${res.status}: ${text}`);
  }

  return text;
}

async function applyViaPostgres(connectionString, sql) {
  const { default: postgres } = await import("postgres");
  const sqlClient = postgres(connectionString, { max: 1 });
  try {
    await sqlClient.unsafe(sql);
  } finally {
    await sqlClient.end({ timeout: 5 });
  }
}

function resolveConnectionString() {
  if (env.DATABASE_URL) return env.DATABASE_URL;

  const ref = projectRefFromUrl(env.NEXT_PUBLIC_SUPABASE_URL);
  const password = env.SUPABASE_DB_PASSWORD;

  if (!ref || !password) return null;

  const host =
    env.SUPABASE_DB_HOST ?? `db.${ref}.supabase.co`;
  const port = env.SUPABASE_DB_PORT ?? "5432";
  const user = env.SUPABASE_DB_USER ?? "postgres";
  const database = env.SUPABASE_DB_NAME ?? "postgres";

  return `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${database}`;
}

async function main() {
  const ref = projectRefFromUrl(env.NEXT_PUBLIC_SUPABASE_URL);
  const migrations = getMigrationFiles();

  if (migrations.length === 0) {
    throw new Error("No migration files found");
  }

  const accessToken = env.SUPABASE_ACCESS_TOKEN;
  const connectionString = resolveConnectionString();

  if (!accessToken && !connectionString) {
    throw new Error(
      "Set DATABASE_URL, SUPABASE_DB_PASSWORD, or SUPABASE_ACCESS_TOKEN in .env.local"
    );
  }

  for (const migration of migrations) {
    process.stdout.write(`Applying ${migration.file}... `);

    if (accessToken && ref) {
      await applyViaManagementApi(ref, accessToken, migration.sql);
    } else {
      await applyViaPostgres(connectionString, migration.sql);
    }

    console.log("ok");
  }

  console.log(`Applied ${migrations.length} migrations`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
