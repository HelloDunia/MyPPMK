import React from "react";

export default function NodeDetailPopup({ selectedNode, onClose }) {
  if (!selectedNode) {
    return null;
  }

  return (
    <div
      className="absolute top-0 right-0 w-[300px] h-full bg-white bg-opacity-95 border-l border-gray-300 p-5 shadow-lg overflow-y-auto"
    >
      <h2 className="text-xl font-bold mb-4">{selectedNode.club_name}</h2>
      <img
        src={`${process.env.REACT_APP_SUPABASE_STORAGE_URL}${selectedNode.club_abbreviated_name}.jpg`}
        alt={selectedNode.club_name}
        className="w-full rounded-lg mb-2.5"
      />
      <p className="mb-1"><strong>Year:</strong> {selectedNode.club_year}</p>
      <p className="mb-1"><strong>Email:</strong> {selectedNode.club_email}</p>
      <p className="mb-1"><strong>Instagram:</strong> {selectedNode.club_instagram}</p>
      <p className="mb-1"><strong>Description:</strong> {selectedNode.club_description}</p>
      <p className="mb-4"><strong>Members:</strong> {selectedNode.club_members_num}</p>
      <button className="btn" onClick={onClose}>Close</button>
    </div>
  );
}
