import React from "react";

export default function NodeDetailPopup({ selectedNode, onClose }) {
  if (!selectedNode) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "300px",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderLeft: "1px solid #ccc",
        padding: "20px",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
        fontFamily: "'Inter'",
        overflowY: "auto",
      }}
    >
      <h2>Node Details</h2>
      <img
        src={selectedNode.image}
        alt={selectedNode.title}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
      />
      <p><strong>ID:</strong> {selectedNode.id}</p>
      <p><strong>Title:</strong> {selectedNode.title}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
