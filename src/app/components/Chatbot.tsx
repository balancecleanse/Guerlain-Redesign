"use client";

// src/app/components/Chatbot.tsx
import { useState } from "react";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await fetch("/api/chatbot", {
      method: "POST",
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResponse(data.answer);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleSend} className="bg-gold text-white px-4 py-2">
        Ask
      </button>
      <div className="mt-2">{response}</div>
    </div>
  );
};
export default Chatbot;