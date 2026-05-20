import articlesData from "@/data/articles.json";

export type Article = {
  id: string;
  title: string;
  content: string;
};

export const articles: Article[] = articlesData as Article[];

/** Rough check for Bengali script in title */
export function isBengaliTitle(title: string): boolean {
  return /[\u0980-\u09FF]/.test(title);
}
