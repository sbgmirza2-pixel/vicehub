import Image from "next/image";

export default function Hero({ onQuickJump }) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-900 text-white">
      
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-zinc-950/45" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="mb-2 inline-block border border-amber-400/50 bg-zinc-950/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
          Leonida &amp; Vice City Community Hub
        </p>
        <h1 className="mt-2 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          Quick &ldquo;What Is&rdquo; Answers, Short Gameplay Clips &amp; Practical Guides
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-200 md:text-base">
          Straight answers to real player questions, short clips with quick breakdowns, and
          practical guides for exploring Leonida without filler.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onQuickJump("faq")}
            className="border border-amber-400 bg-amber-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 transition hover:bg-amber-300"
          >
            Browse What Is Q&amp;A
          </button>
          <button
            type="button"
            onClick={() => onQuickJump("blog")}
            className="border border-zinc-700 bg-zinc-950/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-amber-400 hover:text-amber-400"
          >
            Read Blog Guides
          </button>
        </div>
      </div>
    </section>
  );
}