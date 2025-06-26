"use client";
import { useState, useRef, useEffect } from "react";
import Dropdown, { DropdownItem } from "./Dropdown";

interface HeaderProps {
  hardCoded: {
    menu: Array<{
      label: string;
      dropdown?: DropdownItem[];
    }>;
  };
}

export default function Header({ hardCoded }: HeaderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const links = hardCoded.menu.map((item, index) => (
    <div key={index} className="inline-block">
      <span
        className={`px-8 text-36 first-letter:text-yellow inline-block
            ${item.dropdown && activeIndex === index ? "bg-black text-white" : ""}
            `}
        onClick={() =>
          item.dropdown && setActiveIndex(activeIndex === index ? null : index)
        }
      >
        {item.label}
      </span>
      {item.dropdown && (
        <Dropdown items={item.dropdown} isOpen={activeIndex === index} />
      )}
    </div>
  ));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="bg-dcyan">
      <div className="inline-flex px-8 relative select-none">
        <div>{links}</div>
      </div>
    </header>
  );
}
