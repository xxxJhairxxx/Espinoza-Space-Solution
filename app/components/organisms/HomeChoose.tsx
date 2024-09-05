import { Picture } from "@/interfaces/shared";
import SectionTitle from "../atoms/SectionTitle";
import { ChooseCard } from "@/interfaces/home";
import { Container } from "../globals";
import { Autoplay, Navigation, Pagination, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChooseCards from "../molecules/ChooseCards";
import "swiper/css/pagination";

interface HomeChooseProps {
  subtitle: string;
  title: string;
  image_person: Picture;
  choose_card: ChooseCard[];
}

const swiperOptions: SwiperOptions = {
  speed: 700,
  slidesPerView: "auto",
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 5,
      slidesPerGroup: 4,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 5,
      slidesPerGroup: 4,
    },
  },
  pagination: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  modules: [Autoplay, Pagination],
};

const HomeChoose = ({
  subtitle,
  title,
  image_person,
  choose_card,
}: HomeChooseProps) => {
  return (
    <section
      className="homeChoose"
      style={{ backgroundImage: `url("${image_person.url}")` }}
      data-section="/choose"
    >
      <SectionTitle
        subtitle={subtitle}
        title={title}
        className="homeChoose-title"
      />
      <Container className="homeChoose-ctn1">
        <Swiper {...swiperOptions} className="mySwiper">
          {choose_card.map(({ id, image, title, text }) => (
            <SwiperSlide key={id}>
              <ChooseCards
                key={id}
                title={title}
                text={text}
                image={image.url}
              ></ChooseCards>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container className="homeChoose-ctn2">
        {choose_card.map(({ id, image, title, text }) => (
          <ChooseCards
            key={id}
            title={title}
            text={text}
            image={image.url}
          ></ChooseCards>
        ))}
      </Container>
    </section>
  );
};

export default HomeChoose;
