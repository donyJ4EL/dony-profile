import React from "react";
import { Link } from "react-router-dom";
import '../Home.css';

function Home() {
    return (
        <div className="home-container">
            <img src="/dogGod.png" alt="Avatar" className="avatar"/>
            <h1>Hi I'm Dony 👋</h1>
            <p>I'm a full-stack engineer who raps and codes.</p>
        </div>
    );
}

export default Home;