import React, { useState } from "react";
import Dialog from "../dialog";

const DialogExample = () => {
  const [x, setx] = useState(false);
  const handleCancel = () => {
    setx(false);
  };
  const handleOk = () => {
    setx(false);
  };
  return (
    <div>
      <div
        style={{ position: "relative", zIndex: 999, border: "1px solid red" }}
      >
        <h1>点击mask关闭(默认)</h1>
        <button onClick={() => setx(!x)}>点击</button>
        <Dialog
          visible={x}
          onClose={() => {
            setx(false);
          }}
          closeMask={true}
          buttons={[
            <button onClick={handleCancel}>Return</button>,
            <button onClick={handleOk}>Submit</button>,
          ]}
        />
      </div>
    </div>
  );
};

export default DialogExample;
