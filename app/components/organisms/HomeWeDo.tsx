import SectionTitle from "../atoms/SectionTitle";
import ReactMarkdown from "react-markdown";
import Button from "../atoms/Button";
import Image from "next/image";
import { useRef } from "react";
import { useGenerals } from "@/context/generals.context";

interface homeWeDoProps {
  subtitle: string;
  title: string;
  text: string;
  image: string;
}
const HomeWeDo = ({ subtitle, title, text, image }: homeWeDoProps) => {
  const { multilanguage } = useGenerals();
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={elementRef}
      className="homeWeDo"
      style={{ backgroundImage: `url(/images/bg-texture-gris.jpg)` }}
      data-section="/wedo"
    >
      <SectionTitle
        title={title}
        subtitle={subtitle}
        className="homeWeDo-title"
      />

      <div className="homeWeDo__thumb">
        <div className="homeWeDo__thumb__Image">
          <Image src={image} width={800} height={800} alt={title} />
        </div>
      </div>
      <ReactMarkdown className="homeWeDo__text">{text}</ReactMarkdown>

      <Button
        className="homeWeDo__btn"
        text={multilanguage.lbl_btn_quote}
      ></Button>
    </section>
  );
};

export default HomeWeDo;
