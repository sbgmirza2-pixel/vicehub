export default function ClipsSection({ clips }) {
  if (!clips.length) return null;

  return (
    <section className="py-10">
      <div className="mb-5 flex items-end justify-between border-b border-zinc-800 pb-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Highlights
          </span>
          <h2 className="text-2xl font-bold text-white">Short Clips &amp; Moments</h2>
        </div>
        <span className="text-xs text-zinc-500">{clips.length} Clips</span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {clips.map((clip) => (
          <article
            key={clip.id}
            className="flex flex-col border border-zinc-800 bg-zinc-900/70 transition hover:border-zinc-700"
          >
            <div className="aspect-video w-full bg-zinc-950">
              <iframe
                src={clip.embedUrl}
                title={clip.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="border border-zinc-700 px-2 py-0.5 uppercase tracking-wider text-amber-400">
                  {clip.tag}
                </span>
                <span className="text-zinc-500">{clip.duration}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{clip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{clip.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}