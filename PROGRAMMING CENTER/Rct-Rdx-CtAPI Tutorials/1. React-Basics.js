
// 24 Props

// import Page from '../components/Page';

// Book (Component)


const rut = "pony";
const num = 65;

const firstMan = {
    name: 'Elkhan',
    age: 48,
    image: 'https://unsplash.it/200/100',
    id: 1
}

const secondMan = {
    name: 'Hamet',
    age: 28,
    image: 'https://unsplash.it/200/100',
    id: 2
}


const Book = () => {

    return (
        <div>
            <Page
                noise={876}
                rut={rut}
                name={firstMan.name}
                age={firstMan.age}
                id={firstMan.id}
                img={firstMan.image}
            />
            <Page
                num={num}
                name={secondMan.name}
                age={secondMan.age}
                id={secondMan.id}
                img={secondMan.image}
            />
        </div>
    )
}

export default Book



// Page(Component)

const Page = (props) => {

    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <img src={props.img} alt="" />
            <h3>{props.id}</h3>
        </div>
    )
}

export default Page


//---------------------------------------------------------------------------


// 25 Props - Destructuring

// import Page from '../components/Page';

// Book (Component)

const rut = "pony";
const num = 65;

const firstMan = {
    name: 'Elkhan',
    age: 48,
    image: 'https://unsplash.it/200/100',
    id: 1
}

const secondMan = {
    name: 'Hamet',
    age: 28,
    image: 'https://unsplash.it/200/100',
    id: 2
}


const Book = () => {

    return (
        <div>
            <Page
                noise={876}
                rut={rut}
                name={firstMan.name}
                age={firstMan.age}
                id={firstMan.id}
                img={firstMan.image}
            />
            <Page
                num={num}
                name={secondMan.name}
                age={secondMan.age}
                id={secondMan.id}
                img={secondMan.image}
            />
        </div>
    )
}

export default Book



// Page(Component)

const Page = ({ id, name, img, age }) => {   // both do the same thing

    // const { id, name, img, age } = props;

    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <img src={img} alt="" />
            <h3>{id}</h3>
        </div>
    )
}

export default Page


//---------------------------------------------------------------------------


// 26 Props - Children

// import Page from '../components/Page';

// Book (Component)

const rut = "pony";
const num = 65;

const firstMan = {
    name: 'Elkhan',
    age: 48,
    image: 'https://unsplash.it/200/100',
    id: 1
}

const secondMan = {
    name: 'Hamet',
    age: 28,
    image: 'https://unsplash.it/200/100',
    id: 2
}


const Book = () => {

    return (
        <div>
            <Page
                noise={876}
                rut={rut}
                name={firstMan.name}
                age={firstMan.age}
                id={firstMan.id}
                img={firstMan.image}
            >
                <p>This children prop is placed between opening and
                closing tags. You can place here a whole project,
                buttons, forms whatever you'd like to place between
                opening and closing tags.
                </p>
            </Page>   {/* Must close tag */}

            <Page
                num={num}
                name={secondMan.name}
                age={secondMan.age}
                id={secondMan.id}
                img={secondMan.image}
            />
        </div>
    )
}

export default Book



// Page(Component)

const Page = ({ id, name, img, age, children }) => {

    // It must be named children, otherwise it won't work.
    // And placement below matters. So wherever you will place it,
    // it will show up there

    // const Page = (props) => {
    // const { id, name, img, age, children } = props;

    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            {children}
            {/* {props.children} - props way, before destructuring */}
            <img src={img} alt="" />
            <h3>{id}</h3>
        </div>
    )
}

export default Page


//---------------------------------------------------------------------------


// 27 Simple List

// import Page from '../components/Page';

// Book (Component)

const men = [

    {
        name: 'Elkhan',
        age: 48,
        image: 'https://unsplash.it/200/100',
        id: 1
    },

    {
        name: 'Hamet',
        age: 28,
        image: 'https://unsplash.it/200/100',
        id: 2
    }
]


const Book = () => {

    const beatles = ['john', 'paul', 'george', 'ringo']

    const musicians = beatles.map((singer) => {
        return (
            <div>
                <h3>{singer}</h3>
            </div>
        )
    })
    // Remember!!! We can setup & render variable here, or we can 
    // iterate over in jsx!!!
    // It returns each item from the array being wrapped in h3 tag, 
    // then stores them into musicians variable. And then we display 
    // them below. We can only iterate over the array here, it can't
    // be object. Later we'll see how to iterate over the array that 
    // has the objects, and instead of h1 we'll see how we can return 
    // a component.

    return (
        <div>
            {musicians}
        </div>
    )
}

export default Book


//---------------------------------------------------------------------------


// 28 Proper List

// This is the first way of iterating over the array that's got object

// import Page from '../components/Page';

// Book (Component)


const men = [

    {
        name: 'Elkhan',
        age: 48,
        image: 'https://unsplash.it/200/100',
        id: 1
    },

    {
        name: 'Hamet',
        age: 28,
        image: 'https://unsplash.it/200/100',
        id: 2
    }
]


const Book = () => {

    return (
        <div>
            {men.map((man) => {
                console.log(man); // will print out two objects
                // const { id, name, image, age } = man;
                return (

                    // <div>
                    //    Here we can return whatever we would want!!!
                    //     <h3>{id}</h3>    After destructuring we can
                    //     <h6>{name}</h6>   display each property of
                    //     <h3>{image}</h3>  the object. Or we can
                    //     <h4>{age}</h4>    return the component below.
                    // </div>   

                    // We don't need to destructure with component.
                    // We can pass the whole object, and destructure
                    // in the Page component.

                    <Page
                        key={man.id}
                        man={man} />

                )

            })}
        </div>
    )
}

export default Book


// Page(Component)

const Page = () => {

    const { id, name, image, age } = props.man;

    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <img src={image} alt="" />
            <h3>{id}</h3>
        </div>
    )
}

export default Page


//---------------------------------------------------------------------------


// 29 Key Prop and Spread Operator

// Second way of iterating over the array that's got object with the 
// spread operator 

// import Page from '../components/Page';

// Book (Component)

const men = [

    {
        name: 'Elkhan',
        age: 48,
        image: 'https://unsplash.it/200/100',
        id: 1
    },

    {
        name: 'Hamet',
        age: 28,
        image: 'https://unsplash.it/200/100',
        id: 2
    }
]


const Book = () => {

    return (
        <div className="booklist">
            {men.map((man) => {
                return (

                    <Page
                        key={man.id}
                        {...man} // how many properties we have, doesn't
                    />     // matter. Just spread them out as props. And
                )          // then we'll access them in other component
            })}
        </div>
    )
}

export default Book





// Page(Component)

const Page = ({ id, name, image, age }) => {

    // const { id, name, image, age } = props;   <--- or like this

    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <img src={image} alt="" />
            <h3>{id}</h3>
        </div>
    )
}

export default Page


//---------------------------------------------------------------------------


// 30 Event Basics

// import Page from '../components/Page';

// Book (Component)

const men = [

    {
        name: 'Elkhan',
        age: 48,
        image: 'https://unsplash.it/200/100',
        id: 1
    },

    {
        name: 'Hamet',
        age: 28,
        image: 'https://unsplash.it/200/100',
        id: 2
    }
]


const Book = () => {

    return (
        <div className="booklist">
            {men.map((man) => {
                return (

                    <Page
                        key={man.id}
                        {...man}
                    />
                )
            })}
        </div>
    )
}

export default Book





// Page(Component)

const Page = () => {

    const { id, name, image, age } = props;

    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello');
    }

    const complexExample = (age) => {
        console.log(age);
    }

    return (
        <div onMouseOver={() => {             // with curly braces
            console.log(id);
        }}>

            <h3 onClick={() => console.log(name)}>    {/* inline */}
                {name}
            </h3>

            <h3>{age}</h3>
            <img src={image} alt="alt" />
            <h3>{id}</h3>

            <button onClick={clickHandler}>      {/* reference */}
                Press
            </button>

            <button
                onClick={() => complexExample(age)}> {/* passing argument */}
                More Complex Example
            </button>
        </div>
    )
}

export default Page


//---------------------------------------------------------------------------