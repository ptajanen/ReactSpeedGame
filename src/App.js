import React, {Component} from 'react';
import './App.css';
import './index.css';
import Circle from './counter/Circle.js';
import GameOver from './gameOver/GameOver.js';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {

state= {
current:0,
score:0,
rounds:0,
showGameOver:false
};

pace = 1500;
  timer = undefined;

  next = () => {
    if(this.state.rounds >=4){
      this.endHandler();
      return;
    }
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (
      nextActive === this.state.current
    );
    this.setState({
      current: nextActive,
    });
    this.pace *= 0.95;
    this.timer = setTimeout(this.next.bind(this), this.pace);
    console.log(this.state.current);
  }

    clickHandler = (btnId) => {
    console.log('Well done!', btnId);
    if(this.state.current !== btnId){
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1
    })
  }

  startHandler = () => {
    this.next();
  }

  endHandler = () =>{
    this.setState({showGameOver: true})
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Speed Game</h1>
          <p>Your score is: {this.state.score}</p>
        </div>
<div>
<Circle
  buttonColor='green'
  active={this.state.current === 1}
  click={() => this.clickHandler(1)}
/>

<Circle
  buttonColor='red'
  active={this.state.current === 2}
  click={() => this.clickHandler(2)}
/>

<Circle 
  buttonColor='yellow'
  active={this.state.current === 3}
  click={() => this.clickHandler(3)}
/>

<Circle 
  buttonColor='blue'
  active={this.state.current === 4}
  click={() => this.clickHandler(4)}
/>
</div>

  <button1 className="buttons"
  onClick = { this.startHandler } > START the GAME </button1>   
  <button2 className="buttons"     
  onClick = { this.stopHandler } >  STOP the GAME  </button2>

<div>
          {this.state.showGameOver &&
            <GameOver
              score={this.state.score}
            />}
        </div>
      </div>
    );
  }
}  

export default App;
