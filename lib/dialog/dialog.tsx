import React, { Fragment, ReactElement, ReactNode, ReactFragment } from "react";
import ReactDOM from "react-dom";

import { scopedClassMaker } from "../helpers/classes";
import "./dialog.scss";
import Icon from "../index";

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
        {
          props.buttons && props.buttons.length > 0 &&
            <footer className={sc("footer")}>
              {props.buttons &&
                props.buttons.map((button, index) =>
                  React.cloneElement(button, { key: index })
                )}
            </footer>
        }
      </div>
    </Fragment>
  ) : null;
  return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
  closeMask: false,
};
const alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      closeMask={false}
      onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  const component = (
    <Dialog
      visible={true}
      closeMask={false}
      onClose={onNo}
      buttons={[
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>,
      ]}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};
const modal = (content: ReactNode | ReactFragment) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog visible={true} onClose={onClose}>
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return onClose;
};
export { alert, confirm, modal };

export default Dialog;
