import React from 'react';
import { Board } from "./Board";
import { DateText } from "../common/Date";

// import { connect } from 'react-redux'
// import { increment, decrement, reset } from './actionCreators'

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ // 历史记录
                squares: Array(100).fill(null),
                // 当前位置
                currentStatus: {
                    value: 0
                }
            }],
            stepNumber: 0, // 第几步
            isNext: true, // true为X, false为O
            gameSize: 10, // 棋盘边长
            gameStatus: '游戏开始：'
        }
    }

    // 跳转到历史记录
    jumpTo(step) {
        this.setState({ 
            stepNumber: step, 
            isNext: (step % 2) === 0
        });
    }

    // 处理棋盘点击
    handleClick(i) {
        // 创建squares的副本
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const squares = history[history.length - 1].squares.slice();
        if (squares[i] !== null) {
            return;
        }
        const nextPut = this.state.isNext ? 'X' : 'O';
        squares[i] = nextPut; 
        const winner = calculateWinner(squares);

        this.setState({
            // concat() 方法可能与你比较熟悉的 push() 方法不太一样，它并不会改变原数组，所以我们推荐使用 concat()
            history: history.concat([{
                squares: squares,
                currentStatus: {
                    value: i
                }
            }]),
            stepNumber: history.length,
            isNext: history.length % 2 === 0,
            gameStatus: winner ? winner + '获胜' : '下一步：' + (this.state.isNext ? 'X' : 'O')
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move + '*' + step.currentStatus.value:
              'Go to game start';
            return (
                history.length - move > 12 ? 
                ''
                 :
              (<li key={move}>
                <button 
                onClick={() => this.jumpTo(move)}
                style={ 
                    move === this.state.stepNumber 
                    ? 
                    {
                        color: 'white',
                        backgroundColor: '#213433'
                    } 
                    : {}
                }
                >{desc}</button>
              </li>)
            );
          });

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                    key='board'
                    squares={current.squares}
                    onClick = {(i) => this.handleClick(i)}
                    size={this.state.gameSize}
                    />
                </div>
                <div className="game-info">
                    <div>棋盘边长: {this.state.gameSize}</div>
                    <DateText />
                    <div>{ this.state.gameStatus }</div>
                    <h3>{history ? '历史记录:':''}</h3>
                    <ol>{ moves }</ol>
                </div>
            </div>
            
        );
    }
}

// 计算赢家
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

