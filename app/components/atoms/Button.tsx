import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  iconCLass?: string;
  enlace?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  className,
  iconCLass,
  enlace,
  onClick,
}: ButtonProps) => {
  return (
    <Link
      href={enlace ? enlace : "/contact"}
      className={`Btn ${className} `}
      onClick={onClick}
    >
      {text} <i className={iconCLass}></i>
    </Link>
  );
};

export default Button;
