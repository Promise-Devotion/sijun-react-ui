import React from "react";
import { scopedClassMaker } from "../helpers/classes";
interface Props extends React.HTMLAttributes<HTMLElement> {

}
const sc = scopedClassMaker("gu-layout");

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProp } = props;
  return <div className={sc("header", {extra: className})} {...restProp}>{props.children}</div>;
};

export default Header;
