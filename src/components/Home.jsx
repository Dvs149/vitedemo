import { React, useState } from 'react'

const Home = () => {
    const [counter, setCounter] = useState(0);
 
    //increase counter
    const increase = () => {
      setCounter(asd => asd + 1);
    };
   
    //decrease counter
    const decrease = () => {
      setCounter(asd => asd - 1);
    };
   
    //reset counter 
    const reset = () =>{
      setCounter(0)
    }
   
    return (
      <div className="counter">
        <h1>React Counter</h1>
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={increase}>+</button>
          <button className="control__btn" onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    );
}

export default Home