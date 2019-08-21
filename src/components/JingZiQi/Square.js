import React from 'react';

// 函数组件
export function Square(props) {
  return (
    <button className="square square-x" onClick={props.onClick}>
      {props.value}
    </button>
  );
}