import HomeBanner from "@/components/organisms/HomeBanner";
import { GetStaticProps } from "next";
import { baseApi, goToSection } from "@/lib";
import { Home, HomeData } from "@/interfaces/home";
import { Blog, BlogPosts } from "@/interfaces/blog";
import { useNavbarContext } from "@/context/navbar.context";
import { useEffect } from "react";
import { SeoEngine } from "@/components/globals/SeoEngine";
import HomeWeDo from "@/components/organisms/HomeWeDo";
import HomeManufactures from "@/components/organisms/HomeManufactures";
import HomeServices from "@/components/organisms/HomeServices";
import HomeMiddle from "@/components/organisms/HomeMiddle";
import HomeChoose from "@/components/organisms/HomeChoose";
import HomeProjects from "@/components/organisms/HomeProjects";
import HomeAbout from "@/components/organisms/HomeAbout";
import HomeBlog from "@/components/organisms/HomeBlog";
import HomeMap from "@/components/organisms/HomeMap";
import { getGenerals } from "@/lib/getGenerals";
import { useObserver } from "@/hooks/useObserver";

interface HomeProps {
  home: HomeData;
  blog: BlogPosts[];
}

export default function Home({ home, blog }: HomeProps) {
  const { setActiveSection, scrolltoSectionFromOtherPage } = useNavbarContext();

  const { setElements, entries } = useObserver({
    rootMargin: "-13% 0px -80% 0px",
  });

  useEffect(() => {
    const elements = document.querySelectorAll("[data-section]");
    setElements(elements);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute("data-section");
        setActiveSection(String(section));
      }
    });
  }, [entries, setActiveSection]);

  useEffect(() => {
    if (scrolltoSectionFromOtherPage) {
      goToSection(scrolltoSectionFromOtherPage);
    }
  }, [scrolltoSectionFromOtherPage]);

  // El arreglo de dependencias vacío asegura que se ejecute solo en el cliente

  return (
    <main className={`main-page`}>
      <HomeBanner
        subtitle={home.home_banner.subtitle}
        title={home.home_banner.title}
        bg_video={home.home_banner.bg_video}
        pre_title={home.home_banner.pre_title}
      />
      <HomeWeDo
        subtitle={home.home_we_do.subtitle}
        title={home.home_we_do.title}
        text={home.home_we_do.text}
        image={home.home_we_do.image.url}
      />
      <HomeManufactures
        title={home.home_manufactures.title}
        image={home.home_manufactures.image}
      />
      <HomeServices
        title={home.home_services.title}
        subtitle={home.home_services.subtitle}
        service_card={home.home_services.service_card}
      />

      <HomeMiddle
        title={home.home_middle.title}
        middle_card={home.home_middle.middle_card}
      />

      <HomeChoose
        title={home.home_choose.title}
        subtitle={home.home_choose.subtitle}
        image_person={home.home_choose.image_person}
        choose_card={home.home_choose.choose_card}
      />

      <HomeProjects
        title={home.home_projects.title}
        subtitle={home.home_projects.subtitle}
        bg_image={home.home_projects.bg_image}
        images={home.home_projects.images}
      />

      <HomeAbout
        title={home.home_about.title}
        subtitle={home.home_about.subtitle}
        text={home.home_about.text}
        image_small={home.home_about.image_small.url}
        image_big={home.home_about.image_big.url}
      />

      <HomeBlog
        title={home.home_blog.title}
        subtitle={home.home_blog.subtitle}
        blog_posts={blog}
      />
      <HomeMap
        title={home.home_map.title}
        text={home.home_map.text}
        cities={home.home_map.cities}
      />

      <SeoEngine seo={home.Seo} />
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals();
  const [{ data: home }, { data: blog }] = await Promise.all([
    baseApi.get<Home>("/home?populate=deep"),
    baseApi.get<Blog>("/blog-posts?populate=deep"),
  ]);

  return {
    props: {
      home: home.data,
      blog: blog.data,
      generals,
    },
    revalidate: 1,
  };
};
