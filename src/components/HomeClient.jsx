"use client";
import { useState, useMemo } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FaqSection from "./FaqSection";
import ClipsSection from "./ClipsSection";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

export default function HomeClient({ faqItems, shortClips, blogPosts }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();

  const filteredFaqs = useMemo(
    () =>
      faqItems.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query) ||
          item.tag.toLowerCase().includes(query)
      ),
    [faqItems, query]
  );

  const filteredClips = useMemo(
    () =>
      shortClips.filter(
        (clip) =>
          clip.title.toLowerCase().includes(query) ||
          clip.summary.toLowerCase().includes(query) ||
          clip.tag.toLowerCase().includes(query)
      ),
    [shortClips, query]
  );

  const filteredPosts = useMemo(
    () =>
      blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tag.toLowerCase().includes(query)
      ),
    [blogPosts, query]
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Hero onQuickJump={(tab) => setActiveTab(tab)} />

      <main className="mx-auto max-w-6xl px-4">
        {(activeTab === "all" || activeTab === "faq") && <FaqSection items={filteredFaqs} />}
        {(activeTab === "all" || activeTab === "clips") && <ClipsSection clips={filteredClips} />}
        {(activeTab === "all" || activeTab === "blog") && <BlogSection posts={filteredPosts} />}
      </main>

      <Footer />
    </div>
  );
}