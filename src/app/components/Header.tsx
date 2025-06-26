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
    <li key={index} className="inline-block">
      <button
        className={`px-8 text-36 first-letter:text-yellow inline-block
            ${item.dropdown && activeIndex === index ? "bg-black text-white" : ""}
            ${item.dropdown ? "cursor-pointer" : ""}
            `}
        onClick={() =>
          item.dropdown && setActiveIndex(activeIndex === index ? null : index)
        }
        aria-expanded={item.dropdown ? activeIndex === index : undefined}
        aria-haspopup={item.dropdown ? "menu" : undefined}
        aria-label={`Menu ${item.label}`}
      >
        {item.label}
      </button>
      {item.dropdown && (
        <Dropdown items={item.dropdown} isOpen={activeIndex === index} />
      )}
    </li>
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
    <header ref={headerRef} className="bg-dcyan" role="banner">
      <nav
        className="inline-flex px-8 relative select-none"
        role="navigation"
        aria-label="Main menu"
      >
        <ul className="flex list-none m-0 p-0">{links}</ul>
      </nav>
    </header>
  );
}
