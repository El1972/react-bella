import React, { useState } from 'react'
// short-circuit evaluation
// ternary opertator


/* in react we can't use conditional and return expression:

return (
    { if(){console.log('hello world')} }
) 

it is not allowed. 
   That's why we will heavily work with short
circuit operators as well as the ternary operator to display
something conditionally. Because we already covered
it of course, we have multiple returns. But what if I would
want to have a one return, but again, based on some
condition, there's going to be either some data shown or
hidden and stuff along those lines.
*/

const ShortCircuit = () => {
    const [text, setText] = useState('');

    // if first half is falsy(''), then we return second value
    // (half). But once first half becomes truthy ('k') for
    // example, then it's gonna return the first value: 'k'
    const firstValue = text || 'hello world'

    // if first is truthy: ('k'), then 'hello world' will be 
    // displayed (second half). If first is falsy then first 
    // one will be displayed which is an empty string 
    const secondValue = text && 'hello world'

    return (
        <div>
            {/* <h1>{firstValue}</h1>
            <h1>text : {secondValue}</h1> */}
            <h1>{text || 'john doe'}</h1>
            {text && <h1>hello world</h1>}

            {/* we can also flip it and say: if it's not true 
            (!true), then return the second value */}
            {!text && <h1>hello world</h1>}
        </div>
    )
}

export default ShortCircuit;

// Keep in mind that everything that we're gonna talk about
// and use in the examples & projects later on is based on this
// short-circuit evaluation theory.