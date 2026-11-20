import Link from "next/link";

export default function BlogSection({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="py-10">
      <div className="mb-5 flex items-end justify-between border-b border-zinc-800 pb-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            In-Depth
          </span>
          <h2 className="text-2xl font-bold text-white">Blog Guides &amp; Breakdowns</h2>
        </div>
        <span className="text-xs text-zinc-500">{posts.length} Articles</span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col justify-between border border-zinc-800 bg-zinc-900/70 p-5 transition hover:border-zinc-700"
          >
            <div>
              <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
                <span className="border border-zinc-700 px-2 py-0.5 uppercase tracking-wider text-amber-400">
                  {post.tag}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                <Link href={`/blog/${post.slug}`} className="hover:text-amber-400">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-3">
              <span className="text-xs text-zinc-500">{post.displayDate}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="border border-zinc-700 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                Read Guide
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}