import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={[
        "px-4 py-5 h-auto text-1xl btn font-bold",
        props.className,
      ].join(" ")}
    >
      {children}
    </button>
  );
};
