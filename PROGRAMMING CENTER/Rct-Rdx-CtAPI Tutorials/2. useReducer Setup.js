
import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
// import { reducer } from './reducer';





const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: '',
};

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name };

            // Payload is a non-official, community accepted (de facto) 
            // naming convention for the property that holds the actual data 
            // in a Redux action object

            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setName('');
        } else {
            dispatch({ type: 'NO_VALUE' });
        }
    };
    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    return (
        <div>
            {state.isModalOpen && (
                <Modal closeModal={closeModal} modalContent={state.modalContent} />
            )}
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type='submit'>add </button>
            </form>
            {state.people.map((person) => {
                return (
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        <button
                            onClick={() =>
                                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
                            }
                        >
                            remove
            </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Index;










export const reducer = (state, action) => {

    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added',
        };
    }

    if (action.type === 'NO_VALUE') {
        return { ...state, isModalOpen: true, modalContent: 'please enter value' };
    }

    if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false };
    }

    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload
        );
        return { ...state, people: newPeople };
    }
    throw new Error('no matching action type');
};









import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });
    return (
        <div className='modal'>
            <p>{modalContent}</p>
        </div>
    );
};

export default Modal;
