import * as React from "react";
import Iconexample from "../example/icon.example";
import Demo from "../../../demo";

const preCode = require("!!raw-loader!../example/icon.example.tsx");

const IconDemo = () => {
  return (
    <div>
      <Demo code={preCode.default}>
        <Iconexample />
      </Demo>
    </div>
  );
};
export default IconDemo;
