import React from "react";

const funnyQuotes = [
  "Why did the Malaysian programmer break up with his keyboard? It had too many issues!",
  "What's a Korean developer's favorite type of music? K-Pop-ups!",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "There are 10 types of people in the world: those who understand binary, and those who don't.",
  "My code doesn't have bugs, it has random features.",
  "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
  "What's a programmer's favorite place in Malaysia? Cyberjaya, of course!",
  "How do you comfort a JavaScript bug? You console it.",
  "Why did the developer go broke? He used up all his cache.",
];

export default function Header() {
  const randomQuote = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];

  return (
    <div className="absolute top-5 left-5 z-50 text-2xl font-bold text-gray-700">
      <div className="relative">
        <h1
          className="m-0 text-4xl font-bold text-warning tooltip tooltip-right"
          data-tip={randomQuote}
        >
          MyPPMK
        </h1>
        <p className="m-0 text-sm text-gray-700">
          Community Map
        </p>
      </div>
    </div>
  );
}
