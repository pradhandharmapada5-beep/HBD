

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import "./Birthday.css";

// Images
import pic1 from "../assets/image/p1.jpg";
import pic2 from "../assets/image/p2.jpg";
import pic3 from "../assets/image/p3.jpg";
import pic4 from "../assets/image/p4.jpg";

// Music
import m1 from "../assets/music/m1.mp3";
import m2 from "../assets/music/m1.mp3";
import m3 from "../assets/music/m1.mp3";
import m4 from "../assets/music/m1.mp3";

export default function BirthdayPages() {
  const navigate = useNavigate();

  // One audio object — prevents overlapping
  const audioPlayer = useRef(new Audio());

  const [page, setPage] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const pages = [
    {
      img: pic1,
      bg: "linear-gradient(135deg, #1b2341, #8b6f2b, #d4b46a)",
      music: m1,
      msg: "You look absolutely glowing! Wishing you endless smiles and love today. ❤️✨",
    },
    {
      img: pic2,
      bg: "linear-gradient(135deg, #212912ff, #5c7131ff, #94b63fff)",
      music: m2,
      msg: "Like your outfit, you bring calmness and brightness to everyone's life. 🌸💙",
    },
    {
      img: pic3,
      bg: "linear-gradient(135deg, #094a41ff, #30aea0ff, #aaf4ebff)",
      music: m3,
      msg: "Your elegance and grace shine beautifully—wishing you joy always. 🌿💛",
    },
    {
      img: pic4,
      bg: "linear-gradient(135deg, #1c2438, #314466, #a88f54)",
      music: m4,
      msg: "Grace, charm, and a smile that lights up everything — happiest birthday! 💙✨",
    },
  ];

  // Change page music
  useEffect(() => {
    const audio = audioPlayer.current;

    audio.pause();
    audio.currentTime = 0;

    audio.src = pages[page].music;
    audio.loop = true;
    audio.muted = isMuted;

    audio.play().catch(() => {});
  }, [page]);

  // Handle mute toggle
  useEffect(() => {
    audioPlayer.current.muted = isMuted;
  }, [isMuted]);

  const next = () => setPage((page + 1) % pages.length);
  const prev = () => setPage((page - 1 + pages.length) % pages.length);
  const toggleMute = () => setIsMuted(!isMuted);
  const logout = () => {
  const audio = audioPlayer.current;
  audio.pause();
  audio.currentTime = 0;
  audio.src = "";
  navigate("/");
};


  return (
    <div className="page-container" style={{ background: pages[page].bg }}>
      
      {/* TOP BUTTONS */}
      <div className="top-right">
        <button className="btn" onClick={logout}>Logout</button>
        <button className="btn" onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>

      {/* ARROWS */}
      <button className="arrow left" onClick={prev}>❮</button>
      <button className="arrow right" onClick={next}>❯</button>

      {/* DOTS */}
      <div className="dots">
        {pages.map((_, i) => (
          <span
            key={i}
            className={`dot ${page === i ? "active" : ""}`}
            onClick={() => setPage(i)}
          ></span>
        ))}
      </div>

      {/* CARD */}
      <div className="card">
        <img src={pages[page].img} alt="birthday" />
        <h1>Happy Birthday Dear Sonila ❤️🎉</h1>
        <p>{pages[page].msg}</p>
      </div>

    </div>
  );
}
