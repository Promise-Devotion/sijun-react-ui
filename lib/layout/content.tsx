import React from "react";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("gu-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<Props> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={sc("content", { extra: className })} {...restProps}>
      {props.children}
    </div>
  );
};

export default Content;
