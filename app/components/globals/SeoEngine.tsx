import { MetaSEO } from "@/interfaces/shared";
import Head from "next/head";
import { FC } from "react";

interface SeoEngineProps {
  seo: MetaSEO;
}

export const SeoEngine: FC<SeoEngineProps> = ({ seo }) => {
  if (!Object.keys(seo).length) return <></>;
  return (
    <Head>
      <title>{seo.metaTitle}</title>
      <link rel="canonical" href={seo.canonicalURL || ""}></link>
      <meta name="description" content={seo.metaDescription || ""} />
      <meta name="keywords" content={seo.keywords || ""} />

      {/* <---->>> Meta Social Support <<<------> */}

      {seo.metaSocial.length > 0 &&
        seo.metaSocial.map(
          ({ id, description, image, socialNetwork, title }) => {
            const name = `${socialNetwork.toLocaleLowerCase()}:`;
            return (
              <>
                <meta name={`${name}title`} content={title} />
                <meta name={`${name}description`} content={description} />
                <meta name={`${name}image`} content={image.url} />
              </>
            );
          }
        )}
    </Head>
  );
};
