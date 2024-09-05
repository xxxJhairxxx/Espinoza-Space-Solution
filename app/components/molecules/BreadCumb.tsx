import React from "react";
import Link from "next/link";
import { limitText } from "@/utils/TextModify";
import { useNavbarContext } from "@/context/navbar.context";
import { goToSection } from "@/lib";

interface BreadCumbsProp {
  breadCumbMenu?: { label: string; url: string }[];
  contact?: boolean;
  className?: string;
}

function limpiartext(text: string): string {
  const ogTitle = text.split("/");
  return ogTitle[0];
}

const handleGoToSection = (url: string) => {
  goToSection(url);
};

const BreadCumb = ({ breadCumbMenu, contact, className }: BreadCumbsProp) => {
  const BreadCumbs = "BreadCumbs " + className;
  const { activeSection, setScrolltoSectionFromOtherPage } = useNavbarContext();
  return (
    <div className={BreadCumbs}>
      <ul className="BreadCumbs-list">
        <li className="BreadCumbs-li">
          <Link href="/">Home</Link>
        </li>
        {breadCumbMenu?.map(({ label, url }) => (
          <li
            className="BreadCumbs-li"
            key={url}
            onClick={() => handleGoToSection(url)}
          >
            <Link href={url}>{limitText(label, 5)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCumb;
