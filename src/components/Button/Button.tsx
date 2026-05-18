import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import style from "./Button.module.css";

namespace Button {
  export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isPrimary?: boolean;
    onClick?: () => void;
  }
}

export const Button: FC<Button.Props & PropsWithChildren> = ({
  isPrimary = false,
  children,
  ...props
}) => {
  return (
    <button type="button" className={style.root} {...props}>
      {children}
    </button>
  );
};
