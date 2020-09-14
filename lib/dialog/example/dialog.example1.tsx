import React, { useState } from "react";
import Dialog from "../dialog";
import Button from "../../button/button";

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
            <Button level="primary" className="a" size="medium" onClick={handleOk}>Submit</Button>,
            <Button level="normal" className="a" size="medium" onClick={handleCancel}>Cancel</Button>,
          ]}
        >
          点击mask关闭(默认)
        </Dialog>
      </div>
    </div>
  );
};

export default DialogExample;
