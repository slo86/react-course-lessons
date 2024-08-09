import styles from "./Cart.module.css";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/ui/cart/index.js";
import {selectDishById} from "../../redux/entities/dish/index.js";
import DishCounter from "../counter/DishCounter.jsx";

export const CartItem = ({id, amount}) => {
    const dish = useSelector(state => selectDishById(state, id)) || {};

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemName}>{dish.name}</div>
            <DishCounter id={id}/>
            <div className={styles.cartItemPrice}>{dish.price * amount}$</div>
        </div>
    );
};
