import React from "react";

export default function Header() {
  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: "1000",
        fontSize: "2em",
        fontWeight: "bold",
        color: "#333",
        fontFamily: "'Inter'",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "1em",
            fontWeight: "bold",
            color: "#FFD700",
            fontFamily: "'Inter'",
          }}
        >
          MyPPMK
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "0.5em",
            color: "#333",
            fontFamily: "'Inter'",
          }}
        >
          Community Map
        </p>
      </div>
    </div>
  );
}
