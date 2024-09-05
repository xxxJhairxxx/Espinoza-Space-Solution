import Image from "next/image";
import { SetStateAction, useEffect } from "react";

interface ModalProps {
  image: string;
  title: string;
  activeToggle: () => void;
}

const Modal = ({ image, title, activeToggle }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "visible";
    };
  }, []);

  return (
    <>
      <div className="BackgroundModal" onClick={activeToggle}></div>

      <div className="Modal__thumb">
        <Image src={image} width={1000} height={1000} alt={title}></Image>
      </div>
    </>
  );
};

export default Modal;
