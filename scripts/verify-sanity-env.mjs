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
  ...process.env,
};

const required = [
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "NEXT_PUBLIC_SANITY_DATASET",
  "NEXT_PUBLIC_SANITY_API_VERSION",
  "SANITY_API_TOKEN",
];

const missing = required.filter((key) => !env[key]);

if (missing.length > 0) {
  console.error("Missing environment variables:", missing.join(", "));
  process.exit(1);
}

console.log("Sanity environment variables loaded:");
for (const key of required) {
  const value = env[key] ?? "";
  const masked =
    key === "SANITY_API_TOKEN"
      ? `${value.slice(0, 8)}…${value.slice(-4)}`
      : value;
  console.log(`  ${key}=${masked}`);
}

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION;

const query = encodeURIComponent(`*[_type == "category"][0]._id`);
const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

const response = await fetch(url);
const payload = await response.json();

if (!response.ok) {
  console.error("Sanity API connection failed:", payload);
  process.exit(1);
}

console.log("Sanity API connection: OK");
