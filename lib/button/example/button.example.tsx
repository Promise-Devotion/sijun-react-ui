import React from "react";
import Button from "../button";

const ButtonExample = () => {
  return (
    <div>
      <Button level="normal" className="a" size="small">默认</Button>
      <Button level="primary" className="a" size="medium">默认</Button>
      <Button level="danger" className="b c" size="medium">
        提交
      </Button>
      <Button level="important" className="d" size="large">成功</Button>
    </div>
  );
};

export default ButtonExample;
