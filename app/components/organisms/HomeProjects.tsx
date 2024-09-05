import { Picture } from "@/interfaces/shared";
import SectionTitle from "../atoms/SectionTitle";
import { Autoplay, Navigation, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Modal from "../molecules/Modal";
import { useEffect, useMemo, useState } from "react";
import FsLightbox from "fslightbox-react";
import { Images } from "@/interfaces/home";

interface HomeProjectsProps {
  title: string;
  subtitle: string;
  bg_image: Picture;
  images: Images[];
}

const swiperOptions: SwiperOptions = {
  navigation: {
    prevEl: ".homeProjects__navigation-prev",
    nextEl: ".homeProjects__navigation-next",
  },
  slidesPerView: "auto",
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  modules: [Autoplay, Navigation],
};

const HomeProjects = ({
  title,
  subtitle,
  bg_image,
  images,
}: HomeProjectsProps) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const types = images.map((type) =>
    type.image_small.ext.toLowerCase() === ".mp4" ? "video" : "image"
  );

  const imageListFull: string[] = useMemo(() => {
    return images.map((item) => item.image.url);
  }, [images]);

  const openLightBoxOnSlide = (number: number): void => {
    setLightboxController((prevState) => {
      return {
        toggler: !prevState.toggler,
        slide: number,
      };
    });
  };

  const [itemsLoop, setItemsLoop] = useState<boolean>(false);
  useEffect(() => {
    setItemsLoop(true);
  }, []);

  return (
    <section
      className="homeProjects"
      style={{ backgroundImage: `url(${bg_image.url})` }}
      data-section="/projects"
    >
      <SectionTitle
        className="homeProjects__title"
        title={title}
        subtitle={subtitle}
      />

      <div className="homeProjects-slider">
        <Swiper {...swiperOptions} loop={itemsLoop}>
          {images.map(({ id, image_small }, index) => (
            <SwiperSlide
              className=" homeProjects-slider-thumb"
              key={id}
              onClick={() => openLightBoxOnSlide(index + 1)}
            >
              <Image
                priority
                src={image_small.url}
                width={1000}
                className="w-full h-full object-cover"
                height={1000}
                alt=""
              />
              <div className="zoom">
                <i className="icon-zoom"></i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="homeProjects__navigation">
        <div className="homeProjects__navigation-prev ">
          <i className="icon-arrow"></i>
        </div>
        <div className="homeProjects__navigation-next">
          <i className="icon-arrow"></i>
        </div>
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={imageListFull}
        slide={lightboxController.slide}
        types={types}
      />
    </section>
  );
};

export default HomeProjects;
