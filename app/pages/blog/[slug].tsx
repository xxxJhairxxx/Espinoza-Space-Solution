import { Blog, BlogPosts } from "@/interfaces/blog";
import { baseApi } from "@/lib";
import { GetStaticPaths, GetStaticProps } from "next";
import style from "./style.module.css";
import BreadCumb from "@/components/molecules/BreadCumb";
import BlogCard from "@/components/molecules/BlogCard";
import { Container } from "@/components/globals";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import React, { useState } from "react";
import { FormatDate } from "@/utils/TextModify";
import SectionTitle from "@/components/atoms/SectionTitle";
import { SeoEngine } from "@/components/globals/SeoEngine";
import { getGenerals } from "@/lib/getGenerals";

interface BlogProps {
  Blogposts: BlogPosts[];
  Blog: BlogPosts;
}
const BlogDetails = ({ Blogposts, Blog }: BlogProps) => {
  const breadCumbMenu = [
    {
      label: "Blog",
      url: "/",
    },
    {
      label: Blog.title,
      url: "/",
    },
  ];

  const blogfilter = Blogposts.filter(({ id }) => {
    return id != Blog.id;
  });

  const blogfiterlast = blogfilter.slice(0, 3);

  return (
    <Container
      className={
        style.BlogPost + (blogfilter.length === 0 ? " justify-center" : "")
      }
    >
      {/* <BreadCumb
        breadCumbMenu={breadCumbMenu}
        className={style.breadCumbMenu}
      ></BreadCumb> */}

      <main
        className={
          blogfilter.length !== 0
            ? style.BlogPost__main
            : style.BlogPost__main_one
        }
      >
        <div className={style.BlogPost__main__thumb}>
          <Image
            src={Blog.image.url}
            width={1000}
            height={1000}
            alt={Blog.title}
          />
        </div>
        <div className={style.BlogPost__main__contain}>
          <h2 className={style.BlogPost__main__contain_date}>
            {FormatDate(Blog.created)}
          </h2>
          <h3 className={style.BlogPost__main__contain_title}>
            <strong>{Blog.title}</strong>
          </h3>
          <ReactMarkdown className={style.BlogPost__main__contain__text}>
            {Blog.text}
          </ReactMarkdown>
        </div>
      </main>

      {blogfilter.length !== 0 ? (
        <aside className={style.BlogPost__cards}>
          <SectionTitle
            className={style.BlogPost__cards__title}
            title="Other Articles"
            subtitle="BLOG"
          ></SectionTitle>

          {blogfiterlast.map(({ id, title, created, slug, text, image }) => (
            <BlogCard
              key={id}
              title={title}
              text={text}
              date={created}
              slug={slug}
              image={image.url}
              className={style.BlogPost__cards__card}
            ></BlogCard>
          ))}
        </aside>
      ) : (
        <></>
      )}

      <SeoEngine seo={Blog.Seo} />
    </Container>
  );
};

export default BlogDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: blogs } = await baseApi.get<Blog>("/blog-posts?populate=deep");

  const paths = blogs.data.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as { slug: string };
  const generals = await getGenerals();
  const [{ data: blogPosts }, { data: blog }] = await Promise.all([
    baseApi.get<Blog>(`/blog-posts?populate=deep`), //trae toda la data para las card
    baseApi.get<Blog>(`/blog-posts?filters[slug][$eq]=${slug}&populate=deep`),
  ]);

  return {
    props: {
      Blogposts: blogPosts.data,
      Blog: blog.data[0],
      generals,
    },
    revalidate: 1,
  };
};
