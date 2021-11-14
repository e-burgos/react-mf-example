import * as React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className='border-2 border-solid border-green-200 border-r-8 rounded-lg p-3 text-center'>
            <button
                onClick={() => setCounter(counter + 1)}
                className='bg-green-500 rounded-lg p-2 text-white'
            >{counter === 0 ? 'Click Me!' : counter}</button>
        </div>
    )
}

export default Counter;

