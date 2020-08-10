import * as React from "react";
import Dialogxample from "./dialog.example";
import Demo from '../../../demo';


const preCode = require("!!raw-loader!./dialog.example.tsx");

const DialogDemo = () => {
  return (
    <div>
      <Demo code={preCode.default}>
        <Dialogxample />
      </Demo>
    </div>
  );
};
export default DialogDemo;
