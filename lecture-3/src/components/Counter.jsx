import {useState} from "react";

export default function Counter() {
    const [value, setValue] = useState(0);

    function increase() {
        if (value < 5) {
            setValue(value + 1)
        }
    }

    function decrease() {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    return (
        <div className='counter'>
            <button className='counter__decrease-btn' onClick={decrease}>-</button>
            <div className='counter__value'>{value}</div>
            <button className='counter__increase-btn' onClick={increase}>+</button>
        </div>
    )
}
