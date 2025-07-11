export const HEADER = {
  menu: [
    {
      label: "File",
      dropdown: [
        { label: "NCD Tree", shortcut: "Alt+F4" },
        { label: "Exit", shortcut: "Esc" },
      ],
    },
    { label: "Disk" },
    {
      label: "Commands",
      dropdown: [
        { label: "NCD Tree", shortcut: "Alt+F4" },
        { label: "Exit", shortcut: "Esc" },
      ],
    },
  ],
};

export const MAIN = {
  leftPanel: {
    title: "Tree",
    slash: "\\",
    items: ["DOS", "TOOLS", "XTGOLD", "LAPLINK", "DN"],
    bottomText: "C:\\",
  },
  rightPanel: {
    title: "C:\\",
    columns: [
      {
        title: "Name",
        items: [
          { name: "DN" },
          { name: "autoexec", ext: "bat" },
          { name: "command", ext: "com" },
          { name: "config", ext: "sys" },
          { name: "Io", ext: "sys" },
          { name: "11Pro", ext: "sys" },
          { name: "Msdod", ext: "sys" },
        ],
      },
      { title: "Name", items: [] },
      { title: "Name", items: [] },
    ],
    bottomText: "DN",
  },
};

export const PREFOOTER = {
  prompt: "C:\\>",
};

export const FOOTER = {
  commands: [
    { number: 1, label: "Help" },
    { number: 2, label: "Menu" },
    { number: 3, label: "View" },
    { number: 4, label: "Edit" },
    { number: 5, label: "Copy" },
    { number: 6, label: "RenMov" },
    { number: 7, label: "Mkdir" },
    { number: 8, label: "Delete" },
    { number: 9, label: "PullDn" },
    { number: 10, label: "Quit" },
  ],
};
