import React from "react";
import Input from "../input";
import NoticeExample from '../../notice';
const InputExample = () => {
  return (
    <div>
      <div>
        <NoticeExample >通过鼠标或键盘输入内容，是最基础的表单域的包装。</NoticeExample>
      </div>
      <Input type="input" className="a"></Input>
      <Input type="textarea" className="a"></Input>
    </div>
  );
};

export default InputExample;
