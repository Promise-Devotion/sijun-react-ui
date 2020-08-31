import React, { ButtonHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: "normal" | "important" | "danger"
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, level, ...rest } = props;
  return (
    <button className={classes("jun-button", `jun-button-${level}`, className)} {...rest}>
      按钮
    </button>
  );
};

Button.defaultProps = {
  level: "normal"
}

export default Button;
