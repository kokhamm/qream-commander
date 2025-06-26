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
    <div
      key={index}
      className="flex flex-col flex-1 bg-dblue"
      aria-labelledby={`column-${index}`}
    >
      <h3
        id={`column-${index}`}
        className="text-32 text-center text-yellow m-0"
      >
        {column.title}
      </h3>
      <ul
        className="flex flex-col pl-1.5 pr-1 list-none m-0 p-0"
        role="list"
        aria-label={`Files in ${column.title}`}
      >
        {column.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className="flex justify-between text-lcyan text-32"
          >
            <span>{item.name}</span>
            {item.ext && <span className="text-lcyan text-32">{item.ext}</span>}
          </li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div
      className="flex flex-col flex-1 h-full pb-1 border-4 border-lcyan border-t-0"
      role="complementary"
      aria-label="Right panel"
    >
      <div className="flex justify-center w-full h-fit bg-lcyan text-36">
        <h2 className="px-4 bg-dblue text-lcyan m-0">{hardCoded.title}</h2>
      </div>
      <div className="flex flex-col px-1 h-full">
        <div className="flex flex-col h-full border-2 justify-between border-lcyan border-t-0">
          <div className="w-full h-full">
            <div
              className="flex bg-lcyan h-full gap-1"
              role="region"
              aria-label="File columns"
            >
              {columns}
            </div>
          </div>
          <div className="text-lcyan text-32 pt-5 pb-5.5 px-1.5 border-t-4 border-lcyan">
            {hardCoded.bottomText}
          </div>
        </div>
      </div>
    </div>
  );
}
