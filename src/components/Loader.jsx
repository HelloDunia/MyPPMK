import React, { useState, useEffect } from "react";

export default function Loader() {
  const messages = [
    "Messaging Faiz...",
    "Drawing the circles...",
    "Chat and Building...",
    "Something is happening...",
    "Connecting the dots...",
    "Brewing some coffee...",
    "Aligning the stars...",
    "Summoning the data gnomes...",
  ];
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const updateMessage = () => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[randomIndex]);
    };

    updateMessage(); // Set initial message immediately

    const interval = setInterval(updateMessage, 1500); // Change message every 1.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to run once on mount

  return (
    <div
      className="flex flex-col justify-center items-center h-screen text-4xl"
    >
      <span className="loading loading-ring loading-lg"></span>
      <p className="ml-4 mt-4 text-xl">{currentMessage}</p>
    </div>
  );
}
