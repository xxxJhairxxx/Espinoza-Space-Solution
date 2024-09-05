import { NumericLiteral } from "typescript";
import { MetaSEO, Picture } from "./shared";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";

export interface Blog {
  data: BlogPosts[];
}

export interface BlogPosts {
  id: number;
  title: string;
  created: string;
  text: string;
  slug: string;
  image: Picture;
  Seo: MetaSEO;
}

export interface BlogPage {
  data: Blogdata;
}

export interface Blogdata {
  id: number;
  subtitle: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Seo: MetaSEO;
}
