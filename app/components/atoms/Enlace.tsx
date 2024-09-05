import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  enlace?: string;
}

const Enlace = ({ text, className, enlace }: ButtonProps) => {
  return (
    <Link href={enlace ? enlace : "/contact"} className={`enlace`}>
      {text}
    </Link>
  );
};

export default Enlace;
