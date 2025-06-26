interface FooterProps {
  hardCoded: {
    commands: Array<{
      number: number;
      label: string;
    }>;
  };
}

export default function Footer({ hardCoded }: FooterProps) {
  const commands = hardCoded.commands.map((command, index) => (
    <button
      key={index}
      className="text-lgrey text-36 bg-transparent border-none p-0"
      aria-label={`Command ${command.number}: ${command.label}`}
    >
      <span className="text-lgrey">{command.number}</span>
      <span className="text-black bg-dcyan pr-6">{command.label}</span>
    </button>
  ));
  return (
    <footer
      className="flex w-full justify-between bg-black"
      role="contentinfo"
      aria-label="Command panel"
    >
      {commands}
    </footer>
  );
}
