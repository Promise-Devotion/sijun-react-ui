import React from "react";
import { scopedClassMaker } from "../helpers/classes";
import './layout.scss'

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const sc = scopedClassMaker("gu-layout");

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...restProp} = props
  return <div className={[sc(""), className].join(' ')} {...restProp}>{props.children}</div>;
};

export default Layout;
