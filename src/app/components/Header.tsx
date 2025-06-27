"use client";

import { useState, useRef, useEffect } from "react";

import Dropdown from "@/app/components/Dropdown";
import { DropdownItem } from "@/app/types";
import { cn } from "@/app/helpers";

interface MenuItem {
  label: string;
  dropdown?: DropdownItem[];
}

interface Props {
  data: {
    menu: MenuItem[];
  };
}

const Header = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node))
        setActiveIndex(null);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="bg-dcyan" role="banner">
      <nav
        aria-label="Main menu"
        role="navigation"
        className="flex px-8 select-none"
      >
        {data.menu.map((item, index) => (
          <div key={`header_menu_item_${index}`} className="relative">
            <button
              aria-expanded={item.dropdown ? activeIndex === index : undefined}
              aria-haspopup={item.dropdown ? "menu" : undefined}
              aria-label={`Menu ${item.label}`}
              className={cn(
                "px-8 text-4xl first-letter:text-yellow",
                item.dropdown && activeIndex === index
                  ? "bg-black text-white"
                  : "",
                item.dropdown ? "cursor-pointer" : ""
              )}
              onClick={() =>
                item.dropdown
                  ? setActiveIndex(activeIndex === index ? null : index)
                  : null
              }
            >
              {item.label}
            </button>

            {item.dropdown && activeIndex === index ? (
              <Dropdown items={item.dropdown} />
            ) : null}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
