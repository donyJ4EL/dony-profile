import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="text-center p-8 max-w-md">
        <img
          src="/img/dogGod.png"
          alt="Avatar"
          className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
          Hi I'm Dony 👋
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          I'm a full-stack engineer who raps and codes.
        </p>
      </div>
    </div>
  );
}

export default Home;
