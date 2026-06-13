export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  content: string;
  sources?: string[];
  readingTime?: number;
}

export type BlogCategory = "symptomes" | "agir" | "vivre-avec";
