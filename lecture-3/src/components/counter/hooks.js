import {useState} from "react";

export function useCounter({ min = 0, max = 5, initialState = 0 } = {}) {
    const [value, setValue] = useState(initialState);

    function increase() {
        setValue((prevState) => Math.min(max, prevState + 1));
    }

    function decrease() {
        setValue((prevState) => Math.max(min, prevState - 1));
    }

    return {
        value,
        increase,
        decrease
    };
}

export const useDishCounter = () =>  useCounter();