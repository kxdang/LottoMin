import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: "LottrMin",
    maxBalls: 7,
    maxNum: 50
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    //Math.floor(Math.random() * this.props.maxNum) + 1; //Add one because it will give us 1-49
    this.setState(currentState => ({
      nums: currentState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      ) //creates new array with random number for each spot
    }));
  }

  handleClick = e => {
    this.generate();
  };

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate Quik Pik Numbers!</button>
      </section>
    );
  }
}

export default Lottery;
