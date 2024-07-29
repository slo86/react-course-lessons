import {useCounter} from "./hooks.js";
import Counter from "./Counter.jsx";
import {useAuth} from "../../context/AuthContext.jsx";

export default function DishCounter() {
    const {authenticatedUser} = useAuth();
    const {value, increase, decrease} = useCounter();
    return (
        <Counter value={value} readonly={!authenticatedUser} increase={increase} decrease={decrease}/>
    )
}
