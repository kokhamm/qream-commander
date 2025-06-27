import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import PreFooter from "@/app/components/PreFooter";
import { FOOTER, HEADER, MAIN, PREFOOTER } from "@/app/data";

const Home = () => (
  <div className="flex flex-col bg-dblue h-svh">
    <Header data={HEADER} />

    <Main data={MAIN} />

    <PreFooter data={PREFOOTER} />

    <Footer data={FOOTER} />
  </div>
);

export default Home;
