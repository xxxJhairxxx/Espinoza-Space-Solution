import React from "react";
import { Container } from "../globals";
import { Socials } from "../atoms";
import { useRouter } from "next/router";
import { useGenerals } from "@/context/generals.context";

const InfoHeader = () => {
  const { general } = useGenerals();
  const { asPath } = useRouter();
  return (
    <div className={`infoHeader  ${"/" !== asPath && "infoHeader_Actived"} `}>
      <Container className="infoHeader-container">
        <ul className="infoHeader-info">
          <li className="infoPhone ">
            <a className="infoHeader-item" href={`tel:${general.phone}`}>
              <i className="icon-phone"></i>
              {general.phone}
            </a>
          </li>
          <li className="infoHeader-item">
            <i className="icon-schedule"></i>
            {general.schedule}
          </li>
          <li className="infoHeader-item">
            <a
              className="infoHeader-item"
              href={`mailto:${general.email}`}
              target="_blank"
            >
              <i className="icon-mail"></i>
              {general.email}
            </a>
          </li>
          <li className="infoAdress ">
            <a
              className="infoHeader-item"
              href={general.map_url}
              target="_blank"
            >
              <i className="icon-gps"></i>
              {general.address}
            </a>
          </li>
        </ul>
        <Socials rsp={false}></Socials>
      </Container>
    </div>
  );
};

export default InfoHeader;
