import { FC, PropsWithChildren } from "react";

import { Inter, Outfit } from "next/font/google";
// import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import InfoHeader from "../ui/InfoHeader";
import ObserverTop from "../atoms/Observertop";
import { CustomHead } from "../globals/CustomHead";
// import InfoHeader from "../ui/InfoHeader";
// import { CustomHead } from "../globals/CustomHead";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-inter",
});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${inter.variable}`}>
      <CustomHead />
      <InfoHeader />
      <Header />
      <ObserverTop />
      {children}
      <Footer />
    </div>
  );
};
