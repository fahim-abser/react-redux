import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount]=useState(2)
    const handleIncrease = ()=>{
        setCount((count)=>count+1);
    }
    const handleDecrease = ()=>{
        setCount((count)=>count-1);
    }
    return (
        
        
        <div>
            <h1>Counter App</h1>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrease}>Increment</button>
            <button onClick={handleDecrease}>Decrement</button>
        </div>
    );
};

export default Counter;