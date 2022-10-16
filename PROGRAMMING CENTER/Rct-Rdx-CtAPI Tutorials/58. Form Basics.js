import React from 'react'

const Forms = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hello world');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    <input type="text" id="firstName" name='firstName' />
                </label><br />
                <label htmlFor="email">
                    <input type="text" id="email" name='email' />
                </label><br />
                {/* or you can use on the button: onClick={handleSubmit} */}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Forms