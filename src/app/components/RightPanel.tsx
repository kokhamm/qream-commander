interface RightPanelProps {
  hardCoded: {
    title: string;
    bottomText: string;
    columns: Array<{
      title: string;
      items: Array<{
        name: string;
        ext?: string;
      }>;
    }>;
  };
}

export default function RightPanel({ hardCoded }: RightPanelProps) {
  const columns = hardCoded.columns.map((column, index) => (
    <div key={index} className="flex flex-col flex-1 bg-dblue">
      <span className="text-lcyan text-32 text-center text-yellow">
        {column.title}
      </span>
      <div className="flex flex-col pl-1.5 pr-1">
        {column.items.map((item, index) => (
          <span key={index} className="flex justify-between text-lcyan text-32">
            {item.name}
            {item.ext && <span className="text-lcyan text-32">{item.ext}</span>}
          </span>
        ))}
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col flex-1 h-full pb-1 border-4 border-lcyan border-t-0">
      <div className="flex justify-center w-full h-fit bg-lcyan text-36">
        <span className="px-4 bg-dblue text-lcyan">{hardCoded.title}</span>
      </div>
      <div className="flex flex-col px-1 h-full">
        <div className="flex flex-col h-full border-2 justify-between border-lcyan border-t-0">
          <div className="w-full h-full">
            <div className="flex bg-lcyan h-full gap-1">{columns}</div>
          </div>
          <span className="text-lcyan text-32 pt-5 pb-5.5 px-1.5 border-t-4 border-lcyan">
            {hardCoded.bottomText}
          </span>
        </div>
      </div>
    </div>
  );
}
