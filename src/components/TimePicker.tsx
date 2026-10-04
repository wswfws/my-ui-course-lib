import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./TimePicker.module.css";

export type TimePickerSize = "S" | "M" | "L";

type TimePickerProps = {
  size?: TimePickerSize;
  label?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

function TimePicker({
  size = "M",
  label,
  className,
  ...otherProps
}: TimePickerProps) {
  const classes = [styles.timePicker, styles[size], className]
    .filter(Boolean)
    .join(" ");

  const input = <input type="time" {...otherProps} className={classes} />;

  if (!label) {
    return input;
  }

  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      {input}
    </label>
  );
}

export default TimePicker