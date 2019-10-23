import React from 'react'; /*nimi*/
import './GameOver.css'; /*polun kanssa */

const closeHandler = () => {
  window.location.reload();
  }
  const GameOver = (props) => {
      return (
          <div id="result">
              <div className="gameoverbox">
                  <p className="gameover">Game over! Score: {props.score}</p>
                  <button className="buttons" onClick={closeHandler}>Close</button>
              </div>
          </div>
      );
  }

export default GameOver;