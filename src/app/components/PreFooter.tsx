interface PreFooterProps {
  hardCoded: {
    prompt: string;
  };
}

export default function PreFooter({ hardCoded }: PreFooterProps) {
  return (
    <div className="flex w-full bg-black py-2">
      <span className="text-lgrey text-36 leading-4.5">{hardCoded.prompt}</span>
    </div>
  );
}
