import React from "react";
import './importicons'
import './icon.scss'

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className='logo'>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;
