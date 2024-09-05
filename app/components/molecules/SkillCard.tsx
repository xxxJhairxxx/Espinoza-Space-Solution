import Image from "next/image";

interface SkillCard {
  image_url: string;
  text: string;
  className?: string;
}

const SkillCard = ({ image_url, text, className }: SkillCard) => {
  return (
    <div className={`skillCard ${className}`}>
      <div className="skillCard__thumb">
        <Image src={image_url} width={1000} height={1000} alt={text}></Image>
      </div>

      <p className="skillCard__text">{text}</p>
    </div>
  );
};

export default SkillCard;
