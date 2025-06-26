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
    <span key={index} className="text-lgrey text-36">
      <span className="text-lgrey">{command.number}</span>
      <span className="text-black bg-dcyan pr-6">{command.label}</span>
    </span>
  ));
  return <div className="flex w-full justify-between bg-black">{commands}</div>;
}
