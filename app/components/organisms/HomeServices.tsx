import { ServiceCard } from "@/interfaces/home";
import SectionTitle from "../atoms/SectionTitle";
import ServiceCards from "../molecules/ServiceCards";

interface HomeServicesProps {
  subtitle: string;
  title: string;
  service_card: ServiceCard[];
}
const HomeServices = ({ subtitle, title, service_card }: HomeServicesProps) => {
  return (
    <section className="homeServices" data-section="/service">
      <SectionTitle subtitle={subtitle} title={title} />

      <div className="homeServices__container">
        {service_card.map(({ title, text, image }, index) => (
          <ServiceCards key={index} title={title} text={text} image={image} />
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
