import React, {useState} from "react";
import Dialog, {alert, confirm, modal} from "../dialog";
import Button from "../../button/button";

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
        <Button level="primary" className="a" size="medium" onClick={() => close()}>关闭</Button>
      </h1>
    );
  };
  return (
    <div>
      <div>
        <h1>点击mask不关闭</h1>
        <Button onClick={() => sety(!y)}>点击</Button>
        <Dialog
          visible={y}
          onClose={() => {
            sety(false);
          }}
          closeMask={false}
          buttons={[
            <Button level="normal" className="a" size="medium" onClick={handleCancel}>Return</Button>,
            <Button level="primary" className="a" size="medium" onClick={handleOk}>Submit</Button>,
          ]}
        >
          modal
        </Dialog>
      </div>
      <div>
        <h1>alert</h1>
        <Button onClick={() => alert("content")}>alert</Button>
      </div>
      <div>
        <h1>confirm</h1>
        <Button
          onClick={() =>
            confirm(
              "content",
              () => {
              },
              () => {
              }
            )
          }
        >
          confirm
        </Button>
      </div>
      <div>
        <h1>modal</h1>
        <Button onClick={openModal}>modal</Button>
      </div>
    </div>
  );
};

export default DialogExample;
