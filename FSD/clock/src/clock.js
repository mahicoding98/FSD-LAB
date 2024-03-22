// clock.js
import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="clock">
                <div className="analog-clock">
                    <div className="hour-hand"
                        style={{
                            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
                        }}
                    />
                    <div className="min-hand"
                        style={{
                            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
                        }}
                    />
                    <div className="sec-hand"
                        style={{
                            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
                        }}
                    />
                    
                    <span className="hour-mark twelve">12</span>
                    <span className="hour-mark one">1</span>
                    <span className="hour-mark two">2</span>
                    <span className="hour-mark three">3</span>
                    <span className="hour-mark four">4</span>
                    <span className="hour-mark five">5</span>
                    <span className="hour-mark six">6</span>
                    <span className="hour-mark seven">7</span>
                    <span className="hour-mark eight">8</span>
                    <span className="hour-mark nine">9</span>
                    <span className="hour-mark ten">10</span>
                    <span className="hour-mark eleven">11</span>
                </div>
            </div>
        );
    }
}
