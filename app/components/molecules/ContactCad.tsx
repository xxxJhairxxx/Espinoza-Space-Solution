import { Picture } from "@/interfaces/shared";
import Image from "next/image";

interface ContactCardProps {
  image: Picture;
  title: string;
  text: string;
}
const ContactCard = ({ image, title, text }: ContactCardProps) => {
  return (
    <div className="contactCards">
      <div className="contactCards__thumb">
        <Image src={image.url} width={500} height={500} alt="" />
      </div>

      <div className="contactCards__description">
        <h2 className="contaCards__description-title">{title}</h2>
        <p className="contaCards__description-text">{text}</p>
      </div>
    </div>
  );
};

export default ContactCard;
