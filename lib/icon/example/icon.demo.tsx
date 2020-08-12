import * as React from "react";
import Iconexample from "./icon.example";
import Demo from "../../../demo";

const preCode = require("!!raw-loader!./icon.example.tsx");

const IconDemo = () => {
  return (
    <div>
      <section>
        <h1>Icon图标</h1>
        <p>语义化的矢量图形。使用图标组件</p>
      </section>
      <section>
      <section>
        <h2>代码示例</h2>
      </section>
        <Demo code={preCode.default}>
          <Iconexample />
        </Demo>
      </section>
    </div>
  );
};
export default IconDemo;
