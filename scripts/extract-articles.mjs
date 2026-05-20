import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "preview (2).html"), "utf8");
const re =
  /onclick="toggle\('(a\d+)'\)">([^<]+)<\/h3>\s*<div id="\1" class="article-content">([\s\S]*?)<\/div>/g;

const articles = [];
let m;
while ((m = re.exec(html)) !== null) {
  articles.push({ id: m[1], title: m[2].trim(), content: m[3].trim() });
}

const outDir = path.join(root, "web", "src", "data");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "articles.json"), JSON.stringify(articles, null, 2));
console.log("Extracted", articles.length, "articles");
