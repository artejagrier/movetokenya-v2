import fs from "node:fs";
import path from "node:path";

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

const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("MISSING_ENV");
  process.exit(1);
}

const tables = ["articles", "article_categories", "profiles", "consultation_requests"];

async function checkTable(name) {
  const res = await fetch(`${url}/rest/v1/${name}?select=*&limit=1`, {
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
    },
  });
  const body = await res.text();
  return { name, status: res.status, body: body.slice(0, 200) };
}

async function checkAuth() {
  const res = await fetch(`${url}/auth/v1/health`, {
    headers: { apikey: key },
  });
  return { status: res.status };
}

const auth = await checkAuth();
const results = await Promise.all(tables.map(checkTable));

console.log(JSON.stringify({ auth, tables: results }, null, 2));
