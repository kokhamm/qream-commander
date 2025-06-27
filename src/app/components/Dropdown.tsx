import { DropdownItem } from "@/app/types";

interface Props {
  items: DropdownItem[];
}

const Dropdown = ({ items }: Props) => (
  <div
    role="menu"
    aria-label="Submenu"
    className="absolute top-[calc(100%-4px)] w-max left-0 px-2 py-4 bg-dcyan z-50"
  >
    <div role="none" className="border-4 px-1 py-2 border-black">
      {items.map((item, index) => (
        <div
          key={`dropdown_item_${index}`}
          aria-label={`${item.label} - ${item.shortcut}`}
          role="menuitem"
          className="group px-2 text-3xl flex justify-between gap-16 hover:bg-black"
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

export default Dropdown;
