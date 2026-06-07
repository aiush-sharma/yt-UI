import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";

const API_URL =
  import.meta.env.VITE_YOUTUBE_API_URL ||
  "https://www.googleapis.com/youtube/v3";

export default function useYouTubeSearch(query) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = useCallback(async () => {
    if (!query) {
      setVideos([]);
      setError(null);
      return;
    }

    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

    if (!API_KEY) {
      setError(
        "Missing YouTube API key. Add VITE_YOUTUBE_API_KEY to your .env file and restart the dev server.",
      );
      setVideos([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: {
          key: API_KEY,
          part: "snippet",
          q: query,
          maxResults: 12,
          type: "video",
          fields:
            "items(id/videoId,snippet(title,channelTitle,thumbnails/high/url,thumbnails/default/url,publishedAt,description))",
        },
      });

      const items = response.data.items || [];
      const parsedVideos = items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        thumbnail:
          item.snippet.thumbnails?.high?.url ||
          item.snippet.thumbnails?.default?.url ||
          "",
        publishedAt: item.snippet.publishedAt,
        description: item.snippet.description,
        videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      }));

      setVideos(parsedVideos);
    } catch (fetchError) {
      setError(
        fetchError.response?.data?.error?.message ||
          fetchError.message ||
          "Unable to fetch YouTube videos.",
      );
      setVideos([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos, query]);

  const videoCountLabel = useMemo(
    () => `${videos.length} video${videos.length === 1 ? "" : "s"}`,
    [videos],
  );

  return { videos, loading, error, videoCountLabel };
}
