
// Keep in mind that these names need to match.
// So if you're setting up your function, your component and name 
// it Image, if you want to export as default, of course, you 
// would need to use the same name, meaning Image

const Image = ({ guitar, numberOfStrings, tonePositions,
    isItNew, computers, amount, condition, colors,
    brandNames }) => {

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

            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>

            <button type="button" onClick={clickHandler}>
                reference example
        </button>

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

export default Image;

// And also keep in mind that you can have only one, only one 
// default export per file. Meaning you can set up more named 
// exports from this particular file from Image.js.
// But as far as default, you can have only one.