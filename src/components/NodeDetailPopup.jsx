import React, { useState, useEffect, useRef } from "react";

export default function NodeDetailPopup({ selectedNode, onClose }) {
  const [currentNode, setCurrentNode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const prevSelectedNodeId = useRef(null);

  useEffect(() => {
    if (selectedNode) {
      // If a new node is selected AND it's different from the previously displayed node
      // OR if it's the very first node being selected
      if (selectedNode.id !== prevSelectedNodeId.current) {
        // If there was a previously selected node, animate out first
        if (prevSelectedNodeId.current !== null) {
          setIsVisible(false); // Start slide-out animation for the old node
          const timer = setTimeout(() => {
            setCurrentNode(selectedNode); // Update to new node after slide-out
            setIsVisible(true); // Start slide-in animation for the new node
            prevSelectedNodeId.current = selectedNode.id;
          }, 600); // Matches the CSS transition duration
          return () => clearTimeout(timer);
        } else {
          // Initial selection, no previous node to animate out
          setCurrentNode(selectedNode);
          const timer = setTimeout(() => setIsVisible(true), 10); // Small delay for mounting
          prevSelectedNodeId.current = selectedNode.id;
          return () => clearTimeout(timer);
        }
      }
      // If the same node is selected again, do nothing (it's already visible)
    } else {
      // selectedNode is null, so close the popup
      setIsVisible(false);
      prevSelectedNodeId.current = null; // Reset prevSelectedNodeId when closed
    }
  }, [selectedNode]);

  const handleClose = () => {
    setIsVisible(false);
    // Delay onClose to allow for the closing animation to complete
    setTimeout(() => {
      onClose();
    }, 200);
  };

  // When the slide-out transition ends, remove the node data
  const onTransitionEnd = () => {
    if (!isVisible && !selectedNode) { // Only clear currentNode if popup is truly closed
      setCurrentNode(null);
    }
  };
  
  if (!currentNode && !isVisible) { // Only return null if no node is selected AND not visible (fully closed)
    return null;
  }

  const instagramUsername = currentNode.club_instagram?.replace('@', '') || '';
  const instagramUrl = instagramUsername ? `https://instagram.com/${instagramUsername}` : '#';
  const emailUrl = currentNode.club_email ? `mailto:${currentNode.club_email}` : '#';

  return (
    <div 
      className={`fixed top-0 right-0 w-80 h-full bg-gray-900 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
      onTransitionEnd={onTransitionEnd}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 p-4 text-gray-900 flex justify-between items-center">
        <h2 className="text-xl font-bold">{currentNode.club_name} ({currentNode.club_abbreviated_name})</h2>
        <button 
          onClick={handleClose}
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
        <div className={`transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="mb-6 flex justify-center">
            <img
              src={`${process.env.REACT_APP_SUPABASE_STORAGE_URL}${currentNode.club_abbreviated_name}.jpg`}
              alt={currentNode.club_name}
              className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
            />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className={`bg-gray-800 rounded-lg p-3 transition-all duration-500 ease-in-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="text-sm font-semibold text-yellow-400 mb-1">ABOUT</h3>
            <p className="text-gray-200">{currentNode.club_description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className={`bg-gray-800 rounded-lg p-3 transition-all duration-500 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h3 className="text-sm font-semibold text-yellow-400 mb-1">ESTABLISHED</h3>
              <p className="text-gray-100 font-medium">{currentNode.club_year}</p>
            </div>
            
            <div className={`bg-gray-800 rounded-lg p-3 transition-all duration-500 ease-in-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h3 className="text-sm font-semibold text-yellow-400 mb-1">MEMBERS</h3>
              <p className="text-gray-100 font-medium">{currentNode.club_members_num}</p>
            </div>
          </div>

          <div className={`bg-gray-800 rounded-lg p-3 transition-all duration-500 ease-in-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
                  {currentNode.club_email}
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
    </div>
  );
}