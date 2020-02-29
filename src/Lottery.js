import React, { Component } from "react";
import Ball from "./Ball";
import './Lottery.css'

class Lottery extends Component {
  static defaultProps = {
    title: "Quick Pick Numbers",
    numBalls: 7,
    maxNum: 50
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }), winningNumbers: [48, 24, 8, 8, 22, 7, 38], startingMoney: 121300000000, moneySpent: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.moneyLeft = this.moneyLeft.bind(this);
  }

  generate() {
    //Math.floor(Math.random() * this.props.maxNum) + 1; //Add one because it will give us 1-49
    this.setState(currentState => ({
      nums: currentState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      ) //creates new array with random number for each spot
    }));
  }

  moneyLeft() {
    this.setState(currentState => ({ startingMoney: currentState.startingMoney - 1000000000 }))
    this.setState(currentState => ({ moneySpent: currentState.moneySpent - 1000000000 }))
  }

  handleClick = e => {
    this.generate();
    this.moneyLeft();

  };

  render() {
    return (
      <section className="Lottery">
        <h1 className="Lottery-title">Winning Numbers:</h1>
        <div className="Lottery-WinningNumbers">
          {this.state.winningNumbers.map(num => <p className="Lottery-WinningNumber">{num}</p>)}
        </div>

        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>BUY NUMBERS ($70 MILLION DOLLARS)</button>
        <p>Money left: ${this.state.startingMoney}</p>
        <p>Money spent on trying to win: ${this.state.moneySpent}</p>
      </section>
    );
  }
}

export default Lottery;
