import React from "react";
import ReactDom from "react-dom";
import IconExample from "./lib/icon/example/icon.example";
import ButtonExample from "./lib/button/example/button.example";
import DialogExample from "./lib/dialog/example/dialog.example";
import LayoutExample from "./lib/layout/example/layout.axample";
import { HashRouter as Router, Route, Link } from "react-router-dom";

ReactDom.render(
  <Router>
    <div>
      <header>
        <div className="logo">Sijun-React-UI</div>
      </header>
      <div>
        <aside>
          <h3>组件</h3>
          <ol>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button 按钮</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog 对话框</Link>
            </li>
            <li>
              <Link to="/layout">Layout 布局</Link>
            </li>
          </ol>
        </aside>
        <main>
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root")
);
