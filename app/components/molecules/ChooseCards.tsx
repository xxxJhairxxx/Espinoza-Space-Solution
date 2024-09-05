import Image from "next/image";

interface ChooseCardProps {
  title: string;
  text: string;
  image: string;
}
const ChooseCards = ({ title, text, image }: ChooseCardProps) => {
  return (
    <section className="chooseCards">
      <div className="chooseCards__thumb">
        <Image src={image} width={100} height={100} alt={title} />
      </div>

      <div className="chooseCards__description">
        <h2 className="chooseCards__description-title">{title}</h2>
        <p className="chooseCards__description-text">{text}</p>
      </div>
    </section>
  );
};

export default ChooseCards;
