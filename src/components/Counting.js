import React, { useState } from "react";
import "../App.css";

function Counting() {
  const [count, setCount] = useState(0);

  function handleChange() {
    setCount((prev) => prev + 1);
  }
  return (
    <div className="counting-section">
      <h1>{count}</h1>
      <div>
        <button className="btn btn-primary mt-2" onClick={handleChange}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counting;
