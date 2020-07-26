import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "../dialog";

const DialogExample = () => {
  const [x, setx] = useState(false);
  const handleCancel = () => {
    setx(false);
    sety(false);
  };
  const [y, sety] = useState(false);
  const handleOk = () => {
    setx(false);
    sety(false);
  };
  const openModal = () => {
    const close = modal(
      <h1>
        nihao. modal!
        <button
          onClick={() => close()}
        >
          关闭
        </button>
      </h1>
    );
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
      <div>
        <h1>点击mask不关闭</h1>
        <button onClick={() => sety(!y)}>点击</button>
        <Dialog
          visible={y}
          onClose={() => {
            sety(false);
          }}
          closeMask={false}
          buttons={[
            <button onClick={handleCancel}>Return</button>,
            <button onClick={handleOk}>Submit</button>,
          ]}
        >
          modal
        </Dialog>
      </div>
      <div>
        <h1>alert</h1>
        <button onClick={() => alert("content")}>alert</button>
      </div>
      <div>
        <h1>confirm</h1>
        <button
          onClick={() =>
            confirm(
              "content",
              () => {},
              () => {}
            )
          }
        >
          confirm
        </button>
      </div>
      <div>
        <h1>modal</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  );
};

export default DialogExample;
