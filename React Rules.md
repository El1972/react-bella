

<script>

                  // useState() - General Info

useState() - // it triggers re-render & preserves the value 
// between re-renders

const [users, setUsers] = useState([])

setUsers() - // after you update the state it triggers 
// re-render

</script>





<script>

                    // useState - Simple Use Case

import React from 'react'

const Practice = () => {

    let title = 'random title'

    const handleClick = () => {
        title = 'hello people'
        console.log(title);
        // the problem is we changed the value but we're not
        // re-rendering the component. That's why we can't see
        // any changes. The second thing is that we have no way
        // to preserve this value: 'hello people' in between
        // the renders as well
        // So essentially we'd want two things:
        // 1) Keep the value between the renders
        // 2) But also we'd want to trigger that re-render
        // And this is where useState() helps
    }

    return (
        <div>
            <h2>{title}</h2>
            <button type='button' onClick={handleClick}>Press</button>
        </div>
    )
}

export default Practice

</script>





<script>

                        // useState - Basics

import React, { useState } from 'react' // named import. Name must be
// exact

const Practice = () => {
    console.log(useState())  // is a function. It returns an array of
    // value and function, that controls that value
    // const value = useState(1)[0]
    // const handler = useState(1)[1]
    // console.log(value, handler);

    const [text, setText] = useState('random title')

    const handleClick = () => {
        if (text === 'random text') {
            setText(989)
        } else {
            setText(67)
        }
    }
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleClick}>Press</button>
        </div>
    )
}

export default Practice

</script>





<script>
                    // General Rules of Hooks

// 1. Hooks start with use
// 2. Components where we invoke these hooks must be uppercase
// 3. Hook must be in a function(component) body!!!
// 4. We can't call hook conditionally, inside of if-else

</script>





<script>
                    // useState - Array Example

import React, { useState } from 'react'

const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Paul' },
    { id: 3, name: 'Mick' },
    { id: 4, name: 'Bill' }
]

const Practice = () => {
    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        let newPeople = people.filter((p) => {
            return p.id !== id
        })
        setPeople(newPeople)

        // Functional Approach!!!
        setPeople((oldPeople)=>{
            let newPeople = oldPeople.filter((p)=>{
                return p.id !== id
                return newPeople
            })
        })
    }

    return (
        <div>
            {people.map((p) => {
                const { id, name } = p
                return (
                    <div key={id}>
                        <h3>{id}</h3>
                        <h3>{name}</h3>
                        {/* since we're passing an argument where we invoking
                        the function we need to use an arrow function. 
                        Otherwis it'll run right away  */}
                        <button onClick={() => removeItem(id)}>Delete One</button>
                    </div>
                )
            })}
            {/* we'd want to invoke it, once we click on it!!! */}
            {/* since we're passing an argument where we invoking
            the function we need to use an arrow function. 
            Otherwise it'll run right away  */}
            <button onClick={() => setPeople([])}>Delete</button>
        </div>
    )
}

export default Practice

</script>





<script>

                        // useState - Object Example

import React, { useState } from 'react'

const Practice = () => {
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message'
    })

    const changeMessage = () => {
        // setPerson('hello man') - it'll wipe out object's data !!!
        // So, if you're using object always use spread operator,
        // where you copy old values from state value, and then decide 
        // which one you'd want to change
        setPerson({ ...person, message: 'hello man' })
    }

    return (
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button onClick={changeMessage}>Change</button>
        </div>
    )
}

export default Practice

</script>





<script>

                    // useState - Multiple State Values

import React, { useState } from 'react'

const Practice = () => {
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message'
    })

    // Example of using multiple states instead of one object!!!
    const [name, setName] = useState('john')
    const [age, setAge] = useState(38)
    const [message, setMessage] = useState('random message')


    const changeMessage = () => {
        // setPerson({ ...person, message: 'hello man' }) - use spread op.!!!
        setMessage('hello world')
    }

    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{person.message}</h3>
            <button onClick={changeMessage}>Change</button>
        </div>
    )
}

export default Practice

</script>





<script>

                            // Simple Counter

      import React, { useState } from 'react'

const Practice = () => {
    const [value, setValue] = useState(0)

    const reset = () => {
        setValue(0) // example of passing value directly in a setValue()
    }

    return (
        <div>
            <h2>Regular Counter</h2>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>Increase</button>
            <br />
            <button onClick={reset}>Reset</button>
            <br />
            <button onClick={() => setValue(value - 1)}>Decrease</button>

        </div>
    )
}

export default Practice                      

</script>





<script>

                            // Functional Update Form

import React, { useState } from 'react'

const Practice = () => {
    const [value, setValue] = useState(0)

    const reset = () => {
        setValue(0) // example of passing value directly in a setValue()
    }

    const complexIncrease = () => {
        setTimeout(() => {
            // setValue(value + 1)
            setValue((prevState) => {  // it gets a current value!!!
                // if you won't return anything, 
                return prevState + 1 // functionality will break
            })                       // you must return a  value!!!
        }, 2000)    // whatever you'll return from
        // this function is a new value!!!
    }

    return (
        <div>
            <h2>Regular Counter</h2>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>Increase</button>
            <br />
            <button onClick={reset}>Reset</button>
            <br />
            <button onClick={() => setValue(value - 1)}>Decrease</button>
            <br />
            <br />
            <h1>More Complex Counter</h1>
            <h1>{value}</h1>
            <button onClick={complexIncrease}>Increase</button>
        </div>

    )
}

export default Practice

</script>

<!-- ------------------------------------------------------------- -->

<script>

                            // useEffect()

useEffect(()=>{

},[])

1) // useEffect() - runs after each component render (initial 
// component render or when you refresh the page)
useEffect(()=>{
    console.log('useffect')
})
console.log('component')

// Output:

// 2 - useffect (runs second)

// 1 - component (runs first)



2) // if you have an empty dependancy array as a second argument:
useEffect(()=>{

},[])
// it will run only once as soon as initial render automatically
// happens (when you refresh the page, or component renders)



3) // If you have a value in a dependancy array it wil run after 
// each component renders including (initial component render or 
// when you refresh the page):
useEffect(()=>{

},[value])



4) // You can have a conditional inside of it:
useEffect(()=>{
if(value > 3){
    console.log('it runs)
}
},[value])



5) // Cleanup function. Using events with useEffect(()=>{})
   // It can be used for canceling subscriptions, timers or
   // removing event handlers 

const [size, setSize] = useState(window.innerWidth)

const checkSize = () =>{
    setSize(window.innerWidth)
}

useEffect(()=>{
    console.log('useffect')
    window.addEventListener('resize', checkSize)
    return ()=>{
        console.log('cleanup')
        window.removeEventListener('resize', checkSize)
    }
})
console.log('component')

// Output

// Initially after component renders (or refresh page), these 2 
// run:

// 1 - component (runs first initial run, component render)

// 2 - useffect (runs second, adds event listener)


// Then after I resize window these run:

// 3 - component (runs first after window resize. Component 
// renders)

// before we call // 2 - useffect, before we add that another
// event listener, essentially we clean it up (we remove that
// event listener with cleanup function:
// window.removeEventListener('resize', checkSize)):

// 4 - cleanup (runs fourth, cleans it)



6) // Fetching data with useEffect(()=>{})

// Here the problem is an infinite loop. You call getUsers()
// in useEffect(), and it'll update state with setUsers(users)
// which in return will call useEffect() again, and that will
// call getUsers() again and so on and on ...

const [users, setUsers] = useState([]);

const getUsers = async () =>{
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
}

useEffect(()=>{
    getUsers()
})

// So the solution is empty dependancy array: []

const [users, setUsers] = useState([]);

const getUsers = async () =>{
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
}

useEffect(()=>{
    getUsers()
}, [])


</script>

<!-- ------------------------------------------------------------- -->

<script>

            // Multiple Returns (Conditional Rendering)


import React, { useState } from 'react'

const Practice = () => {
    const [loading, setLoading] = useState(true)

    // We can have(setup) multiple returns!!!

    if (loading) {
        // You can setup the whole app in here, as far as this
        // return. Nothing stops you from adding(returning) divs, 
        // modals, spinners, different components, bunch of HTML 
        // elements or whatever you'd want. You can go as crazy 
        // as you feel. Sky is the limit
        return <h2>Loading...</h2>
    }

    return (
        <div>

        </div>

    )
}

export default Practice

</script>





<script>

                  // Multiple Returns (Data Fetching)

import React, { useState, useEffect } from 'react'

const url = 'https://localhost:3000/myname.com'

const Practice = () => {
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [user, setuser] = useState('default user')


    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json()
                } else {
                    setLoading(false)
                    setIsError(true)
                    throw new Error(resp.statusText)
                }
            })
            .then((user) => {
                const { login } = user;
                setuser(login)
                setLoading(false)
            })
            .catch((error) => {
            })
    }, [])


    if (loading) {
        return <div>
            <h2>Loading...</h2>
        </div>
    }

    if (isError) {
        return (
            <div>
                <h2>Error...</h2>
            </div>
        )
    }

    return (
        <div>
            {user}
        </div>

    )
}

export default Practice

</script>





<script>

                    // Short Circuit Evaluation

import React, { useState, useEffect } from 'react'


const Practice = () => {
    const [text, setText] = useState('')

    // if it's truthy then we return first value: text 'e'
    // if it's falsy then we return second value: 'hello world'

    const firstValue = text || 'hello world'

    // if it's truthy then we return second value: 'short circuit'
    // if it's falsy then we return first value: empty text ''

    const secondValue = text && 'short circuit'

    return (
        <div>
            {/* <h3>{firstValue}</h3>
            <h3>value: {secondValue}</h3> */}

            <h1>{text || 'elhan'}</h1>
            {/* {text && <h1>react js</h1>} */}
            {!text && <h1>react js</h1>}
        </div>

    )
}

export default Practice

</script>





<script>

                          // Ternary Operator

import React, { useState, useEffect } from 'react'


const Practice = () => {
    const [text, setText] = useState('')
    const [error, setError] = useState(false)



    return (
        <div>

            {/* Short Circuit */}
            <h1>{text || 'elhan'}</h1>
            <button onClick={() => setError(!error)}>Toggle Error</button>
            {error && <h5>Only an Error...</h5>}


            {/* Ternary operator */}
            {/* You can setup whatever you'd want over here (look where hash is) # .You can add 10,000 components, that are sitting 
            in one giant component. Sky is the limit */}
            {error ? <h1> # There is an error...</h1> : <div>
            <h1> # There is NO ERROR...</h1></div>}
        </div>

    )
}

export default Practice

</script>




<script>

                          // Show/Hide Component

import React, { useState, useEffect } from 'react'


const Practice = () => {
    const [show, setShow] = useState(false)


    return (
        <div>
            <button onClick={() => setShow(!show)}>Show/Hide</button>
            {show && <Item />}
        </div>

    )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth)

    const chekSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', chekSize)
        return (() => {
            window.removeEventListener('resize', chekSize)
        })
    })

    return <div>
        <h1>window</h1>
        <h2>size : {size} px</h2>
    </div>
}

export default Practice

</script>

<!-- ------------------------------------------------------------- -->

<script>

                            // Form Basics

import React, { useState, useEffect } from 'react'


const Practice = () => {
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => { // you can look for properties available
        e.preventDefault()        // on event object
        console.log('heelo');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Name :</label>
                <input type="text" id='firstName' name='firstName' />
                <br />
                <label htmlFor="email">Email :</label>
                <input type="text" id='email' name='email' />
                <br />
                <button type='submit'>Press</button>
            </form>
        </div>

    )
}



export default Practice

</script>





<script>
                            // Controlled Inputs


import React, { useState, useEffect } from 'react'


const Practice = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Name :</label>
                <input type="text" id='firstName'
                    name='firstName' value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <label htmlFor="email">Email :</label>
                <input type="text" id='email'
                    name='email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type='submit'>Press</button>
            </form>
        </div>

    )
}



export default Practice

</script>




<script>
                        // Add Item to the List

import React, { useState } from 'react'

const Practice = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName && email) {
            const person = {
                id: new Date().getTime().toString(),
                firstName,
                email
            }
            console.log(person);
            setPeople((people) => {
                return [...people, person]
            })
            setFirstName('');
            setEmail('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Name :</label>
                <input type="text" id='firstName'
                    name='firstName' value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <label htmlFor="email">Email :</label>
                <input type="text" id='email'
                    name='email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type='submit'>Press</button>
            </form>
            {people.map((p) => {
                const { id, firstName, email } = p
                return <div key={id}>
                    <h1>{firstName}</h1>
                    <h3>{email}</h3>
                </div>
            })}
        </div>
    )
}

export default Practice
</script>




<script>

                        // Multiple Inputs

import React, { useState } from 'react'


const Practice = () => {
    const [person, setPerson] = useState({
        firstName: '',
        email: '',
        age: ''
    })
    const [people, setPeople] = useState([])


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (person.firstName && person.email && person.age) {
            const newPerson = {
                ...person,
                id: new Date().getTime().toString()
            }
            setPeople([...people, newPerson])
            setPerson({ firstName: '', email: '', age: '' })
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Name :</label>
                <input type="text" id='firstName'
                    name='firstName'
                    value={person.firstName}
                    onChange={handleChange} />
                <br />
                <label htmlFor="email">Email :</label>
                <input type="text" id='email'
                    name='email'
                    value={person.email}
                    onChange={handleChange} />
                <br />
                <label htmlFor="age">Age :</label>
                <input type="text" id='age'
                    name='age'
                    value={person.age}
                    onChange={handleChange} />
                <br />
                <button type='submit' onClick={handleSubmit}>Press</button>
            </form>


            {people.map((p) => {
                const { id, firstName, email, age } = p
                return <div key={id}>
                    <h1>{firstName}</h1>
                    <h3>{email}</h3>
                    <h3>{age}</h3>
                </div>
            })}
        </div>

    )
}

export default Practice
</script>

<!-- ------------------------------------------------------------- -->

<script>

                            // useRef()

</script>

<!-- ------------------------------------------------------------- -->

<script>

</script>