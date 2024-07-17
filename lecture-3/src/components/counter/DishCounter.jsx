import { useCounter } from "./hooks.js";
import Counter from "./Counter.jsx";

export default function DishCounter () {
    const {value, increase, decrease} = useCounter();
    return <Counter value={value} increase={increase} decrease={decrease} />
}
