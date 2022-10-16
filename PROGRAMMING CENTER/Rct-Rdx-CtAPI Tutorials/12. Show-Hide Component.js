import React, { useState, useEffect } from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            <button onClick={() => setShow(!show)}>
                ShwHide</button>
            { show && <Part />}
        </div>
    )
}


// Cruicial, remember cleanup function 
const Part = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checksize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checksize);
        return () => {
            window.removeEventListener('resize', checksize)
        }
    }, [])

    return (
        <div>
            <h1>window</h1>
            <h2>size:</h2>
        </div>
    )
}

export default ShowHide;

