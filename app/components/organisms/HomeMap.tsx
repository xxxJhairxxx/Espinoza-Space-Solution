import ReactMarkdown from "react-markdown";
import SectionTitle from "../atoms/SectionTitle";
import Image from "next/image";
import { useGenerals } from "@/context/generals.context";

interface HomeMapProps {
  title: string;
  text: string;
  cities: string;
}
const HomeMap = ({ title, text, cities }: HomeMapProps) => {
  const { general } = useGenerals();
  return (
    <section className="homeMap" data-section="/map">
      <div className="homeMap__Area">
        <SectionTitle title={title} className="homeMap__Area-title" />
        <p className="homeMap__Area-text">{text}</p>
        <Image
          src="/images/icon-area.png"
          width={200}
          height={200}
          alt="icon area map"
        ></Image>
        <ReactMarkdown className="homeMap__Area-list">{cities}</ReactMarkdown>
      </div>
      <iframe
        className="homeMap__Map"
        src={general.frame_url}
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default HomeMap;
