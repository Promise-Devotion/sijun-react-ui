import React from "react";
// import { Fragment } from "react";

const NoticeExample: React.FunctionComponent = (props) => {
  const { children } = props;
  return (
    <div>
      <h4>notice</h4>
      <div>
        {children}
      </div>
    </div>
  );
};

export default NoticeExample;