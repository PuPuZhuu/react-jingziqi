import React from 'react';

//时间组件
export class DateText extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    UNSAFE_componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
              });
        }, 1000);
        console.log('Component DID MOUNT!')
    }
    UNSAFE_componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
           console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}