import React, { Fragment, ReactElement } from "react";

import { scopedClassMaker } from "../helpers/classes";
import './dialog.scss'
import Icon from '../index';

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>,
  onClose: React.MouseEventHandler,
  closeMask: boolean
}

const scopedClass = scopedClassMaker("sui-dialog");
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = (props) => {
  const handleclose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const closeClickMask:React.MouseEventHandler = (e) => {
    if (props.closeMask) {
      props.onClose(e)
    }
  }
  return (
    props.visible ? 
    <Fragment>
      <div className={sc("mask")} onClick={closeClickMask}></div>
      <div className={sc("")}>
        <div className={sc("close")} onClick={handleclose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </main>
        <footer className={sc("footer")}>
          {
            props.buttons.map((button, index) => 
              React.cloneElement(button, {key: index})
            )}
        </footer>
      </div>
    </Fragment>
    :
    null
  );
};

export default Dialog;
