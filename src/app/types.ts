export interface DropdownItem {
  label: string;
  shortcut: string;
}

export interface LeftPanelProps {
  title: string;
  slash: string;
  items: string[];
  bottomText: string;
}

export interface RightPanelProps {
  title: string;
  columns: {
    title: string;
    items: {
      name: string;
      ext?: string;
    }[];
  }[];
  bottomText: string;
}
