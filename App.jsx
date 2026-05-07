// src/App.jsx
import React, { useState } from 'react';
import { shipCode } from './lib/agent';

export default function FreshAI() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("Ready to build.");

  const handleShip = async () => {
    setStatus("Shipping...");
    const result = await shipCode("src/components/NewUI.js", "// Built with FreshAI", "Add new UI component");
    setStatus(result);
  };

  return (
    <div className="p-8 bg-slate-900 text-white min-h-screen font-mono">
      <h1 className="text-2xl text-emerald-400 font-bold mb-4">🍃 FreshAI Terminal</h1>
      <div className="border border-slate-700 p-4 rounded bg-black/50">
        <p className="text-slate-400 mb-2">// {status}</p>
        <textarea 
          className="w-full bg-transparent border-none outline-none text-emerald-300 h-32"
          placeholder="Describe the component you need..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          onClick={handleShip}
          className="mt-4 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded transition"
        >
          Build & Ship to GitHub
        </button>
      </div>
    </div>
  );
}
