import styles from "./Cart.module.css";
import DishCounter from "../counter/DishCounter.jsx";
import {useGetDishByIdQuery} from "../../redux/services/api.js";

export const CartItem = ({id: dishId, amount}) => {
    const {isLoading, data} = useGetDishByIdQuery({dishId});
    const dish = data || {};

    if (isLoading) {
        return <div>...calculating</div>
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemName}>{dish.name}</div>
            <DishCounter id={dishId}/>
            <div className={styles.cartItemPrice}>{dish.price * amount}$</div>
        </div>
    );
};
