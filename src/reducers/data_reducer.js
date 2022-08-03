

const data_reducer = (state, action) => {

    if (action.type === 'GET_DATA') {
        return { ...state, items: [...action.payload] }
    }

}

export default data_reducer