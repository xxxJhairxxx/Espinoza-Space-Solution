import { Picture } from "./shared";

export interface Multilanguage {
  data: MultilanguageData;
}

export interface MultilanguageData {
  id: number;
  lbl_btn_quote: string;
  lbl_btn_contact: string;
  lbl_read_more: string;
  lbl_send: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  lbl_see_services: string;
  menu: Menu[];
  skills: Skill[];
}

export interface Menu {
  id: number;
  label: string;
  url: string;
  sitemap: boolean;
}

export interface Skill {
  id: number;
  text: string;
  image: Picture;
}
