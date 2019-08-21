import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Game } from "./components/JingZiQi/Game";
import { Provider } from "react-redux";
import { store } from "store";

const rootElement = document.getElementBy('root')
ReactDOM.render(
    <Provider store={store} >
        <Game class='game'/>
    </Provider>,
    rootElement
);
