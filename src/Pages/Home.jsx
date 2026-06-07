import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="pt-20 pb-10 min-h-screen bg-black text-white md:ml-64">
      <section className="max-w-7xl mx-auto px-4">
        <div className="py-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to YouTube</h1>
          <p className="text-neutral-400 text-lg mb-8">
            Use the search bar to discover videos
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-sm font-medium cursor-pointer transition-colors">
              🔥 Trending
            </span>
            <span className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-sm font-medium cursor-pointer transition-colors">
              🎵 Music
            </span>
            <span className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-sm font-medium cursor-pointer transition-colors">
              🎮 Gaming
            </span>
            <span className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-sm font-medium cursor-pointer transition-colors">
              ⚽ Sports
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
