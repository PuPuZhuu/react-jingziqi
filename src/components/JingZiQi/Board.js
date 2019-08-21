import React from 'react';
import { Square } from "./Square";

export class Board extends React.Component {

    // 渲染一个方块 index为方块对应的序号
    renderSquare(index) {
        return <Square
            key={index}
            // value={index}
            value={this.props.squares[index]}
            onClick={() => this.props.onClick(index)}
        />
    }

    // length 一行几个方块 
    // i 第几行 用于给square做key
    renderLine(length, i) {
        const squares = [];
        for (let j = 0; j < length; j++) {
            squares.push(this.renderSquare(i * length + j));
        }
        return (
            <div key={i} className="board-row">
                {squares}
            </div>
        );
    }

    // 渲染多行
    // length 边长几个方块
    renderLines(length) {
        const lines = [];
        for (let j = 0; j < length; j++) {
            lines.push(this.renderLine(length, j));
        }
        return lines;
    }

    render() {
        return <div>{this.renderLines(this.props.size || 5)}</div>;
    }
}
