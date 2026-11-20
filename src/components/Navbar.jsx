"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) {
  const tabs = [
    { id: "all", label: "All" },
    { id: "faq", label: "What Is & Q&A" },
    { id: "clips", label: "Short Clips" },
    { id: "blog", label: "Blog Guides" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="relative z-40 sticky top-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => {
              setActiveTab("all");
              setSearchQuery("");
            }}
            className="relative z-10 flex cursor-pointer items-center gap-2.5 text-xl font-bold tracking-tight text-white"
          >
            <Image
              src="logo.jpg"
              alt="VICEHUB logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8 border border-amber-400/60 object-cover"
            />
            <span>
              VICE<span className="text-amber-400">HUB</span>
            </span>
          </Link>
          <span className="border border-zinc-700 px-2 py-0.5 text-xs uppercase tracking-wider text-zinc-400 md:ml-3">
            Fan Guide &amp; Clips
          </span>
        </div>

        <nav aria-label="Primary navigation" className="relative z-10 flex flex-wrap gap-1.5">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`cursor-pointer border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                activeTab === tab.id
                  ? "border-amber-400 bg-amber-400 text-zinc-950"
                  : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="relative z-10 w-full md:w-64">
          <label htmlFor="site-search" className="sr-only">
            Search questions, clips, guides
          </label>
          <input
            id="site-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, clips, guides..."
            className="w-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}