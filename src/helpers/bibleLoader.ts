import fs from "fs";
import path from "path";

const cache = new Map<string, any>();

export function loadBible(version: string) {
  const upperVersion = version.toUpperCase();

  if (cache.has(upperVersion)) {
    return cache.get(upperVersion);
  }

  const filePath = path.join(process.cwd(), "data", `${upperVersion}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error("Versão não encontrada!");
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  cache.set(upperVersion, data);

  return data;
}
