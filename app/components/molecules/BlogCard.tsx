import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FormatDate, limitText } from "@/utils/TextModify";
import Link from "next/link";
import { useGenerals } from "@/context/generals.context";
interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  text: string;
  slug: string;
  className?: string;
}

const BlogCard = ({
  image,
  title,
  date,
  text,
  slug,
  className,
}: BlogCardProps) => {
  const { multilanguage } = useGenerals();
  return (
    <div className={`BlogCard ${className}`}>
      <Link href={`/blog/${slug}`} className="BlogCard__thumb">
        <Image src={image} alt={title} width={600} height={600} />
      </Link>
      <div className="BlogCard__Content">
        <div className="BlogCard__Content-header">
          <p className="BlogCard__Content-header-date">{FormatDate(date)}</p>
          <h1 className="BlogCard__Content-header-title">{title}</h1>
          <ReactMarkdown className="BlogCard__Content-header-text">
            {limitText(text, 14) + " ..."}
          </ReactMarkdown>
        </div>
        <div className="BlogCard__Content-footer">
          <Link className="BlogCard__Content-footer-btn" href={`/blog/${slug}`}>
            {multilanguage.lbl_read_more}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
