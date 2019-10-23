import React from 'react'; /*nimi*/
import './Circle.css'; /*polun kanssa */

const Circle = (props) => {
    return (
      <div className='circle' onClick={props.click}>
      </div>
    )
  }

export default Circle;