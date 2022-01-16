import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = {
            numArray: Array.from({length: this.props.numBalls})
        };
        this.handleGenerate = this.handleGenerate.bind(this);
    }

    generateNum() {
        this.setState(curState => ({
            numArray: curState.numArray.map(
                n => (Math.floor(Math.random() * this.props.maxNum) + 1)
            )
        }));
    }

    handleGenerate() {
        this.generateNum();
    }

    render() {
        return (
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.numArray.map(n => (
                        <Ball num={n} />)
                    )}
                </div>
                <button onClick={this.handleGenerate}>Generate</button>
            </section>
        )
    }
}

export default Lottery;