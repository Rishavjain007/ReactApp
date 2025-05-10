import React, { useState } from "react";

export default function About(props) {
  const [count, setCount] = useState(0);

  function handleChange() {
    setCount((prev) => prev + 1);
  }

  // const myStyle = {
  //   backgroundColor: props.mode === "dark" ? "#253744" : "white",
  //   color: props.mode === "dark" ? "white" : "#253744",
  // };

  return (
    <>
      <div className="container my-4" 
      // style={myStyle}
      >
        <h1 className="py-4">About</h1>
        <div className="accordion" id="accordionExample">
          {[1, 2, 3].map((item) => (
            <div className="accordion-item" key={item}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${item !== 1 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item}`}
                  aria-expanded={item === 1}
                  aria-controls={`collapse${item}`}
                  // style={myStyle}
                >
                  Accordion Item #{item}
                </button>
              </h2>
              <div
                id={`collapse${item}`}
                className={`accordion-collapse collapse ${item === 1 ? "show" : ""}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" 
                // style={myStyle}
                >
                  <strong>This is the item {item}'s accordion body.</strong> It is hidden by default until expanded.
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1>{count}</h1>
        <button className="btn btn-success my-3" onClick={handleChange}>
          Increase
        </button>
      </div>
    </>
  );
}
