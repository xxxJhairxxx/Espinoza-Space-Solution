import Image from "next/image";
import { text } from "stream/consumers";

interface MiddleCardProps {
  title: string;
  image: string;
}

const MiddleCard = ({ title, image }: MiddleCardProps) => {
  return (
    <div className="middleCard">
      <Image
        className="middleCard__thumb"
        src={image}
        width={120}
        height={120}
        alt={title}
      />
      <h2 className="middleCard__title">{title}</h2>
    </div>
  );
};

export default MiddleCard;
