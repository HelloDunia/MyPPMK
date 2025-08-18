import React from "react";

export default function NodeDetailPopup({ selectedNode, onClose }) {
  if (!selectedNode) {
    return null;
  }

  const instagramUsername = selectedNode.club_instagram?.replace('@', '') || '';
  const instagramUrl = instagramUsername ? `https://instagram.com/${instagramUsername}` : '#';
  const emailUrl = selectedNode.club_email ? `mailto:${selectedNode.club_email}` : '#';

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-gray-900 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 p-4 text-gray-900 flex justify-between items-center">
        <h2 className="text-xl font-bold">{selectedNode.club_name}</h2>
        <button 
          onClick={onClose}
          className="text-gray-900 hover:text-gray-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        {/* Club Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src={`${process.env.REACT_APP_SUPABASE_STORAGE_URL}${selectedNode.club_abbreviated_name}.jpg`}
            alt={selectedNode.club_name}
            className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-3">
            <h3 className="text-sm font-semibold text-yellow-400 mb-1">ABOUT</h3>
            <p className="text-gray-200">{selectedNode.club_description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800 rounded-lg p-3">
              <h3 className="text-sm font-semibold text-yellow-400 mb-1">ESTABLISHED</h3>
              <p className="text-gray-100 font-medium">{selectedNode.club_year}</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3">
              <h3 className="text-sm font-semibold text-yellow-400 mb-1">MEMBERS</h3>
              <p className="text-gray-100 font-medium">{selectedNode.club_members_num}</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3">
            <h3 className="text-sm font-semibold text-yellow-400 mb-1">CONTACT</h3>
            <div className="space-y-3">
              <a 
                href={emailUrl} 
                className="flex items-center hover:text-yellow-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-200">
                  <span className="font-medium text-gray-300"> </span>
                  {selectedNode.club_email}
                </span>
              </a>
              
              <a 
                href={instagramUrl} 
                className="flex items-center hover:text-yellow-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 6.5h.01" />
                </svg>
                <span className="text-gray-200">
                  <span className="font-medium text-gray-300"> </span>
                  @{instagramUsername}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4">
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}