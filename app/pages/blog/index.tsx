import { Blog, BlogPage, BlogPosts, Blogdata } from "@/interfaces/blog";
import style from "./style.module.css";
import { getGenerals } from "@/lib/getGenerals";
import { useGenerals } from "@/context/generals.context";
import { GetStaticProps } from "next";
import { baseApi } from "@/lib";
import SectionTitle from "@/components/atoms/SectionTitle";
import { Container } from "@/components/globals";
import BlogCardOne from "@/components/molecules/BlogCardOne";

import { Home, HomeData } from "@/interfaces/home";
import BlogCard from "@/components/molecules/BlogCard";
import { SeoEngine } from "@/components/globals/SeoEngine";

interface BlogProps {
  Blogposts: BlogPosts[];
  blog: Blogdata;
}

const Blog = ({ blog, Blogposts }: BlogProps) => {
  return (
    <section className={style.Blog} data-section="/blog">
      <SectionTitle title={blog.title} subtitle={blog.subtitle}></SectionTitle>

      <Container className={style.Blog_ctn}>
        {Blogposts?.length !== 1 ? (
          Blogposts.map(({ id, title, created, slug, text, image }) => (
            <BlogCard
              key={id}
              title={title}
              text={text}
              date={created}
              slug={slug}
              image={image.url}
            ></BlogCard>
          ))
        ) : (
          <BlogCardOne //si solo hay un blog
            key={Blogposts[0].id}
            title={Blogposts[0].title}
            text={Blogposts[0].text}
            date={Blogposts[0].created}
            slug={Blogposts[0].slug}
            image={Blogposts[0].image.url}
          ></BlogCardOne>
        )}
      </Container>

      <SeoEngine seo={blog.Seo} />
    </section>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({}) => {
  const generals = await getGenerals();
  const [{ data: blogPosts }, { data: blog }] = await Promise.all([
    baseApi.get<Blog>(`/blog-posts?populate=deep`), //trae toda la data para las card
    baseApi.get<BlogPage>("/blog?populate=deep"),
  ]);

  return {
    props: {
      Blogposts: blogPosts.data,
      blog: blog.data,
      generals,
    },
    revalidate: 1,
  };
};
