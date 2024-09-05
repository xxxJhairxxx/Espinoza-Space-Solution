import { Layout } from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Head from "next/head";
import { NavbarProvider } from "@/context/navbar.context";
import { Favicon } from "@/components/globals/Favicon";
import { GeneralsProvider } from "@/context/generals.context";
import { fetchSitemaps } from "@/services/sitemaps";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetchSitemaps();
  });
  return (
    <>
      <Head>
        <title>Espinoza Space Solution</title>
        <Favicon />
      </Head>
      <GeneralsProvider generals={pageProps.generals}>
        <NavbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavbarProvider>
      </GeneralsProvider>
    </>
  );
}
