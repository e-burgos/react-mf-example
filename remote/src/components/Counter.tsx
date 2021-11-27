import React, { useState } from 'react';

type Props = {
    title: string;
};

const Counter = ({ title }: Props) => {
    const [counter, setCounter] = useState(0);

    return (
        <div className='border-2 border-solid border-red-200 border-r-8 rounded-lg p-3 flex flex-row align-middle justify-center'>
            <p className="p-2 mr-10">{title}</p>
            <button
                onClick={() => setCounter(counter + 1)}
                className='bg-green-500 rounded-lg p-2 ml-10 text-white'
            >{counter === 0 ? 'Click Me!' : counter}</button>
        </div>
    )
}

export default Counter;

