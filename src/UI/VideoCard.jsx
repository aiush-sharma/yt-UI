import React, { useCallback } from "react";

const VideoCard = ({ thumbnail, title, channel, views, videoUrl }) => {
  const handleOpen = useCallback(() => {
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  }, [videoUrl]);

  return (
    <article
      onClick={handleOpen}
      className="group cursor-pointer flex flex-col gap-2 transition-opacity duration-150 hover:opacity-80"
    >
      <div className="relative overflow-hidden rounded-xl bg-neutral-900 aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {channel.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-white line-clamp-2 leading-tight group-hover:text-gray-300">
            {title}
          </h3>
          <p className="text-xs text-neutral-400 mt-1">{channel}</p>
          <p className="text-xs text-neutral-500">YouTube video</p>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
