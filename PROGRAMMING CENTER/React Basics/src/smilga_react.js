import React from 'react';
import ReactDom from 'react-dom';

// --- First Component in Detail
// stateless functional component
// always return JSX

// function Greeting() {
//   return <div>
//     <h1>Hello Man</h1>           this is more readable, than
//   </div>                                           below
// }

const Greeting = () => {
  return React.createElement('h1', {}, React.createElement('h1',
    {}, 'hello world'
  ));
}

ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- JSX Rules
// always return single element
// div / section / article or <React.Fragment>
// use camelCase for htl attribute
// className instead of class
// close every element
// formating

function Greeting() {
  return <React.Fragment>
    <div className=''>
      <h1>Hello Man</h1>
      <img src="" alt="" />
    </div>
  </React.Fragment>
}

const Format = () => {
  return (                   // use parenthesis after return
    <div>
      <h1>Hello There</h1>
    </div>
  )
}

Format()

ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Nested Components and Tools
// Nested Components, React Tools

function Greeting() {     // explicit return (on next line)
  return <div>
    <Person />
    <Message />
    <h1>Hello Man</h1>
  </div>
}


const Person = () => {
  <h2>John Lennon</h2>    // implicit return
}

const Message = () => {
  return (
    <div>
      <h1>I love this learning</h1>
    </div>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Mini Book Project
// notice, how each component is nested inside of each other

function Greeting() {
  return <div>
    <Book />
  </div>
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
    </article>
  )
}

const Image = () => {
  return (
    <img src="https://www.google.com/url?
    sa=i&url=https%3A%2F%2Fwww.amazon.com%2
    FChildrens-Book-Peaceful-Management-bullying-ebook%2Fdp%2
    FB00JQP3RX2&psig=AOvVaw0i_5dQAhdHBwi-pgNILUom&ust=
    1604126272100000&source=images&cd=vfe&ved=
    0CAIQjRxqFwoTCJiWrZfa2-wCFQAAAAAdAAAAABAG" alt="" />
  )
}

const Title = () => {
  return (
    <h1>I love the kids books</h1>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';   // you have to specify a full extension

// --- CSS
// must use className instead of class

function Greeting() {
  return <div className='main'>
    <h1>Hello Man</h1>
  </div>
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- JSX - CSS
// it's done with the help of 'style' attribute
// style = {} // curly braces mean javascript world
// inline css(style={}, will override external css)

// So, if you want to access Javascript world in the JSX
// you would need to setup your curly braces
// Well, because in order to set up values for the style, 
// the gotcha is that you need to have a JavaScript object, 
// meaning object and then all the properties are going to be 
// as a JavaScript values like you would have in the object.
// Now why am I telling you all this is because once I'm in 
// the JavaScript world here with the first set of curly braces, 
// of course, in order to create an object, I would need to 
// set up another pair of curly braces.

// GENERAL: One thing about react is there's always multiple  
// ways, how you can do the same thing.

function Greeting() {
  return <div>
    <Book />
  </div>
}

const Book = () => {
  return (
    <article style={{
      backgroundColor: 'purple',
      fontSize: '0.75rem',
      marginTop: '0.25rem'
    }}>
      <Image></Image>
      <Title></Title>
    </article>
  )
}

const Image = () => {
  return (
    <img src="https://www.google.com/url?
    sa=i&url=https%3A%2F%2Fwww.amazon.com%2
    FChildrens-Book-Peaceful-Management-bullying-ebook%2Fdp%2
    FB00JQP3RX2&psig=AOvVaw0i_5dQAhdHBwi-pgNILUom&ust=
    1604126272100000&source=images&cd=vfe&ved=
    0CAIQjRxqFwoTCJiWrZfa2-wCFQAAAAAdAAAAABAG" alt="" />
  )
}

const Title = () => {
  return (
    <h1>I love the kids books</h1>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- JSX - Javascript
// notice where you can write inside & outside the function

function Greeting() {
  return <div>
    <Image />
  </div>
}

const author = 'Amelia Hapworth';
const Image = () => {
  const title = 'I love you to the Moon and Back';

  return (
    <article>
      <img src="https://www.google.com/url?
    sa=i&url=https%3A%2F%2Fwww.amazon.com%2
    FChildrens-Book-Peaceful-Management-bullying-ebook%2Fdp%2
    FB00JQP3RX2&psig=AOvVaw0i_5dQAhdHBwi-pgNILUom&ust=
    1604126272100000&source=images&cd=vfe&ved=
    0CAIQjRxqFwoTCJiWrZfa2-wCFQAAAAAdAAAAABAG" alt="" />
      {/* One rule about setting up JavaScript here in the JSX is 
    that it must return a value. So it has to be an expression.
    It cannot be a statement  */}
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* this will give an error, cause it's not an expression */}
      <p>{let x = 6}</p>
    </article>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Props

// setup vars & you ca pass them, as well as object, array etc...

const author = 'Amelia Hapworth';
const title = 'I love you to the Moon and Back';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/81eB%2.jpg';

const myObject = {
  guitar: 'electric',
  numberOfStrings: 6,
  tonePositions: ['neck', 'bridge', 'middle'],
  isItNew: true
}

function Greeting() {
  return <div>
    <Image guitar={myObject.guitar}
      numberOfStrings={myObject.numberOfStrings}
      tonePositions={myObject.tonePositions} />

    <Image job='developer' />
    <Image title='my title' number={22} />
  </div>
}


const Image = (props) => {
  console.log(props);

  return (
    <article>
      <img src={} alt="" />
      <h2>{props.guitar}</h2>
      <h3>{props.numberOfStrings}</h3>   {/* accessing object */}
      <h5>{props.tonePositions}</h5>

      <h1>{title}</h1>
      <h4>{author}</h4>        {/* accessing variables */}

      {console.log(props)}
      <p>{props.job}</p>
      <p>{props.title}</p>     {/* image component's props */}
      <p>{props.number}</p>
    </article>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Props - Destructuring

const author = 'Amelia Hapworth';
const title = 'I love you to the Moon and Back';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/81eB%2.jpg';

const myObject = {
  guitar: 'electric',
  numberOfStrings: 6,
  tonePositions: ['neck', 'bridge', 'middle'],
  isItNew: true
}

function Greeting() {
  return <div>
    <Image guitar={myObject.guitar}
      numberOfStrings={myObject.numberOfStrings}
      tonePositions={myObject.tonePositions} />

    <Image job='developer' />
    <Image title='my title' number={22} />
  </div>
}



// another way of destructuring
// Destructuring props object in the function parameters:

// const Image = ({guitar, numberOfStrings, tonePositions}) => {

const Image = (props) => {

  const { guitar, numberOfStrings, tonePositions } = props;

  return (
    <article>
      <img src={} alt="" />
      <h2>{guitar}</h2>
      <h3>{numberOfStrings}</h3>   {/* accessing object */}
      <h5>{tonePositions}</h5>

      <h1>{title}</h1>
      <h4>{author}</h4>        {/* accessing variables */}

      <p>{props.job}</p>
      <p>{props.title}</p>     {/* image component's props */}
      <p>{props.number}</p>
    </article>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Props - Children
// You can't name it anything, the names have to match

// There are times when you want to pass complex elements to
// a child component such as dialog box, in those cases we use
// a children prop
// You see, the children Propp is everything that we render in 
// between the opening and closing time of the component.

// Used for dialog boxes

const author = 'Amelia Hapworth';
const title = 'I love you to the Moon and Back';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/81eB%2.jpg';

const myObject = {
  guitar: 'electric',
  numberOfStrings: 6,
  tonePositions: ['neck', 'bridge', 'middle'],
  isItNew: true
}

function Greeting() {
  return <div>
    <Image guitar={myObject.guitar}
      numberOfStrings={myObject.numberOfStrings}
      tonePositions={myObject.tonePositions} />


    {/* Everything between Image component tags are children 
                                                props */}
    <Image>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Corrupti excepturi vel unde eligendi tempore sit deserunt
      ratione pariatur? Fugiat impedit iusto quaerat dolorum
      odio ab alias consectetur quam facilis quidem!</p>
      {/* We can also render dynamically: */}
      <h4>My Guitar{myObject.tonePositions}</h4>
    </Image>

    <Image job='developer' />
    <Image title='my title' number={22} />
  </div>
}


const Image = (props) => {

  const { guitar, numberOfStrings, tonePositions,
    children } = props;

  return (
    <article>
      <img src={} alt="" />
      <h2>{guitar}</h2>
      <h3>{numberOfStrings}</h3>
      {props.children}    {/* original way */}
      {children}    {/* depends on the placement, it'll appear 
                  there */}
      <h5>{tonePositions}</h5>

      <h1>{title}</h1>
      <h4>{author}</h4>

      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Simple List

const properties = [
  {
    guitar: 'electric',
    numberOfStrings: 6,
    tonePositions: ['neck', 'bridge', 'middle'],
    isItNew: true
  },

  {
    computers: 'all kinds',
    amount: 4,
    condition: 'working',
    colors: 'dark',
    brandNames: ['Apple', 'HP', 'Lenove']
  }
]

// You can render, however, it's gonna make way more sense 
// if we will wrap those values in something more meaningful.
// In this case, of course, that is <h1>.

const names = ['john', 'paul', 'george', 'ringo'];
const beatles = names.map((name) => {
  return <h1>{name}</h1>
})

function Greeting() {
  return <div>
    {properties}
  </div>
}


const Image = (props) => {

  const { guitar, numberOfStrings, tonePositions } = props;

  return (
    <article>
      <img src={} alt="" />
      <h2>{guitar}</h2>
      <h3>{numberOfStrings}</h3>
      <h5>{tonePositions}</h5>

      <h1>{title}</h1>
      <h4>{author}</h4>

      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Proper List

const properties = [
  {
    guitar: 'electric',
    numberOfStrings: 6,
    tonePositions: ['neck', 'bridge', 'middle'],
    isItNew: true
  },

  {
    computers: 'all kinds',
    amount: 4,
    condition: 'working',
    colors: 'dark',
    brandNames: ['Apple', 'HP', 'Lenove']
  }
]


function Greeting() {
  return (
    <div>
      {properties.map((item) => {
        // return 'hello'
        //  But I have two values. Now, why do I have two values? 
        //  Because I have two items in the array. So as I'm 
        //  iterating with map, I will always return the amount of 
        //  items that I have in the original array. So if I would 
        //  have two thousand since I'm just returning a hello from 
        //  this function, I'll have two thousand hellos.

        // return 'hello'; <-- here we can return whatever that 
        // we'd want
        return <Image item={item}></Image>
      })}
    </div>
  )
}


const Image = (props) => {

  const { guitar, numberOfStrings, tonePositions,
    isItNew, computers, amount, condition, colors,
    brandNames } = props.item;

  return (
    <article>
      <img src={} alt="" />
      <h2>{guitar}</h2>
      <h3>{numberOfStrings}</h3>
      <h5>{tonePositions}</h5>

      <h1>{title}</h1>
      <h4>{author}</h4>

      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Key Prop and Spread Operator

// Because React wants to keep track of things, we have to add
// id in our objects, but working with APIs it'll happen
// automatically

const properties = [
  {
    id: 1,
    guitar: 'electric',
    numberOfStrings: 6,
    tonePositions: ['neck', 'bridge', 'middle'],
    isItNew: true
  },

  {
    id: 3,
    computers: 'all kinds',
    amount: 4,
    condition: 'working',
    colors: 'dark',
    brandNames: ['Apple', 'HP', 'Lenove']
  }
]

// Again, my job is to show you multiple syntaxes, multiple ways 
// how you can solve it. It is up to you whichever way you prefer.
// If you don't like the spread operator set up, you don't have 
// to use it. However, this is my favorite, so I will use it 
// somewhat often throughout the course.

function Greeting() {
  return (
    <div>
      {properties.map((item) => {
        {/* What I can say is that I would like to spread out all 
the properties here that are coming from the item on my 
property. */}
        return <Image key={item.id} {...item}></Image>
      })}
    </div>
  )
}


const Image = (props) => {
  // So what that means, again, we go back to our previous setup 
  // where either I'm looking for a props if I'm 
  // destructuring over here, or keep in mind, I can also do it 
  // in function parameters as well.

  //  const Image = ({ guitar, numberOfStrings, tonePositions,
  //   isItNew, computers, amount, condition, colors,
  //   brandNames }) => {

  //      I know it's annoying for some people, but in general,  
  // it is a good practice to understand that there's
  // multiple ways how to solve it. And again, it's up to you to 
  // decide whichever method you prefer.
  const { guitar, numberOfStrings, tonePositions,
    isItNew, computers, amount, condition, colors,
    brandNames } = props;

  return (
    <article>
      <img src={} alt="" />
      <h2>{guitar}</h2>
      <h3>{numberOfStrings}</h3>
      <h5>{tonePositions}</h5>

      <h1>{title}</h1>
      <h4>{author}</h4>

      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}


ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// --- Event Basics

const properties = [
  {
    id: 1,
    guitar: 'electric',
    numberOfStrings: 6,
    tonePositions: ['neck', 'bridge', 'middle'],
    isItNew: true
  },

  {
    id: 3,
    computers: 'all kinds',
    amount: 4,
    condition: 'working',
    colors: 'dark',
    brandNames: ['Apple', 'HP', 'Lenove']
  }
]

function Greeting() {
  return (
    <div>
      {properties.map((item) => {
        return <Image key={item.id} {...item}></Image>
      })}
    </div>
  )
}


const Image = ({ guitar, numberOfStrings, tonePositions,
  isItNew, computers, amount, condition, colors,
  brandNames }) => {

  // attribute, eventHandler
  // onClick, onMouseOver

  // now all set up multiple examples because we have multiple
  // options, just so you can see whichever makes more sense to 
  // you. So we can set it up as a reference
  // or we can set it up as a inline function.

  const clickHandler = () => {
    alert("Hello World");
  }

  const mouseOver = () => {
    console.log('it moves');
  }

  return (
    <article>
      <img src={} alt="" />
      <h2>{guitar}</h2>
      <h3>{numberOfStrings}</h3>
      <h5>{tonePositions}</h5>

      {/* inline example */}

      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>

      {/* Here I'll set up as a reference: */}

      <button type="button" onClick={clickHandler}>
        reference example
      </button>

      {/* If you have this kind of situation where you must 
      pass the argument into the function, you'll have
      to first set up an arrow function. So here we'll start with 
      an end line and then we can either set up the curly braces 
      if we want. */}
      {/* And again, this is going to be for more complex scenarios
      where we'll start passing data, for example, to the database 
      or will be removing items. */}

      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>

      <button type="button" onMouseOver={() => {
        mouseOver(author)
      }}>onMouse</button>

      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

import React from 'react';
import ReactDom from 'react-dom';

// So if you're changing something around, like I said, this is 
// a named export. So, you'll need to access exactly the same 
// name. Meaning in this file, and the file you're importing
import { properties } from './properties';

// So the difference between named and default exports is the  
// fact that now I can name it whatever I would want
import Image from './image';

// importing a variable and displaying relative path
import { testing } from './testing/testing'

// --- Import and Export Statements


function Greeting() {
  console.log(testing);
  return (
    <div>
      {properties.map((item) => {
        return <Image key={item.id} {...item}></Image>
      })}
    </div>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'));

//---------------------------------------------------------------

// --- Free Hosting

// Shows how to host a React application on Netlify

//---------------------------------------------------------------



