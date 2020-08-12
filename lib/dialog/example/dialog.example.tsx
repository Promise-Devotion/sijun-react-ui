import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "../dialog";

const DialogExample = () => {
  const handleCancel = () => {
    sety(false);
  };
  const [y, sety] = useState(false);
  const handleOk = () => {
    sety(false);
  };
  const openModal = () => {
    const close = modal(
      <h1>
        nihao. modal!
        <button onClick={() => close()}>关闭</button>
      </h1>
    );
  };
  return (
    <div>
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
