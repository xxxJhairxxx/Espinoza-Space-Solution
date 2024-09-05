import React from "react";

interface SubmitProps {
  text: string;
  className?: string;
  iconCLass?: string;
}

const Submit = ({ text, className, iconCLass }: SubmitProps) => {
  return (
    <button className={`Btn ${className} `}>
      {text} <i className={iconCLass}></i>
    </button>
  );
};

export default Submit;
