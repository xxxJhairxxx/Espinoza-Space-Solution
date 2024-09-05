import { useNavbarContext } from "@/context/navbar.context";
import { useRouter } from "next/router";
import React, { use, useState } from "react";
import { MenuIcon } from "../atoms/MenuIcon";
import { Logo } from "../atoms/Logo";
import { Container } from "../globals";
import { Navbar } from "../molecules/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useGenerals } from "@/context/generals.context";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { asPath } = useRouter();
  const { isTopZero } = useNavbarContext();
  const { general } = useGenerals();
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header
      className={`Header ${
        isTopZero ? "background-white" : "background-transparent"
      }`}
    >
      <Logo className="Header-Logo" menuActive={isMenuOpen} />
      <a href={`tel:${general.phone}`} className="Header-phone">
        <div className="Header-phone-thumb">
          <Image
            src="/images/phone.png"
            width={1000}
            height={1000}
            alt="phone"
          ></Image>
        </div>
        {general.phone}
      </a>
      <Container className="Header-ctn">
        <div className={`Header-menuIcon ${isMenuOpen && "isActive"}`}>
          <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
        </div>
        <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <div
          className={`Header-overlay ${isMenuOpen && "isActive"}`}
          onClick={closeMenu}
        />
      </Container>
    </header>
  );
};

export default Header;

// import { useRouter } from "next/router";
// import { Container } from "../globals";
// import { Logo } from "../atoms";
// import { useGeneralStore } from "@/store";
// import { goToSection } from "@/lib";
// import { useNavbarContext } from "@/context/navbar.context";
// import { useEffect } from "react";
// import Link from "next/link";

// const Header = () => {
//   const { polylang } = useGeneralStore();
//   const { activeSection, setScrolltoSectionFromOtherPage } = useNavbarContext();
//   console.log(polylang.menu);
//   return (
//     <header className="Header">
//       <Container className="Header-ctn ">
//         <Logo className="logoHeader" />
//         <ul className="Header-ctn-menu">
//           {polylang.menu.map((item, index) =>
//             index === polylang.menu.length - 1 ? (
//               <li key={item.id}>
//                 <Link href={item.url}>{item.label}</Link>
//               </li>
//             ) : (
//               <li key={item.id}>
//                 <a
//                   onClick={() => {
//                     setScrolltoSectionFromOtherPage(item.url);
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             )
//           )}
//         </ul>
//       </Container>
//     </header>
//   );
// };

// export default Header;
