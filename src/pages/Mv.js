import React from "react";

const mvList = [
  {
    name: "<<Not Like Us>> Remix",
    description: "Just for fun",
    videoUrl: "https://www.youtube.com/embed/boyKJjHt4uk?si=qeGLtPJLS7WR5f0o",
  },
];

function Mv() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold text-center mb-12">🎬 My Music Videos</h1>

        {mvList.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl mb-16 overflow-hidden"
          >
            <div className="w-full h-[75vh]">
              <iframe
                className="w-full h-full"
                src={item.videoUrl}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mv;
