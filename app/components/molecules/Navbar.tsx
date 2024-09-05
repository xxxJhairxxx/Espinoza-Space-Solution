import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useRef } from "react";
import { useNavbarContext } from "@/context/navbar.context";
import { goToSection } from "@/lib/utils";
import { Logo } from "../atoms/Logo";
import { Socials } from "../atoms/Socials";
import { useGenerals } from "@/context/generals.context";

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
  const { multilanguage } = useGenerals();
  const { activeSection, setScrolltoSectionFromOtherPage, isTopZero, isPage } =
    useNavbarContext();
  const { asPath } = useRouter();

  const handleGoToSection = (url: string) => {
    goToSection(url);
    closeMenu();
  };

  const handleGoToSectionFromOtherPage = (url: string) => {
    setScrolltoSectionFromOtherPage(url);
    closeMenu();
  };
  const half = 5;
  const menuPartOne = [...multilanguage.menu].slice(0, half);
  const menuPartTwo = [...multilanguage.menu].slice(half);

  return (
    <nav
      className={`Navbar ${isMenuOpen ? "isActive" : ""} ${
        isTopZero ? "shadow-none" : ""
      }`}
    >
      <Socials className={`Navbar-socials`} rsp={true} />
      <Logo className="Navbar-logo" />
      <div className="Navbar-ctn">
        <ul className="Navbar-ul">
          {menuPartOne.map(({ id, label, url }) =>
            asPath !== "/" ? (
              url === "/blog" && isPage ? (
                <li
                  key={id}
                  className={`Navbar-ul-li  ${url === asPath && "isActive"}`}
                >
                  <Link href={"/blog"} onClick={closeMenu}>
                    {label}
                  </Link>
                </li>
              ) : (
                <li
                  key={id}
                  className={`Navbar-ul-li  ${url === asPath && "isActive"}`}
                  onClick={() => handleGoToSectionFromOtherPage(url)}
                >
                  <Link href={"/"} onClick={closeMenu}>
                    {label}
                  </Link>
                </li>
              )
            ) : url === "/blog" && isPage ? (
              <li key={id} className={`Navbar-ul-li isActive}`}>
                <Link href={url} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ) : (
              <li
                key={id}
                className={`Navbar-ul-li ${
                  url === activeSection && asPath === "/" ? "isActive" : ""
                }`}
                onClick={() => {
                  handleGoToSection(url);
                }}
              >
                {label}
              </li>
            )
          )}

          {menuPartTwo.map(({ id, label, url }) => (
            <li
              key={id}
              className={`Navbar-ul-li ${url === asPath ? "isActive" : ""}`}
            >
              <Link href={url} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
