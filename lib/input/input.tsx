import React, { InputHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./input.scss"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

const Input: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props
  return <input className={classes("jun-input", className)} {...rest} />;
};
export default Input;
