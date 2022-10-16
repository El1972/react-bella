import React, { useState } from 'react';
import { data } from '../../../data'


// Props Drilling allows you to pass fnction or properties,
// while exposes the problem that we can solve with Contexr API,
// or Redux (for more complex cases).


// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
    const [people, setPeople] = useState(data)

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((man) => {
                return man.id !== id
            })
        })

    }

    return (
        <section>
            <List
                people={people}
                removePerson={removePerson}
            />
        </section>
    )
};




const List = ({ people, /* remove */ removePerson }) => {
    return (
        <div>
            {people.map((person) => {
                return (
                    <SinglePerson
                        key={person.id} {...person}
                        removePerson={removePerson}
                    // remove={remove} - if you'll give a different name
                    />
                )
            })}
        </div>
    )
}




const SinglePerson = ({ id, name, /* remove */ removePerson }) => {

    return (
        <div className="item">
            <h4>{name}</h4>
            {/* <button onClick={() => remove(id)}> press</button>*/}
            <button onClick={() => removePerson(id)}>press</button>
        </div>
    )

}

export default PropDrilling;
