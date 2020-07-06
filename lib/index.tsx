import React from 'react';
import ReactDom from 'react-dom';

import Icon from './icon/icon';

const fn = (e: React.MouseEvent) => {
    console.log(e)
}

ReactDom.render(
    <div>
        {/* <Icon name={'wechat'}></Icon>
        <Icon name={'qq'}></Icon> */}
        <Icon name={'zfb'} onClick={fn}
            onMouseEnter={() => {console.log('enter')}}
            onMouseLeave={() => {console.log('enter')}}
        ></Icon>
    </div>,
    document.querySelector('#root')
);