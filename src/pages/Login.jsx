import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const doLogin = (e) => {
    e.preventDefault();

    if (username === "sonila" && password === "dp") {
      navigate("/birthday");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-body">

      {/* Floating Lights */}
      <div className="light light1"></div>
      <div className="light light2"></div>
      <div className="light light3"></div>

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

          {/* Password Field - Eye Toggle */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              className="toggle-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
