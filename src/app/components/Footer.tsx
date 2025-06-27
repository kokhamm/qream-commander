interface Command {
  label: string;
  number: number;
}

interface Props {
  data: {
    commands: Command[];
  };
}

const Footer = ({ data }: Props) => (
  <footer
    aria-label="Command panel"
    role="contentinfo"
    className="flex w-full justify-between bg-black"
  >
    {data.commands.map((item, index) => (
      <button
        key={`footer_command_item_${index}`}
        aria-label={`Command ${item.number}: ${item.label}`}
        className="text-lgrey text-4xl bg-transparent border-none p-0"
      >
        <span className="text-lgrey">{item.number}</span>

        <span className="text-black bg-dcyan pr-6">{item.label}</span>
      </button>
    ))}
  </footer>
);

export default Footer;
