import React, { useState } from "react";
import './App.css';




function App() {
  const [color, setColor] = useState("rgb(255, 63, 63)");

  const toggleColor = () => {
    const newColor = color === "rgb(255, 63, 63)" ? "rgb(63, 66, 255)" : "rgb(255, 63, 63)";
    setColor(newColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
}

export default App;