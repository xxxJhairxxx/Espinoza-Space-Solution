import { useGenerals } from "@/context/generals.context";
import { FC } from "react";

interface SocialsProps {
  className?: string;
  rsp: boolean;
}

export const Socials: FC<SocialsProps> = ({ className }) => {
  const { general } = useGenerals();
  return (
    <div className={`socials ${className}`}>
      {general.social_network.map(({ type, url }, i: number) => (
        <div
          key={i}
          title={`${!url ? "Coming soon" : type}`}
          className="socials__item"
        >
          <a
            className={`socials__item-link ${
              !url ? "pointer-events-none" : ""
            }`}
            href={url ? url : "#"}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`socials__item-link-icon icon-${type} `} />
          </a>
        </div>
      ))}
    </div>
  );
};
