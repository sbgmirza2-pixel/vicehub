"use client";
import { useState } from "react";

export default function FaqSection({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  if (!items.length) return null;

  return (
    <section className="py-10">
      <div className="mb-5 flex items-end justify-between border-b border-zinc-800 pb-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Quick Answers
          </span>
          <h2 className="text-2xl font-bold text-white">&ldquo;What Is...&rdquo; &amp; Player Q&amp;A</h2>
        </div>
        <span className="text-xs text-zinc-500">{items.length} Topics</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="border border-zinc-800 bg-zinc-900/70 p-5 transition hover:border-zinc-700"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="border border-zinc-700 px-2 py-0.5 text-[11px] uppercase tracking-wider text-amber-400">
                  {item.tag}
                </span>
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="text-xs text-zinc-400 hover:text-white"
                >
                  {isOpen ? "Hide" : "Expand"}
                </button>
              </div>
              <h3 className="text-base font-semibold text-white">{item.question}</h3>
              <p className={`mt-2 text-sm leading-relaxed text-zinc-300 ${isOpen ? "" : "line-clamp-2"}`}>
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}