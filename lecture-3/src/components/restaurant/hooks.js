import {useReducer} from "react";

const INITIAL_FORM = {
    name: '',
    text: '',
    rating: 1
};

function reducer(state, {type, payload}) {
    switch (type) {
        case 'setName':
            return {
                ...state,
                name: payload
            };
        case 'setText':
            return {
                ...state,
                text: payload
            };
        case 'setRating':
            return {
                ...state,
                rating: payload
            };
        case 'clear':
            return {
                ...INITIAL_FORM
            };
        default:
            throw new Error(`Unknown type ${type}`);
    }
}

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

    const updateName = (name) => {
        dispatch({type: 'setName', payload: name});
    };

    const updateText = (text) => {
        dispatch({type: 'setText', payload: text});
    };

    const updateRating = (rating) => {
        dispatch({type: 'setRating', payload: rating});
    };

    const clear = () => {
        dispatch({ type: 'clear' });
    };

    return {
        form,
        updateName,
        updateText,
        updateRating,
        clear
    };
}