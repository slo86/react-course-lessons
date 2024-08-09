import {useReducer} from "react";

const INITIAL_FORM = {
    userId: '',
    text: '',
    rating: 1
};

function reducer(state, {type, payload}) {
    switch (type) {
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

    const updateText = (text) => {
        dispatch({type: 'setText', payload: text});
    };

    const updateRating = (rating) => {
        dispatch({type: 'setRating', payload: rating});
    };

    const clear = () => {
        dispatch({type: 'clear'});
    };

    return {
        form,
        updateText,
        updateRating,
        clear,
    };
}
