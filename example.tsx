import React from 'react';
import ReactDom from 'react-dom'
// import Icon from './lib/icon/icon'

ReactDom.render((
    <div>
        <header>
            <div className="logo">Sijun-React-UI</div>
        </header>
        <div>
            <aside>
                <h3>组件</h3>
                <ol>
                    <li>icon</li>
                    <li>button</li>
                </ol>
            </aside>
            <main></main>
        </div>
    </div>
), document.querySelector('#root'))