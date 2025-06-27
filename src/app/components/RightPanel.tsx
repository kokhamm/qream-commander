import { RightPanelProps } from "@/app/types";

interface Props {
  data: RightPanelProps;
}

const RightPanel = ({ data }: Props) => (
  <div
    aria-label="Right panel"
    role="complementary"
    className="flex flex-col flex-1 h-full pb-1 border-4 border-lcyan border-t-0"
  >
    <div className="flex justify-center w-full h-fit bg-lcyan text-4xl">
      <h2 className="px-4 bg-dblue text-lcyan m-0">{data.title}</h2>
    </div>

    <div className="flex flex-col px-1 h-full">
      <div className="flex flex-col h-full border-2 justify-between border-lcyan border-t-0">
        <div className="size-full">
          <div
            aria-label="File columns"
            role="region"
            className="flex bg-lcyan h-full gap-1"
          >
            {data.columns.map((col, colIndex) => (
              <div
                key={`right_panel_col_${colIndex}`}
                aria-labelledby={`col-${colIndex}`}
                className="flex flex-col flex-1 bg-dblue"
              >
                <h3
                  id={`col-${colIndex}`}
                  className="text-3xl text-center text-yellow m-0"
                >
                  {col.title}
                </h3>

                <ul
                  aria-label={`Files in ${col.title}`}
                  role="list"
                  className="flex flex-col pl-1.5 pr-1 list-none m-0 p-0"
                >
                  {col.items.map((item, itemIndex) => (
                    <li
                      key={`right_panel_col_${colIndex}_item_${itemIndex}`}
                      className="flex justify-between text-lcyan text-4xl"
                    >
                      <span>{item.name}</span>

                      {item.ext ? (
                        <span className="text-lcyan text-3xl">{item.ext}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-lcyan text-3xl pt-5 pb-5.5 px-1.5 border-t-4 border-lcyan">
          {data.bottomText}
        </div>
      </div>
    </div>
  </div>
);

export default RightPanel;
