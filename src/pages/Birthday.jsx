// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css";
// import "../pages/Birthday.css";

// // IMPORT YOUR ASSETS
// import photo from "../assets/image/photo.jpg";
// import song from "../assets/image/happybirthday.mp3";

// export default function Birthday() {
//   const navigate = useNavigate();
//   const audioRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(false);

//   const name = "Dear Sonila";
//   const message =
//     "May your special day be filled with love, joy, and all the beautiful moments you truly deserve. You bring positivity wherever you go—may the year ahead bring you even more happiness and success. 💖✨";

//   const toggleMusic = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !audioRef.current.muted;
//       setIsMuted(audioRef.current.muted);
//     }
//   };

//   const logout = () => {
//     navigate("/");
//   };

//   return (
//     <div className="birthday-body">
//       {/* Top-right buttons */}
//       <div className="top-right">
//         <button className="btn" onClick={logout}>
//           Logout
//         </button>
//         <button className="btn" onClick={toggleMusic}>
//           {isMuted ? "Unmute" : "Mute"}
//         </button>
//       </div>

//       {/* Background Music */}
//       <audio ref={audioRef} autoPlay loop>
//         <source src={song} type="audio/mpeg" />
//       </audio>

//       {/* Birthday Card */}
//       <div className="card">
//         <img src={photo} alt="Birthday" />
//         <h1>{name}, Wishing you a very Happy Birthday! 🎉❤️✨</h1>
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// }
// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css";
// import "../pages/Birthday.css";

// // IMPORT ALL ASSETS
// import photo1 from "../assets/image/photo.jpg";
// import photo2 from "../assets/image/photo2.jpg";
// import photo3 from "../assets/image/photo2.jpg";

// import song1 from "../assets/image/happybirthday.mp3";
// import song2 from "../assets/image/happybirthday.mp3";
// import song3 from "../assets/image/happybirthday.mp3";

// export default function BirthdayPages() {
//   const navigate = useNavigate();
//   const audioRef = useRef(null);

//   const [isMuted, setIsMuted] = useState(false);
//   const [page, setPage] = useState(0);

//   // ALL PAGES DATA
//   const pages = [
//     {
//       name: "Dear Sonila",
//       photo: photo1,
//       message:
//         "May your special day be filled with joy and endless smiles. You deserve all the happiness in the world! 💖✨",
//       song: song1,
//       bg: "linear-gradient(135deg, #1b2341, #8b6f2b, #d4b46a)",
//     },
//     {
//       name: "Beautiful Soul",
//       photo: photo2,
//       message:
//         "Your kindness and positivity light up everyone’s life. Keep shining and smiling always! 🌸💛",
//       song: song2,
//       bg: "linear-gradient(135deg, #ff8a8a, #ff3434, #ba0000)",
//     },
//     {
//       name: "Amazing Girl",
//       photo: photo3,
//       message:
//         "May your year ahead be full of love, blessings, and success. You are truly special! 🎀✨",
//       song: song3,
//       bg: "linear-gradient(135deg, #3b1e54, #6a4bff, #b49fff)",
//     },
//   ];

//   // Detect Swipe
//   let touchStartX = 0;

//   const handleTouchStart = (e) => {
//     touchStartX = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     const touchEndX = e.changedTouches[0].clientX;

//     if (touchStartX - touchEndX > 70) {
//       nextPage();
//     } else if (touchEndX - touchStartX > 70) {
//       prevPage();
//     }
//   };

//   const nextPage = () => {
//     setPage((p) => (p + 1) % pages.length);
//   };

//   const prevPage = () => {
//     setPage((p) => (p - 1 + pages.length) % pages.length);
//   };

//   const toggleMusic = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !audioRef.current.muted;
//       setIsMuted(audioRef.current.muted);
//     }
//   };

//   const logout = () => navigate("/");

//   return (
//     <div
//       className="birthday-body-pages"
//       style={{ background: pages[page].bg }}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Top buttons */}
//       <div className="top-right">
//         <button className="btn" onClick={logout}>
//           Logout
//         </button>
//         <button className="btn" onClick={toggleMusic}>
//           {isMuted ? "Unmute" : "Mute"}
//         </button>
//       </div>

//       {/* Music */}
//       <audio key={pages[page].song} ref={audioRef} autoPlay loop>
//         <source src={pages[page].song} type="audio/mpeg" />
//       </audio>

//       {/* Card */}
//       <div className="card fade-anim">
//         <img src={pages[page].photo} alt="Birthday" />
//         <h1>
//           {pages[page].name}, Happy Birthday! 🎉❤️✨
//         </h1>
//         <p>{pages[page].message}</p>
//       </div>
//     </div>
//   );
// }


// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css";
// import "../pages/Birthday.css";

// // IMPORT ALL ASSETS
// import photo1 from "../assets/image/photo.jpg";
// import photo2 from "../assets/image/photo2.jpg";
// import photo3 from "../assets/image/photo2.jpg";

// import song1 from "../assets/image/happybirthday.mp3";
// import song2 from "../assets/image/happybirthday.mp3";
// import song3 from "../assets/image/happybirthday.mp3";

// export default function BirthdayPages() {
//   const navigate = useNavigate();
//   const audioRef = useRef(null);

//   const [isMuted, setIsMuted] = useState(false);
//   const [page, setPage] = useState(0);

//   // ALL PAGES DATA
//   const pages = [
//     {
//       name: "Dear Sonila",
//       photo: photo1,
//       message:
//         "May your special day be filled with joy and endless smiles. You deserve all the happiness in the world! 💖✨",
//       song: song1,
//       bg: "linear-gradient(135deg, #1b2341, #8b6f2b, #d4b46a)",
//     },
//     {
//       name: "Beautiful Soul",
//       photo: photo2,
//       message:
//         "Your kindness and positivity light up everyone’s life. Keep shining and smiling always! 🌸💛",
//       song: song2,
//       bg: "linear-gradient(135deg, #ff8a8a, #ff3434, #ba0000)",
//     },
//     {
//       name: "Amazing Girl",
//       photo: photo3,
//       message:
//         "May your year ahead be full of love, blessings, and success. You are truly special! 🎀✨",
//       song: song3,
//       bg: "linear-gradient(135deg, #3b1e54, #6a4bff, #b49fff)",
//     },
//   ];

//   // SWIPE STATES
//   const [startX, setStartX] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);

//   // TOUCH START
//   const handleTouchStart = (e) => {
//     setStartX(e.touches[0].clientX);
//   };

//   // TOUCH END
//   const handleTouchEnd = (e) => {
//     const endX = e.changedTouches[0].clientX;
//     handleSwipeAction(startX, endX);
//   };

//   // MOUSE DOWN (desktop drag)
//   const handleMouseDown = (e) => {
//     setStartX(e.clientX);
//     setIsDragging(true);
//   };

//   // MOUSE UP
//   const handleMouseUp = (e) => {
//     if (!isDragging) return;
//     setIsDragging(false);
//     const endX = e.clientX;
//     handleSwipeAction(startX, endX);
//   };

//   // FINAL SWIPE ACTION
//   const handleSwipeAction = (start, end) => {
//     if (!start || !end) return;
//     const diff = start - end;

//     if (diff > 60) nextPage();       // swipe left
//     else if (diff < -60) prevPage(); // swipe right
//   };

//   const nextPage = () => {
//     setPage((p) => (p + 1) % pages.length);
//   };

//   const prevPage = () => {
//     setPage((p) => (p - 1 + pages.length) % pages.length);
//   };

//   const toggleMusic = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !audioRef.current.muted;
//       setIsMuted(audioRef.current.muted);
//     }
//   };

//   const logout = () => navigate("/");

//   return (
//     <div
//       className="birthday-body-pages"
//       style={{ background: pages[page].bg }}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//     >
//       {/* Top buttons */}
//       <div className="top-right">
//         <button className="btn" onClick={logout}>Logout</button>
//         <button className="btn" onClick={toggleMusic}>
//           {isMuted ? "Unmute" : "Mute"}
//         </button>
//       </div>

//       {/* Music */}
//       <audio key={pages[page].song} ref={audioRef} autoPlay loop>
//         <source src={pages[page].song} type="audio/mpeg" />
//       </audio>

//       {/* CARD */}
//       <div className="card fade-anim">
//         <img src={pages[page].photo} alt="Birthday" />
//         <h1>{pages[page].name}, Happy Birthday! 🎉❤️✨</h1>
//         <p>{pages[page].message}</p>
//       </div>
//     </div>
//   );
// }


// import { useState, useRef, useEffect } from "react";
// import "../App.css";
// import "./Birthday.css";

// // Your images
// import pic1 from "../assets/image/p1.jpg";
// import pic2 from "../assets/image/p2.jpg";
// import pic3 from "../assets/image/p3.jpg";
// import pic4 from "../assets/image/p4.jpg";

// // Your music files
// import m1 from "../assets/image/happybirthday.mp3";
// import m2 from "../assets/image/happybirthday.mp3";
// import m3 from "../assets/image/happybirthday.mp3";
// import m4 from "../assets/image/happybirthday.mp3";

// export default function BirthdayPages() {
//   const [page, setPage] = useState(0);
//   const audioRef = useRef(null);

//   const pages = [
//     {
//       img: pic1,
//       bg: "linear-gradient(135deg, #1b2341, #8b6f2b, #d4b46a)",
//       music: m1,
//       msg: "You look absolutely glowing! Wishing you endless smiles and love today. ❤️✨"
//     },
//     {
//       img: pic3,
//       bg: "linear-gradient(135deg, #094a41ff, #30aea0ff, #aaf4ebff)",
//       music: m2,
//       msg: "Just like your outfit, you bring calmness and brightness to life. 🌸💙"
//     },
//     {
//       img: pic2,
//       bg: "linear-gradient(135deg, #212912ff, #5c7131ff, #94b63fff)",
//       music: m3,
//       msg: "Your elegance shines beautifully. May your day be as lovely as you are. 🌿💛"
//     },
//     {
//       img: pic4,
//       bg: "linear-gradient(135deg, #1c2438, #314466, #a88f54)",
//       music: m4,
//       msg: "Grace, charm, and a smile that lights up everything — happiest birthday! 💙✨"
//     }
//   ];

//   // Change music on page change
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.load();
//       audioRef.current.play().catch(() => {});
//     }
//   }, [page]);

//   const next = () => setPage((page + 1) % pages.length);
//   const prev = () =>
//     setPage((page - 1 + pages.length) % pages.length);

//   return (
//     <div
//       className="page-container"
//       style={{ background: pages[page].bg }}
//     >
//       {/* Controls */}
//       <button className="arrow left" onClick={prev}>❮</button>
//       <button className="arrow right" onClick={next}>❯</button>

//       {/* Page Dots */}
//       <div className="dots">
//         {pages.map((_, i) => (
//           <span
//             key={i}
//             className={`dot ${i === page ? "active" : ""}`}
//             onClick={() => setPage(i)}
//           ></span>
//         ))}
//       </div>

//       {/* Audio */}
//       <audio ref={audioRef} autoPlay loop>
//         <source src={pages[page].music} type="audio/mpeg" />
//       </audio>

//       {/* Main Card */}
//       <div className="card">
//         <img src={pages[page].img} alt="pic" />
//         <h1>Happy Birthday Dear Sonila ❤️🎉</h1>
//         <p>{pages[page].msg}</p>
//       </div>
//     </div>
//   );
// }



// 

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

  // One global audio player only
  const audioRef = useRef(null);

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

  // LOAD AUDIO ONCE
  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audioRef.current = audio;
  }, []);

  // On page change → stop → load → play
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    audio.pause();
    audio.src = pages[page].music;
    audio.currentTime = 0;
    audio.muted = isMuted;

    audio.play().catch(() => {});
  }, [page]);

  // Mute/unmute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const next = () => setPage((page + 1) % pages.length);
  const prev = () => setPage((page - 1 + pages.length) % pages.length);

  const toggleMute = () => setIsMuted((m) => !m);
  const logout = () => navigate("/");

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
