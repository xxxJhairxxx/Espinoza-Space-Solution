import Image from "next/image";
import SectionTitle from "../atoms/SectionTitle";
import Button from "../atoms/Button";
import { useGenerals } from "@/context/generals.context";

interface HomeAboutProps {
  title: string;
  subtitle: string;
  text: string;
  image_small: string;
  image_big: string;
}

const HomeAbout = ({
  title,
  subtitle,
  text,
  image_small,
  image_big,
}: HomeAboutProps) => {
  const { multilanguage } = useGenerals();
  return (
    <section className="homeAbout" data-section="/about">
      <div className="homeAbout__thumb">
        <div className="homeAbout__thumb-image_big">
          <Image src={image_big} width={500} height={500} alt="" />
        </div>

        <div className="homeAbout__thumb-image_small">
          <Image src={image_small} width={500} height={500} alt="" />
        </div>
      </div>

      <div className="homeAbout__description">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="homeAbout__description__title"
        />
        <p className="homeAbout__description__text">{text}</p>

        <Button
          text={multilanguage.lbl_btn_contact}
          className="homeAbout__description-btn"
        ></Button>
      </div>
    </section>
  );
};

export default HomeAbout;
