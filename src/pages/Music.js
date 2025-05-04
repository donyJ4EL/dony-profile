import React from "react";

const musicList = [
  {
    name: "Studio Freestyle",
    description: "Freestyle in my studio",
    audioUrl: "/music/freestyle.mp3",
    cover: "/img/music1.jpg",
  },
  {
    name: "Sunset",
    description: "Sunset time",
    audioUrl: "/music/shine-DEMO.mp3",
    cover: "/img/cover2.jpg",
  },
  {
    name: "Fall in fall",
    description: "Melody rap",
    audioUrl: "/music/Fall In Fall.mp3",
    cover: "/img/cover3.jpg",
  },
];

function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold text-center mb-10">🎵 My Music</h1>

        {musicList.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-4 mb-8 transition-shadow duration-300"
          >
            {item.cover && (
              <img
                src={item.cover}
                alt={`${item.name} cover`}
                className="w-full h-full object-cover rounded-lg mb-4 shadow-sm hover:-translate-y-1er"
              />
            )}

            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>

            {item.audioUrl && (
              <audio controls src={item.audioUrl} className="w-full mt-4 rounded" />
            )}

            {item.videoUrl && (
              <div className="mt-6 aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={item.videoUrl}
                  title={item.name}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
