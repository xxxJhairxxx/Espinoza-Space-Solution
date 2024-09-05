export interface Meta {}

export interface Picture {
  id: number;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats | null;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: Provider;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface InputForm {
  id: number;
  name: string;
  label: string;
}

export interface FormPersonal {
  id: number;
  names: InputForm;
  phone: InputForm;
  email: InputForm;
}

export interface Information {
  id: number;
  title: string;
  subtitle: string;
  content: string;
}

export interface Titles {
  id: number;
  title: string;
  subtitle: string;
}

export interface Formats {
  small?: Large;
  thumbnail: Large;
  large?: Large;
  medium?: Large;
}

export enum EXT {
  Jpg = ".jpg",
  PNG = ".png",
  SVG = ".svg",
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
  ImageSVGXML = "image/svg+xml",
}

export enum Provider {
  AwsS3 = "aws-s3",
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export interface MetaSEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  metaRobots?: string;
  structuredData?: string;
  metaViewport?: string;
  canonicalURL?: string;
  metaImage: Icon;
  metaSocial: MetaSocial[];
}

export interface Icon {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  hash: string;
  size: number;
  url: string;
  previewUrl: null;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}
export interface MetaSocial {
  id: number;
  socialNetwork: string;
  title: string;
  description: string;
  image: Icon;
}
