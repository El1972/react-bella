import React, { useState } from 'react'

const Forms = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, firstName);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    <input type="text" id="firstName"
                        name='firstName' value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </label><br />
                <label htmlFor="email">
                    <input type="text" id="email"
                        name='email' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Forms