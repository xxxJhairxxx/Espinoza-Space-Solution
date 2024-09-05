import Image from "next/image";
import { title } from "process";
import ReactMarkdown from "react-markdown";
import { text } from "stream/consumers";
import Button from "../atoms/Button";
import { Picture } from "@/interfaces/shared";
import { useEffect, useState } from "react";
import { useNavbarContext } from "@/context/navbar.context";
import Link from "next/link";
import { useGenerals } from "@/context/generals.context";

interface ServiceCardsProps {
  title: string;
  text: string;
  image: Picture;
}
const ServiceCards = ({ title, text, image }: ServiceCardsProps) => {
  const { multilanguage } = useGenerals();
  const [toggle, setToggle] = useState<boolean>(false);

  const { setServiceSelected, serviceSelected } = useNavbarContext();
  const handleCategoryClick = (service: string) => {
    setServiceSelected(service);
  };

  const handleResize = () => {
    window.innerWidth > 724 ? setToggle(true) : setToggle(false);
  };

  return (
    <div className="serviceCard">
      <div
        className="serviceCard__thumb "
        onClick={() => (toggle ? setToggle(false) : setToggle(true))}
      >
        <Image src={image.url} width={800} height={800} alt={title} />
      </div>
      <div className="serviceCard__description">
        <div className="serviceCard__description-title">
          <h2>{title}</h2>
          <button onClick={() => (toggle ? setToggle(false) : setToggle(true))}>
            <i className={`icon-arrow-2 ${toggle ? "rotar" : ""}`}></i>
          </button>
        </div>
        <div
          className={`serviceCard__description-text ${
            toggle ? "" : "inactivo"
          }`}
        >
          <ReactMarkdown>{text}</ReactMarkdown>

          <Button
            onClick={() => handleCategoryClick(title)}
            className="serviceCard__description-text-btn"
            text={multilanguage.lbl_btn_contact}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
