import React from "react";
import { Container } from "../globals";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <Container className={`sectionTitle ${className}`}>
      {subtitle && <h3 className="sectionTitle-subtitle">{subtitle}</h3>}
      <h2 className="sectionTitle-title">{title.toLowerCase()}</h2>
    </Container>
  );
};

export default SectionTitle;
