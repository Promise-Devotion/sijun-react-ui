import React, { useState } from "react";
import Dialog from "../dialog";

const DialogExample = () => {
  const [x, setx] = useState(false);
  return (
    <div>
      <button onClick={() => setx(!x)}>点击</button>
      <Dialog visible={x} />
    </div>
  );
};

export default DialogExample;
