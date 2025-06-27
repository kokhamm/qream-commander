import LeftPanel from "@/app/components/LeftPanel";
import RightPanel from "@/app/components/RightPanel";
import { LeftPanelProps, RightPanelProps } from "@/app/types";

interface Props {
  data: {
    leftPanel: LeftPanelProps;
    rightPanel: RightPanelProps;
  };
}

const Main = ({ data }: Props) => (
  <main
    aria-label="Main content"
    role="main"
    className="flex bg-dblue gap-1 pb-1 px-1 h-full"
  >
    <LeftPanel data={data.leftPanel} />

    <RightPanel data={data.rightPanel} />
  </main>
);

export default Main;
