import React from 'react';
import ReactDom from 'react-dom';

import Icon from './icon/icon';

ReactDom.render(
    <div>
        <Icon name={'wechat'}></Icon>
        <Icon name={'qq'}></Icon>
        <Icon name={'zfb'}></Icon>
    </div>,
    document.querySelector('#root')
);