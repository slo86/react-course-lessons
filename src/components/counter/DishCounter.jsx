import Counter from "./Counter.jsx";
import {useAuth} from "../../context/AuthContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addCartItem, removeCartItem, selectCartItemAmountById} from "../../redux/ui/cart/index.js";

export default function DishCounter({id}) {
    const {authenticatedUser} = useAuth();
    const dispatch = useDispatch();
    const amount = useSelector((state) => selectCartItemAmountById(state, id));

    const addItem = (e) => {
        e.stopPropagation();
        dispatch(addCartItem(id));
    };

    const removeItem = (e) => {
        e.stopPropagation();
        dispatch(removeCartItem(id));
    };

    return (
        <Counter value={amount} readonly={!authenticatedUser} increase={addItem} decrease={removeItem}/>
    );
}
