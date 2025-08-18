import React from "react";

export default function NodeDetailPopup({ selectedNode, onClose }) {
  if (!selectedNode) {
    return null;
  }

  return (
    <div
      className="absolute top-0 right-0 w-[300px] h-full bg-white bg-opacity-95 border-l border-gray-300 p-5 shadow-lg overflow-y-auto"
    >
      <h2 className="text-xl font-bold mb-4">Node Details</h2>
      <img
        src={selectedNode.image}
        alt={selectedNode.title}
        className="w-full rounded-lg mb-2.5"
      />
      <p className="mb-1"><strong>ID:</strong> {selectedNode.id}</p>
      <p className="mb-4"><strong>Title:</strong> {selectedNode.title}</p>
      <button className="btn" onClick={onClose}>Close</button>
    </div>
  );
}
