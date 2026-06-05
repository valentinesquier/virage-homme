import fs from "fs";
import path from "path";

export interface ProductData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  features: string[];
  stripePriceId: string;
  image?: string;
  imageAlt?: string;
  ctaText: string;
}

const productsDir = path.join(process.cwd(), "content/products");

export function getProduct(slug: string): ProductData | null {
  const filePath = path.join(productsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
