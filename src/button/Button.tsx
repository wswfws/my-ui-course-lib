import type {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "fill" | "outline" | "text";
export type ButtonSize = "S" | "M" | "L";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button(
  {
    variant = "fill",
    size = "S",
    className,
    type = "button",
    children,
    ...otherProps
  }: ButtonProps) {

  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} {...otherProps} className={classes}>
      {children}
    </button>
  );
}

export default Button