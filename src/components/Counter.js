import React  from 'react';

const Counter = () => {
    
    const handleIncrease = ()=>{
        
    }
    const handleDecrease = ()=>{
       
    }
    return (
        
        
        <div>
            <h1>Counter App</h1>
            <h3>Count: 0</h3>
            <button onClick={handleIncrease}>Increment</button>
            <button onClick={handleDecrease}>Decrement</button>
        </div>
    );
};

export default Counter;