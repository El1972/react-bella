import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson';

const ReactBasics = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user');

    useEffect(() => {
        // setIsLoading(true) - also you can specify 
        // true here and useState(false) (above)
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json()
                } else {
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(resp.statusText)
                }
            })
            .then((user) => {
                const { login } = user // destructuring
                // from user object
                setUser(login)
                setIsLoading(false)
            })
            .catch((error) => { /* when you talk about 
                catch, you're not catching here 404 
                error (the not found). You're just 
                catching the network. That's why we're 
                doing this whole setup: (above)
                if(resp.status >= 200 && resp. status <= 299)  
                */
            })
    }, [])

    /* !!! Essentially the main idea is following: where we can 
    have multiple states(above), and then depending on that state, 
    we are setting up the returns(below).
    Again, keep in mind, you can return different components, you
    can return a bunch of HTML elements or whatever you'd want.
    This is just a most basic example !!! */

    if (isLoading) {
        return <div>
            <h1>Loading...</h1>
        </div>
    }
    if (isError) {
        return <div>
            <h1>Error...</h1>
        </div>
    }
    return <div>
        <h1>{user}</h1>
    </div>

}

export default ReactBasics
