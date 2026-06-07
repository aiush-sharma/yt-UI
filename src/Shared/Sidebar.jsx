import React from "react";

export default function Sidebar({ hidden = false }) {
  const links = [
    { name: "Home", icon: "🏠" },
    { name: "Shorts", icon: "🎬" },
    { name: "Subscriptions", icon: "📺" },
    { name: "Library", icon: "📁" },
    { name: "History", icon: "⏰" },
  ];

  const explore = [
    { name: "Trending", icon: "🔥" },
    { name: "Music", icon: "🎵" },
    { name: "Sports", icon: "⚽" },
    { name: "Gaming", icon: "🎮" },
    { name: "News", icon: "📰" },
  ];

  return (
    <aside
      className={`fixed top-14 left-0 h-[calc(100vh-56px)] w-64 bg-[#0b0b0b] text-white flex-col p-3 z-40 border-r border-neutral-800 overflow-y-auto ${
        hidden ? "hidden" : "flex"
      }`}
    >
      {/* Main nav */}
      <nav className="flex flex-col gap-1 mb-4 pb-4 border-b border-neutral-800">
        {links.map((link, i) => (
          <button
            key={i}
            aria-label={link.name}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 focus:outline-none group
              ${i === 0 ? "bg-neutral-800 text-white" : "text-neutral-200 hover:bg-neutral-800"}`}
          >
            <span className="w-9 h-9 flex items-center justify-center rounded-md bg-neutral-900 text-lg transition-colors duration-150 group-hover:bg-neutral-800">
              {link.icon}
            </span>
            <span className="truncate">{link.name}</span>
          </button>
        ))}
      </nav>

      {/* Explore */}
      <div className="flex flex-col gap-1 mb-4 pb-4 border-b border-neutral-800">
        <p className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          Explore
        </p>
        {explore.map((item, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-200 hover:bg-neutral-800 transition-colors duration-150"
          >
            <span className="w-8 text-center">{item.icon}</span>
            <span className="truncate">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Subscriptions stub */}
      <div className="flex flex-col gap-2 mt-auto pt-4">
        <p className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          Subscriptions
        </p>
        <div className="flex flex-col gap-2 px-3">
          <button className="w-full flex items-center gap-3 py-2 rounded-lg text-sm text-neutral-200 hover:bg-neutral-800 transition-colors duration-150">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-semibold">
              A
            </div>
            <div className="truncate text-sm">Channel 1</div>
          </button>
          <button className="w-full flex items-center gap-3 py-2 rounded-lg text-sm text-neutral-200 hover:bg-neutral-800 transition-colors duration-150">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-semibold">
              B
            </div>
            <div className="truncate text-sm">Channel 2</div>
          </button>
        </div>
      </div>
    </aside>
  );
}
