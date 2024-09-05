import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { limitText } from "@/utils/TextModify";
import Link from "next/link";
import { useGenerals } from "@/context/generals.context";
interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  text: string;
  slug: string;
}

const BlogCardOne = ({ image, title, date, text, slug }: BlogCardProps) => {
  const { multilanguage } = useGenerals();
  return (
    <Link className="BlogCardOne" href={`/blog/${slug}`}>
      <Link href={`/blog/${slug}`} className="BlogCardOne__thumb">
        <Image src={image} alt={title} width={600} height={600} />
      </Link>
      <div className="BlogCardOne__Content">
        <div className="BlogCardOne__Content-header">
          <p className="BlogCardOne__Content-header-date">{FormatDate(date)}</p>
          <h1 className="BlogCardOne__Content-header-title">{title}</h1>
          <ReactMarkdown className="BlogCardOne__Content-header-text">
            {limitText(text, 40)}
          </ReactMarkdown>
        </div>
        <div className="BlogCardOne__Content-footer">
          <Link
            className="BlogCardOne__Content-footer-btn"
            href={`/blog/${slug}`}
          >
            {multilanguage.lbl_read_more}
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardOne;

const FormatDate = (date: string): string => {
  const fecha = new Date(date);
  const fechaFormateada1 = fecha.toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return fechaFormateada1;
};
