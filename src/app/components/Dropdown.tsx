import { memo } from "react";

export interface DropdownItem {
  label: string;
  shortcut: string;
}

export interface DropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
}

const Dropdown = memo(function Dropdown({ items, isOpen }: DropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[calc(100%-4px)] w-full left-0 px-2 py-4 bg-dcyan z-50">
      <div className="bg-dcyan border-4 px-1 py-2 border-black">
        {items.map((item, index) => (
          <div
            key={index}
            className="group px-2 text-32 flex justify-between hover:bg-black"
          >
            <span className="first-letter:text-yellow group-hover:text-white">
              {item.label}
            </span>
            <span className="text-black group-hover:text-white">
              {item.shortcut}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Dropdown;
