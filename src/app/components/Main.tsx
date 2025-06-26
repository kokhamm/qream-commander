import LeftPanel from "@/app/components/LeftPanel";
import RightPanel from "@/app/components/RightPanel";

interface MainProps {
  hardCoded: {
    leftPanel: {
      title: string;
      slash: string;
      items: string[];
      bottomText: string;
    };
    rightPanel: {
      title: string;
      columns: Array<{
        title: string;
        items: Array<{
          name: string;
          ext?: string;
        }>;
      }>;
      bottomText: string;
    };
  };
}
export default function Main({ hardCoded }: MainProps) {
  return (
    <div className="flex bg-dblue gap-1 pb-1  px-1 h-full">
      <LeftPanel hardCoded={hardCoded.leftPanel} />
      <RightPanel hardCoded={hardCoded.rightPanel} />
    </div>
  );
}
