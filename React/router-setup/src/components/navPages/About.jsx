import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About page</h1>
      <h2>Your Destination is Waiting</h2>
      <Link to="/vans">Explore Vans</Link>
    </div>
  );
}

export default About;
