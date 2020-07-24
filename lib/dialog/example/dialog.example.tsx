import React, { useState } from "react";
import Dialog from "../dialog";

const DialogExample = () => {
  const [x, setx] = useState(false);
  const handleCancel = () => {
    setx(false)
    sety(false)
  }
  const [y, sety] = useState(false)
  const handleOk = () => {
    setx(false)
    sety(false)
  }
  return (
    <div>
      <div>
        <h1>点击mask关闭(默认)</h1>
        <button onClick={() => setx(!x)}>点击</button>
        <Dialog visible={x} onClose={() => {setx(false)}} closeMask={true} buttons={
          [
            <button onClick={handleCancel}>
              Return
            </button>,
            <button onClick={handleOk}>
              Submit
            </button>,
          ]
        } />
      </div>
      <div>
        <h1>点击mask不关闭</h1>
        <button onClick={() => sety(!y)}>点击</button>
        <Dialog visible={y} onClose={() => {sety(false)}} closeMask={false} buttons={
          [
            <button onClick={handleCancel}>
              Return
            </button>,
            <button onClick={handleOk}>
              Submit
            </button>,
          ]
        } />
      </div>
    </div>
  );
};

export default DialogExample;
