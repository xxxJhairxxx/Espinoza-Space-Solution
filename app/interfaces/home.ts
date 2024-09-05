import { NumericLiteral } from "typescript";
import { MetaSEO, Picture } from "./shared";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import { Middleware } from "next/dist/lib/load-custom-routes";

export interface Home {
  data: HomeData;
}

export interface HomeData {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  home_banner: HomeBanner;
  home_we_do: HomeWeDo;
  home_manufactures: HomeManufactures;
  home_services: HomeServices;
  home_middle: HomeMiddle;
  home_projects: HomeProjects;
  home_choose: HomeChoose;
  home_about: HomeAbout;
  home_blog: HomeBlog;
  home_map: HomeMap;
  Seo: MetaSEO;
}

//++++++HOMEBANNER INTERFACES+++++++++++++//

export interface HomeBanner {
  id: number;
  subtitle: string;
  title: string;
  bg_video: Media;
  pre_title: string;
}

export interface Media {
  id: number;
  name: string;
  alternativeText: null;
  caption: null;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

//++++++HOME WE DO_INTERFACES+++++++++++++//
export interface HomeWeDo {
  id: number;
  subtitle: string;
  title: string;
  text: string;
  image: Picture;
}

//++++++HOMEMANUFACTURES _INTERFACES+++++++++++++//
export interface HomeManufactures {
  id: number;
  title: string;
  image: Picture[];
}

//++++++HOMESERVICES_INTERFACES+++++++++++++//

export interface HomeServices {
  id: number;
  title: string;
  subtitle: string;
  service_card: ServiceCard[];
}

export interface ServiceCard {
  id: number;
  text: string;
  title: string;
  image: Picture;
}

//++++++HOMEMIDDLE_INTERFACES+++++++++++++//

export interface HomeMiddle {
  id: number;
  title: string;
  middle_card: middleCard[];
}

export interface middleCard {
  id: number;
  title: string;
  image: Picture;
}

//++++++HOME PROJECTS_INTERFACES+++++++++++++//

export interface HomeProjects {
  id: number;
  subtitle: string;
  title: string;
  bg_image: Picture;
  images: Images[];
}

export interface Images {
  id: number;
  image_small: Picture;
  image: Picture;
}

//++++++HOMEBENEFITS_INTERFACES+++++++++++++//

export interface HomeChoose {
  id: number;
  subtitle: string;
  title: string;
  image_person: Picture;
  choose_card: ChooseCard[];
}
export interface ChooseCard {
  id: number;
  title: string;
  text: string;
  image: Picture;
}
//++++++HOMEABOUT_INTERFACES+++++++++++++//

export interface HomeAbout {
  id: number;
  subtitle: string;
  title: string;
  text: string;
  image_big: Picture;
  image_small: Picture;
}

//++++++HOMEBLOG_INTERFACES+++++++++++++//

export interface HomeBlog {
  id: number;
  subtitle: string;
  title: string;
  bg_image: Picture;
}

//++++++HOMEMAP_INTERFACES+++++++++++++//

export interface HomeMap {
  id: number;
  title: string;
  text: string;
  cities: string;
}
