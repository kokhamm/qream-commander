"use client";
import { useState } from "react";

interface PreFooterProps {
  hardCoded: {
    prompt: string;
  };
}

export default function PreFooter({ hardCoded }: PreFooterProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <section
      className="flex items-center w-full bg-black "
      role="region"
      aria-label="Command input area"
    >
      <label htmlFor="command-input" className="text-lgrey text-36 leading-4.5">
        {hardCoded.prompt}
      </label>
      <input
        id="command-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength={20}
        className="text-lgrey text-36 leading-4.5 max-h-8.5 border-none outline-none"
        aria-label="Command input field"
      />
    </section>
  );
}
