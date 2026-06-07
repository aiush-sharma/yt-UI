import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { RiNotification3Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

export default function Navbar({ onToggleSidebar, sidebarHidden }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = formData.get("search-input")?.toString().trim() || "";
    setQuery(data);
    navigate(`/search?q=${encodeURIComponent(data)}`);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] border-b border-neutral-800 flex items-center justify-between px-4 z-50 select-none">
      {/* Left Section: Menu Toggle Button & Logo */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => onToggleSidebar && onToggleSidebar()}
          className="text-white text-2xl p-2 hover:bg-neutral-800 rounded-lg transition-colors duration-150 active:scale-95"
          aria-label="Toggle sidebar"
        >
          {sidebarHidden ? "☰" : "✕"}
        </button>

        {/* YouTube Logo */}
        <div
          className="flex items-center gap-1.5 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <svg
            className="w-24 h-6"
            viewBox="0 0 100 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="5"
              y="22"
              fontSize="20"
              fontWeight="bold"
              fill="white"
              fontFamily="Arial, sans-serif"
            >
              YouTube
            </text>
          </svg>
          <div className="w-5 h-5 bg-netural-900 rounded-sm transform transition-transform group-hover:scale-110"></div>
        </div>
      </div>

      {/* Center Section: Advanced Responsive Search Engine Bar */}
      <div className="flex flex-1 max-w-[640px] mx-4 items-center justify-center">
        <form onSubmit={handleSearch} className="flex w-full items-center">
          <div className="flex flex-1 bg-neutral-900 border border-neutral-700 rounded-l-full px-4 py-1.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all duration-150">
            <input
              type="text"
              placeholder="Search videos..."
              name="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder-neutral-500 text-sm font-light"
            />
          </div>

          {/* Search Action Button */}
          <button
            type="submit"
            className="bg-neutral-800 border-y border-r border-neutral-700 px-6 py-1.5 rounded-r-full hover:bg-neutral-700 text-neutral-300 transition-colors duration-150 active:bg-neutral-600 text-sm h-[34px]"
          >
        <FaSearch></FaSearch>
          </button>
        </form>
      </div>

      {/* Right Section: System Actions & User Authentication Node */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Video Create Shortcut Button */}
        <button
          className="p-2 text-white hover:bg-neutral-800 rounded-full hidden sm:block text-2xl transition-colors"
          title="Create"
        >
       <AiFillPlusCircle />
        </button>

        {/* Notification Bell Badge Button */}
        <button
          className="p-2 text-white hover:bg-neutral-800 rounded-full relative transition-colors text-xl"
          title="Notifications"
        >
          <RiNotification3Fill></RiNotification3Fill>
          <span className="absolute top-0 left-5 bg-red-600 text-[10px] text-lg font-bold text-white h-4 w-5 rounded-full flex items-center justify-center animate-pulse">
            3
          </span>
        </button>

        {/* User Identity Matrix Frame */}
        <div
          className="h-8 w-8 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full text-lg flex items-center justify-center font-semibold  text-white cursor-pointer hover:opacity-90 active:scale-95 transition-all shadow-md shadow-indigo-950/50"
          title="Ayush Sharma"
        >
          AS
        </div>
      </div>
    </nav>
  );
}
