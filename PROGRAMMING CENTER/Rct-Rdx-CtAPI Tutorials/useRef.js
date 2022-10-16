
// App.js
import React from 'react'
import Setup from './tutorial/5-useRef/setup/1-useRef-basics'

function App() {
    return (
        <div className='container'>
            <Setup />
        </div>
    )
}

export default App




// useRef.js
import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }
    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus();
    })


    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type="submit">submit</button>
                </div>
            </form>
            <div ref={divContainer}>hello man</div>
        </div>
    )
};

export default UseRefBasics;
