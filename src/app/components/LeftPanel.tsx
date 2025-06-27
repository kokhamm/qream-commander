import { LeftPanelProps } from "@/app/types";

interface Props {
  data: LeftPanelProps;
}

const LeftPanel = ({ data }: Props) => (
  <div
    aria-label="Left panel"
    role="complementary"
    className="flex flex-col flex-1 h-full pb-1 border-4 border-lcyan border-t-0"
  >
    <div className="flex justify-center w-full h-fit bg-lcyan text-dblue text-4xl">
      <h2 className="m-0">{data.title}</h2>
    </div>

    <div className="flex flex-col px-1 h-full">
      <div className="flex flex-col h-full border-2 justify-between border-lcyan border-t-0">
        <div className="w-fit pl-1.5">
          <span
            role="presentation"
            className="text-3xl text-yellow bg-lcyan px-4"
          >
            {data.slash}
          </span>

          <div className="flex">
            <div
              role="presentation"
              className="w-12 flex flex-col items-center"
            >
              <span className="h-[calc(100%-1rem)] bg-lcyan w-1" />
            </div>

            <ul
              aria-label="Items list"
              role="list"
              className="flex flex-col gap-2 list-none m-0 p-0"
            >
              {data.items.map((item, index) => (
                <li
                  key={`left_panel_item_${index}`}
                  className="text-lcyan text-3xl relative before:absolute before:bg-lcyan before:h-1 before:w-6 before:top-[50%] before:translate-y-[-100%]  before:left-[-24px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-lcyan text-3xl pt-5 pb-5.5 px-1.5 border-t-4 border-lcyan">
          {data.bottomText}
        </div>
      </div>
    </div>
  </div>
);

export default LeftPanel;
