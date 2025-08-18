import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2em",
        fontFamily: "'Inter'",
      }}
    >
      Loading images...
    </div>
  );
}
