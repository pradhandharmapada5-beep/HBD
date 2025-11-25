import React from "react";
import logo from "../assets/image/logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Birthday Wishes</h1>
    </nav>
  );
}
