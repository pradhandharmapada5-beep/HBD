import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../pages/Birthday.css";

// IMPORT YOUR ASSETS
import photo from "../assets/image/photo.jpg";
import song from "../assets/image/happybirthday.mp3";

export default function Birthday() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const name = "Dear Sonila";
  const message =
    "May your special day be filled with love, joy, and all the beautiful moments you truly deserve. You bring positivity wherever you go—may the year ahead bring you even more happiness and success. 💖✨";

  const toggleMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="birthday-body">
      {/* Top-right buttons */}
      <div className="top-right">
        <button className="btn" onClick={logout}>
          Logout
        </button>
        <button className="btn" onClick={toggleMusic}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>

      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop>
        <source src={song} type="audio/mpeg" />
      </audio>

      {/* Birthday Card */}
      <div className="card">
        <img src={photo} alt="Birthday" />
        <h1>{name}, Wishing you a very Happy Birthday! 🎉</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
