import React from "react";
import CardGrid from "./CardGrid";
import "./Body.css"; // Add a CSS file for styling if needed

const Body = () => (
  <main className="body-container">
    <h1 className="title">Welcome to the Vite React App</h1>
    <p className="description">This is the body section.</p>
    <CardGrid />
  </main>
);

export default Body;
