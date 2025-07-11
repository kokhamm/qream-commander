"use client";

import { useState } from "react";

interface Props {
  data: {
    prompt: string;
  };
}

const PreFooter = ({ data }: Props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section
      aria-label="Command input area"
      role="region"
      className="flex items-center w-full bg-black "
    >
      <label htmlFor="commandInput" className="text-lgrey text-4xl">
        {data.prompt}
      </label>

      <input
        aria-label="Command input field"
        id="commandInput"
        maxLength={20}
        type="text"
        value={inputValue}
        className="text-lgrey text-4xl max-h-8.5 border-none outline-none"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </section>
  );
};

export default PreFooter;
