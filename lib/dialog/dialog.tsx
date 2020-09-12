import React, { Fragment, ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";

import { scopedClassMaker } from "../helpers/classes";
import "./dialog.scss";
import Icon from "../index";

import Button from "../button/button";

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeMask?: boolean;
}

const scopedClass = scopedClassMaker("sui-dialog");
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = (props) => {
  const handleclose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const closeClickMask: React.MouseEventHandler = (e) => {
    if (props.closeMask) {
      props.onClose(e);
    }
  };
  const x = props.visible ? (
    <Fragment>
      <div className={sc("mask")} onClick={closeClickMask}></div>
      <div className={sc("")}>
        <div className={sc("close")} onClick={handleclose}>
          <Icon name="close" />
        </div>
        <header className={sc("header")}>提示</header>
        <main className={sc("main")}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 && (
          <footer className={sc("footer")}>
            {props.buttons &&
              props.buttons.map((button, index) =>
                React.cloneElement(button, { key: index })
              )}
          </footer>
        )}
      </div>
    </Fragment>
  ) : null;
  return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
  closeMask: false,
};
const modal = (content: ReactNode, buttons?: Array<ReactElement>) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog visible={true} buttons={buttons} onClose={close}>
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};
const alert = (content: string) => {
  const button = <Button onClick={() => close()}>OK</Button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <Button onClick={onYes}>OK</Button>,
    <Button onClick={onNo}>CANCEL</Button>,
  ];
  const close = modal(content, buttons);
};

export { alert, confirm, modal };

export default Dialog;
