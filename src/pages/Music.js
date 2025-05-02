import React from "react";
import "../Music.css";

const musicList = [
    {
      name: "书房Freestyle",
      description: "My first rap song",
      audioUrl: "/music/my-first-rap.mp3"
      
    },
    {
      name: "Fall in fall",
      description: "Melody rap",
      audioUrl: "/music/time-gap.mp3",
    },
    {
      name: "Not like us remix",
      description: "Just for fun",
      audioUrl: "/music/time-gap.mp3",
      videoUrl: "https://www.youtube.com/embed/boyKJjHt4uk?si=qeGLtPJLS7WR5f0o",
    }
  ];

function Music() {
    return (
        <div className="music-container">
            <h1 className="music-title">🎵 My Music</h1>
            {
                musicList.map(
                    (item) => (
                        <div className="music-card">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>

                            {item.audioUrl && (
                                <audio controls src={item.audioUrl} className="music-audio" />
                            )}

                            {item.videoUrl && (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={item.videoUrl}
                                    title={item.name}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                        
                    )
                )
            }
        </div>
    );
}

export default Music;