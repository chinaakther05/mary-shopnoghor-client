import React from "react";

const VideoSection = ({ videoUrl }) => {
  const encodedUrl = encodeURIComponent(videoUrl);

  return (
    <div className="w-full py-12 bg-gray-50 dark:bg-gray-900 flex justify-center items-center transition-colors duration-300">
      <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=0&width=500`}
          width="100%"
          height="100%"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Video"
        ></iframe>

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <svg
            className="w-16 h-16 text-white opacity-80"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
