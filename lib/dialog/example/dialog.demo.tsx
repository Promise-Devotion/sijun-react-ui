import * as React from "react";
import Dialogxample from "./dialog.example";
import Dialogxample1 from "./dialog.example1";
import Demo from "../../../demo";

const preCode = require("!!raw-loader!./dialog.example.tsx");
const example1code = require("!!raw-loader!./dialog.example1.tsx");

const DialogDemo = () => {
  return (
    <div>
      <Demo code={example1code.default}>
        <Dialogxample1 />
      </Demo>
      <Demo code={preCode.default}>
        <Dialogxample />
      </Demo>
    </div>
  );
};
export default DialogDemo;
