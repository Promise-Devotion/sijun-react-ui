import React, { Fragment } from "react";

import { scopedClassMaker } from "../helpers/classes";
import './dialog.scss'
import Icon from '../index';

interface Props {
  visible: boolean;
}

const scopedClass = scopedClassMaker("sui-dialog");
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ? 
    <Fragment>
      <div className={sc("mask")}></div>
      <div className={sc("")}>
        <div className={sc("close")}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>内容</main>
        <footer className={sc("footer")}></footer>
      </div>
    </Fragment>
    :
    null
  );
};

export default Dialog;