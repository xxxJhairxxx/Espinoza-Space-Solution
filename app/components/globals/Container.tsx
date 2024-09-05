import { FC, PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
  style?: object;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`container-general ${className}`}>{children}</div>;
};
