import React, { Fragment } from "react";

import { scopedClassMaker } from '../helpers/classes';

interface Props {
  visible: boolean;
}


const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;
const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    <Fragment>
      <div className={sc('mask')}></div>
      <div className={sc('')}>
        <div className={sc('close')}></div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>
          内容
        </main>
        <footer className={sc('footer')}></footer>
      </div>
    </Fragment>
  );
};

export default Dialog;
