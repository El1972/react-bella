import React, { useState } from 'react'
// Adding Button to a short-circuit evaluation
// ternary opertator

const ShortCircuit = () => {
    const [text, setText] = useState('')
    const [isError, setIsError] = useState(false)

    return (
        <div>
            {text || 'hey estrada'}
            <button onClick={() => setIsError(!isError)}>
                toggle error</button>
            <h3>{isError && <h4>Error...</h4>}</h3>
        </div>
    )

}

export default ShortCircuit;


// Please keep in mind that in React if() in jsx - doesn't  
// work. It doesn't return the value, that's why we need to  
// use something that returns the value either: short-circuit 
// operator or ternary operator


// Ternary operator syntax: value ? value1 : value2


const TernaryOperator = () => {

    const [isError, setIsError] = useState(false);

    return (
        <div>
            <button onClick={() => setIsError(!isError)}>
                toggle error
            </button>

            {isError ? (
                // you can have 10000 components here
                <p>sky is the limit of what you can render here</p>
            ) : (
                <div>
                    <h2>there is no error</h2>
                </div>
            )}
        </div>
    )
}

export default TernaryOperator;