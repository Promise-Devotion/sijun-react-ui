import React from "react";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("gu-layout");

const Footer: React.FunctionComponent = (props) => {
    return <div className={sc("header")}>{props.children}</div>;
};

export default Footer;
