import { data } from "@/app/data/data";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import PreFooter from "@/app/components/PreFooter";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col bg-dblue h-screen">
      <Header hardCoded={data.header} />
      <Main hardCoded={data.main} />
      <PreFooter hardCoded={data.prefooter} />
      <Footer hardCoded={data.footer} />
    </div>
  );
}
