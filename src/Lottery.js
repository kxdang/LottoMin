import React, { Component } from "react";
import Ball from "./Ball";
import './Lottery.css'
import { numberConverter, matchingNumbers } from "./helper"

class Lottery extends Component {
  static defaultProps = {
    title: "Quick Pick Numbers",
    numBalls: 7,
    maxNum: 50
  };

  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5, 6, 7], winningNumbers: [48, 24, 8, 11, 22, 7, 38], startingMoney: 160400000000, moneySpent: 0, isWon: false };
    this.handleClick = this.handleClick.bind(this);
    this.moneyLeft = this.moneyLeft.bind(this);

  }

  generateQuickPickNumbers() {
    //Math.floor(Math.random() * this.props.maxNum) + 1; //Add one because it will give us 1-49
    this.setState(currentState => ({
      nums: currentState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      ) //creates new array with random number for each spot
    }));
  }

  moneyLeft() {
    this.setState(currentState => ({ startingMoney: (currentState.startingMoney - 70000000) }))
    this.setState(currentState => ({ moneySpent: (currentState.moneySpent - 70000000) }))
  }

  handleClick = e => {
    this.generateQuickPickNumbers();
    this.moneyLeft();
    console.log(this.state.nums)
    console.log(this.state.winningNumbers)
    if (matchingNumbers(this.state.nums, this.state.winningNumbers)) {
      this.setState(currentState => ({ isWon: true }))
    }

  };



  render() {
    return (

      <section className="Lottery">
        <h1 className="Lottery-title">Winning Numbers:</h1>
        <div className="Lottery-WinningNumbers">
          {this.state.winningNumbers.map(num => <p className="Lottery-WinningNumber">{num}</p>)}
        </div>
        {console.log(this.state.nums)}
        <h1>{this.props.title}</h1>
        {this.state.isWon ? 'Congrats you won!' : <div>
          <div>
            {this.state.nums.map(n => (
              <Ball num={n} />
            ))}
          </div>
          <button onClick={this.handleClick}>BUY QUICK PICK NUMBERS</button>
          <p>Each quick pick ticket cost $70 million dollars</p>
          <p>Money left: {this.state.startingMoney < 0 ? `-$${numberConverter(this.state.startingMoney)}` : `$${numberConverter(this.state.startingMoney)}`}</p>
          <p>Money spent: <span className={this.state.moneySpent < 0 ? "Lottery-debt" : ""}>{this.state.moneySpent < 0 ? "-" : ""}${numberConverter(this.state.moneySpent)}</span></p>
        </div>}


      </section>
    );
  }
}

export default Lottery;
