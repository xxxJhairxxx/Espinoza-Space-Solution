import { BlogPosts } from "@/interfaces/blog";
import SectionTitle from "../atoms/SectionTitle";
import BlogCard from "../molecules/BlogCard";
import { Container } from "../globals";
import { useEffect, useState } from "react";
import BlogCardOne from "../molecules/BlogCardOne";
import Button from "../atoms/Button";
import { getGenerals } from "@/lib/getGenerals";
import { useGenerals } from "@/context/generals.context";
import Enlace from "../atoms/Enlace";
import { useNavbarContext } from "@/context/navbar.context";

interface HomeBlogProps {
  subtitle: string;
  title: string;
  blog_posts: BlogPosts[];
}
const HomeBlog = ({ subtitle, title, blog_posts }: HomeBlogProps) => {
  const [width, setWith] = useState<number>(100);
  const { setIsPage } = useNavbarContext();

  const [showComponent, setShowComponent] = useState(false);

  const handleResize = () => {
    setWith(window.innerWidth);
  };

  const [blogs, setBlog] = useState<Array<BlogPosts>>([]);

  useEffect(() => {
    blog_posts.length !== 1
      ? setBlog(blog_posts.slice(0, 3))
      : setBlog(blog_posts);

    blog_posts.length >= 4 ? setIsPage(true) : setIsPage(false);

    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 0);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);
  return (
    <section className="homeBlog" data-section="/blog">
      <SectionTitle title={title} subtitle={subtitle}></SectionTitle>

      <Container className="homeBlog-ctn">
        {showComponent &&
          (blogs.length !== 1 || width < 1025 ? (
            blogs.map(({ id, title, created, slug, text, image }) => (
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
              key={blogs[0].id}
              title={blogs[0].title}
              text={blogs[0].text}
              date={blogs[0].created}
              slug={blogs[0].slug}
              image={blogs[0].image.url}
            ></BlogCardOne>
          ))}

        {blog_posts.length >= 4 && (
          <Enlace enlace={"/blog"} text={"See More"}></Enlace>
        )}
      </Container>
    </section>
  );
};

export default HomeBlog;
