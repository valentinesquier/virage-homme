import fs from "fs";
import path from "path";
import type { BlogArticle } from "./blog-types";

const blogDir = path.join(process.cwd(), "content/blog/fr");

function estimateReadingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllArticles(): BlogArticle[] {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".json"));

  return files
    .map((f) => {
      const raw = fs.readFileSync(path.join(blogDir, f), "utf-8");
      const article: BlogArticle = JSON.parse(raw);
      article.readingTime = estimateReadingTime(article.content);
      return article;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): BlogArticle | null {
  const filePath = path.join(blogDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const article: BlogArticle = JSON.parse(raw);
  article.readingTime = estimateReadingTime(article.content);
  return article;
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getLatestArticles(count: number = 3): BlogArticle[] {
  return getAllArticles().slice(0, count);
}

export function getAllCategories(): string[] {
  const articles = getAllArticles();
  return [...new Set(articles.map((a) => a.category))].sort();
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  return [...new Set(articles.flatMap((a) => a.tags))].sort();
}
