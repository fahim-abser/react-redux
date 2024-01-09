import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounters } from '../services/Action/ActionCounter';

const Counter = () => {
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();
    const handleIncrease = ()=>{
        dispatch(incrementCounter())
    }
    const handleDecrease = ()=>{
        dispatch(decrementCounter())
    }
    const resetCounter = ()=>{
        dispatch(resetCounters())
    }
    
    return (
        
        
        <div>
            <h1>Counter App</h1>
            <h3>Count:  {count}</h3>
            <button onClick={handleIncrease}>Increment</button>
            <button onClick={handleDecrease}>Decrement</button>
            <button onClick={resetCounter}>RESET</button>
        </div>
    );
};

export default Counter;