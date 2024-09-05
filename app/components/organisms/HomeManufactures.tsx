import { Picture } from "@/interfaces/shared";
import SectionTitle from "../atoms/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, SwiperOptions } from "swiper";
import Image from "next/image";

const swiperOptions: SwiperOptions = {
  speed: 700,

  breakpoints: {
    300: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    724: {
      slidesPerView: 3,
      spaceBetween: 120,
      slidesPerGroup: 3,
    },

    1024: {
      slidesPerView: 5,
      spaceBetween: 1,
      slidesPerGroup: 5,
    },
  },
  pagination: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
};

interface HomeManufacturesProps {
  title: string;
  image: Picture[];
}

const HomeManufactures = ({ title, image }: HomeManufacturesProps) => {
  return (
    <section className="homeManufactures" data-section="/manufactures">
      <SectionTitle title={title} className="homeManufactures__title" />

      <Swiper {...swiperOptions} className="homeManufactures__swiper">
        {image.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.url}
              width={1000}
              height={1000}
              alt={"manufactures"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeManufactures;
