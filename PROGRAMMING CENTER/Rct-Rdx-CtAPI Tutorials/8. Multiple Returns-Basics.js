import { useState } from 'react'

const ReactBasics = () => {
    const [loading, setLoading] = useState(false)

    if (loading) {
        /* Keep in mind you can set up the whole app in here.
As far as this return, nothing stops you from adding divs from 
adding models or whatever you want. I mean, you can go as crazy as 
you'll feel. Just keep in mind that if the condition is not met,
then of course, you'll have your default one. So you'll return h1 with
Error. Again, you can set it up, the whole application here. 

This is somewhat typical where there's some kind of loading
state. You literally can't check for loading or if the user exists or 
something of that sort. And then if the condition is met, then you 
display one part of the application, so one giant component with 
multiple other components. And then if the condition is not met, 
then of course, you display a signup page or something of that nature.

So hopefully the basics are clear where since it is a function, 
we're going to multiple returns. Now, of course, if we don't set up 
the condition, then we'll just return the first one because all the
other ones will be ignored. However, if we start setting up conditions, 
nothing stops us from setting up returns within those conditions.
So if the condition is met, we'll have one return if the condition 
is not met then of course, we'll have a different type of return.
And that way, of course, you can make your components way more 
dynamic because now they're not static. Now they return based on some 
type of condition. */
        return <h3>Pop</h3>;
    }

    return <h1>Error</h1>

}

export default ReactBasics
