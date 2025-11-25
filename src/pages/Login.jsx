import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const doLogin = (e) => {
    e.preventDefault();

    // HARD CODED LOGIN
    if (username === "sonila" && password === "sonila") {
      navigate("/birthday");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-body">

      {/* Floating Lights */}
      <div
        className="light"
        style={{
          width: "120px",
          height: "120px",
          top: "10%",
          left: "15%",
          animationDuration: "9s",
        }}
      ></div>

      <div
        className="light"
        style={{
          width: "90px",
          height: "90px",
          bottom: "15%",
          right: "20%",
          animationDuration: "7s",
        }}
      ></div>

      <div
        className="light"
        style={{
          width: "70px",
          height: "70px",
          top: "50%",
          right: "10%",
          animationDuration: "10s",
        }}
      ></div>

      {/* Login Box */}
      <div className="login-box">
        <h2>Welcome</h2>

        <form onSubmit={doLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
