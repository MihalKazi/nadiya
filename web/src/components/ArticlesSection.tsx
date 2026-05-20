"use client";

import { useState } from "react";
import { articles, isBengaliTitle } from "@/lib/articles";
import { SectionLabel } from "@/components/About";

export function ArticlesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="writing" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Writing</SectionLabel>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Articles & essays
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Nutrition, maternal health, food policy, and public health — in
          English and Bangla.
        </p>

        <ul className="mt-10 space-y-3">
          {articles.map((article) => {
            const open = openId === article.id;
            const bengali = isBengaliTitle(article.title);
            return (
              <li
                key={article.id}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/50 transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenId(open ? null : article.id)
                  }
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={open}
                >
                  <span
                    className={`flex-1 font-medium leading-snug text-slate-900 ${
                      bengali ? "font-bengali text-lg" : "font-serif text-lg"
                    }`}
                  >
                    {article.title}
                  </span>
                  <span
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white transition-transform ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div
                    className={`border-t border-slate-200/80 px-5 pb-6 pt-2 sm:px-6 ${
                      bengali ? "font-bengali" : ""
                    }`}
                  >
                    <ArticleBody content={article.content} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ArticleBody({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="prose-article max-w-none space-y-4 text-base leading-relaxed text-slate-700">
      {blocks.map((block, i) => (
        <p key={i} className="whitespace-pre-line">
          {block.trim()}
        </p>
      ))}
    </div>
  );
}
