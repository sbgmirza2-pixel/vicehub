import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, SITE_CONFIG } from "../../../data/content";
import Footer from "../../../components/Footer";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Guide Not Found" };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.date,
      url: `${SITE_CONFIG.domain}/blog/${post.slug}`,
    },
  };
}

async function BlogPostContent({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    mainEntityOfPage: `${SITE_CONFIG.domain}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-4 flex items-center gap-3 text-xs text-zinc-400">
          <span className="border border-zinc-700 px-2 py-0.5 uppercase tracking-wider text-amber-400">
            {post.tag}
          </span>
          <span>{post.displayDate}</span>
          <span>&bull;</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
          {post.title}
        </h1>

        <p className="mt-4 border-l-2 border-amber-400 pl-4 text-base leading-relaxed text-zinc-300">
          {post.excerpt}
        </p>

        <div className="mt-8 space-y-8">
          {post.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
              <p className="mt-2 text-base leading-relaxed text-zinc-300">{section.body}</p>
            </section>
          ))}
        </div>

        {relatedPosts.length > 0 && (
          <aside className="mt-14 border-t border-zinc-800 pt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
              More Guides
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="block border border-zinc-800 bg-zinc-900/70 p-4 transition hover:border-amber-400"
                >
                  <span className="text-[11px] uppercase tracking-wider text-amber-400">
                    {rel.tag}
                  </span>
                  <h4 className="mt-1 font-semibold text-white">{rel.title}</h4>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </article>
    </>
  );
}

export default function BlogPostPage({ params }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            VICE<span className="text-amber-400">HUB</span>
          </Link>
          <Link
            href="/"
            className="border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300 hover:border-amber-400 hover:text-amber-400"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="mx-auto max-w-3xl px-4 py-12 text-sm text-zinc-400">
            Loading guide...
          </div>
        }
      >
        <BlogPostContent params={params} />
      </Suspense>

      <Footer />
    </div>
  );
}