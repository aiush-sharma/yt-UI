import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useYouTubeSearch from "../Hooks/useYouTubeSearch";
import VideoCard from "../UI/VideoCard";
import "./Search.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = useMemo(
    () => searchParams.get("q")?.trim() || "",
    [searchParams],
  );
  const { videos, loading, error, videoCountLabel } = useYouTubeSearch(query);

  return (
    <main className="pt-20 pb-10 min-h-screen bg-black text-white md:ml-64">
      <section className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            {query ? `Search results for "${query}"` : "Search YouTube"}
          </h1>
          <p className="text-neutral-400 text-sm">
            {query
              ? "Showing real YouTube search results"
              : "Use the search bar above to find videos"}
          </p>
          {query && videos.length > 0 && (
            <span className="text-neutral-500 text-sm mt-2 block">
              {videoCountLabel} found
            </span>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-video bg-neutral-800 rounded-xl mb-3"></div>
                <div className="h-3 bg-neutral-800 rounded mb-2"></div>
                <div className="h-2 bg-neutral-800 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-6 text-center">
            <h2 className="text-lg font-semibold text-red-400 mb-2">
              Unable to fetch videos
            </h2>
            <p className="text-red-300/80 text-sm">{error}</p>
          </div>
        ) : videos.length === 0 ? (
          <p className="text-neutral-400 text-center py-12">
            {query
              ? `No videos found for "${query}". Try a different search term.`
              : "Type a search term above to load videos."}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Search;
