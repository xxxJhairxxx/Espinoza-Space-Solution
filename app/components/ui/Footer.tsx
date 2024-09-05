import React from "react";
import { Container } from "../globals";
import { Socials } from "../atoms";
import { useGenerals } from "@/context/generals.context";

const Footer = () => {
  const { general } = useGenerals();
  return (
    <footer className="Footer" id="footer">
      <Container className="Footer-ctn">
        <ul>
          <li>
            <a href={`${general.map_url}`} target="_blank">
              <i className="icon-gps"></i> {general.address}
            </a>
          </li>
          <li>
            <a href={`tel:${general.phone}`}>
              <i className="icon-phone"></i> {general.phone}
            </a>
          </li>
          <li>
            <a>
              <i className="icon-schedule"></i> {general.schedule}
            </a>
          </li>
          <li>
            <a href={`mailto:${general.email}`} target="_blank">
              <i className="icon-mail text-[1.15rem] p-0 -ml-1"></i>
              {general.email}
            </a>
          </li>

          <li>
            <Socials className="Footer-ctn-social" rsp={false}></Socials>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
