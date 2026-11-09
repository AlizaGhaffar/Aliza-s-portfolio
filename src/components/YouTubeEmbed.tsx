"use client";

import React, { useState } from 'react';

interface YouTubeEmbedProps {
  id: string;
  title: string;
}

// Shows only a lightweight thumbnail until clicked, so YouTube's player scripts
// are not downloaded for visitors who never play the video.
const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ id, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group/video relative aspect-video w-full mb-4 rounded-xl overflow-hidden border border-white/10 bg-black">
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- already a small, optimized YouTube thumbnail */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover/video:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-600 text-white shadow-xl shadow-black/40 transition-transform duration-300 group-hover/video:scale-110">
              <svg className="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.86l11.14-6.86a1 1 0 0 0 0-1.72L9.52 4.28A1 1 0 0 0 8 5.14z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

export default YouTubeEmbed;
