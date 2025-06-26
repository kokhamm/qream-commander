interface LeftPanelProps {
  hardCoded: {
    title: string;
    slash: string;
    items: string[];
    bottomText: string;
  };
}

export default function LeftPanel({ hardCoded }: LeftPanelProps) {
  const items = hardCoded.items.map((item, index) => (
    <span
      key={index}
      className="text-lcyan text-32 relative before:absolute before:bg-lcyan before:h-1 before:w-6 before:top-[50%] before:translate-y-[-100%]  before:left-[-24px]"
    >
      {item}
    </span>
  ));
  return (
    <div className="flex flex-col flex-1 h-full pb-1 border-4 border-lcyan border-t-0">
      <div className="flex justify-center w-full h-fit bg-lcyan text-dblue text-36">
        <span>{hardCoded.title}</span>
      </div>
      <div className="flex flex-col px-1 h-full">
        <div className="flex flex-col h-full border-2 justify-between border-lcyan border-t-0">
          <div className="w-fit pl-1.5">
            <span className="text-32 text-yellow bg-lcyan px-4">
              {hardCoded.slash}
            </span>
            <div className="flex">
              <div className="w-12 flex flex-col items-center">
                <span className="h-[calc(100%-16px)] bg-lcyan w-1"> </span>
              </div>
              <div className="flex flex-col gap-2">{items}</div>
            </div>
          </div>
          <span className="text-lcyan text-32 pt-5 pb-5.5 px-1.5 border-t-4 border-lcyan">
            {hardCoded.bottomText}
          </span>
        </div>
      </div>
    </div>
  );
}
