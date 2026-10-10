import type {ComponentPropsWithRef, MouseEvent} from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "fill" | "outline" | "text";
export type ButtonSize = "S" | "M" | "L";

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = BaseButtonProps & {
  as?: "button";
} & ComponentPropsWithRef<"button">;

type ButtonAsLink = BaseButtonProps & {
  as: "a";
  disabled?: boolean;
} & ComponentPropsWithRef<"a">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

// В React 19 ref — обычный проп, поэтому forwardRef не нужен:
// <Button ref={buttonRef} /> или <Button as="a" ref={linkRef} />
function Button({
  variant = "fill",
  size = "S",
  className,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (props.as === "a") {
    const {as: Tag, disabled, href, onClick, tabIndex, ...otherProps} = props;

    // У <a> нет атрибута disabled — эмулируем: убираем href,
    // выкидываем из tab-порядка и блокируем клик.
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    return (
      <Tag
        {...otherProps}
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex}
        onClick={handleClick}
        className={classes}
      />
    );
  }

  const {as: Tag = "button", type = "button", ...otherProps} = props;

  return <Tag type={type} {...otherProps} className={classes} />;
}

export default Button;
