import { middleCard } from "@/interfaces/home";
import SectionTitle from "../atoms/SectionTitle";
import MiddleCard from "../molecules/MiddleCard";

interface homeMiddleProps {
  title: string;
  middle_card: middleCard[];
}
const HomeMiddle = ({ title, middle_card }: homeMiddleProps) => {
  return (
    <section className="homeMiddle" data-section="/middle">
      <div className="homeMiddle__containerTitle">
        <SectionTitle
          className="homeMiddle__containerTitle-title"
          title={title}
        ></SectionTitle>
      </div>

      <div className="homeMiddle__containerThumb">
        {middle_card.map(({ title, image }, index) => (
          <MiddleCard key={index} title={title} image={image.url} />
        ))}
      </div>
    </section>
  );
};

export default HomeMiddle;
