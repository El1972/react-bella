import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)


const PersonContext = React.createContext();
// two components - Provider, Consumer
// Provider works as a distributor



const ContextAPI = () => {

    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };

    return (
        <PersonContext.Provider value={{ removePerson, people }}>
            <h3>prop drilling</h3>
            <List />
        </PersonContext.Provider>
    );
};




// !!! I personally don't find it that useful if I have only one 
// level meeting with the list, I see no problem of passing that
// people state value as a prop where I would introduce the
// context, that is definitely if I have two or three or whatever
// levels, then it definitely makes sense. !!!



const List = () => {

    const anyName = useContext(PersonContext)

    return (
        <>
            {anyName.people.map((person) => {
                return (
                    <SinglePerson
                        key={person.id}
                        {...person}
                    />
                );
            })}
        </>
    );
};







const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext);

    return (
        <div className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
};

export default ContextAPI;
