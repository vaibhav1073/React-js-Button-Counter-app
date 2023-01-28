import './Buttoncard.css'
import { useState } from "react";

const Buttoncard=()=>{
    let [count, setCount] = useState(0)
    const changeCount=()=>{
        setCount(++count);
    }
    const resetCount=()=>{
        setCount(0);
    }
    
    return (
        <div className="main"> 
          
            <button type="button" 
            onClick={changeCount}
            className="clickButton">Click Me!</button>
            {count===0 ?
             <h1>Click the Button</h1>:
             <div>
             <h1>button is clicked {count} times</h1>
             <button type='button' className='resetButton' onClick={resetCount}>Reset</button></div>
             }
            
        </div>
    )
}
export default Buttoncard;