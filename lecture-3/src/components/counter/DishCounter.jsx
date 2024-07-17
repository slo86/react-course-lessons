import { useDishCounter } from "./hooks.js";
import Counter from "./Counter.jsx";

export default function DishCounter () {
    const {value, increase, decrease} = useDishCounter();
    return <Counter value={value} increase={increase} decrease={decrease} />
}
