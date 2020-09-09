import React, { ButtonHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: "normal" | "important" | "danger" | "primary" | "text";
  size?: "small" | "medium" | "large"
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, level, size, ...rest } = props;
  console.log(props)
  return (
    <button className={classes("jun-button", `jun-button-${level}`, `jun-button-${size}`,  className)} {...rest}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  level: "normal",
  size: "medium"
}

export default Button;
