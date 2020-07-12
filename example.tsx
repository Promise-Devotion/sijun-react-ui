import React from "react";
import ReactDom from "react-dom";
import IconExample from './lib/icon/example/icon.example'
import ButtonExample from './lib/button/example/button.example'

import {HashRouter as Router, Route, Link} from 'react-router-dom';

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
                <Link to="/icon">icon</Link>
            </li>
            <li>
                <Link to="/button">button</Link>
            </li>
          </ol>
        </aside>
        <main>
            <Route path="/icon" component={IconExample}/>
            <Route path="/button" component={ButtonExample}/>
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root")
);
