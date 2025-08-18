import React, { useState, useEffect } from "react";

export default function Loader() {
  const messages = [
    "Messaging Faiz...",
    "Drawing the circles...",
    "Chat and Building...",
    "Something is happening...",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen text-4xl"
    >
      <span className="loading loading-ring loading-lg"></span>
      <p className="ml-4 mt-4 text-xl">{messages[currentMessageIndex]}</p>
    </div>
  );
}
