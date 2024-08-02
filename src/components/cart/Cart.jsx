import styles from "./Cart.module.css";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/ui/cart/index.js";
import {CartItem} from "./CartItem.jsx";

export const Cart = () => {
    const items = useSelector(selectCartItems) || [];

    return (
        <div className={styles.cart}>
            <h3>Cart ({items.length} items)</h3>
            {items.length ? (
                <ul>
                    {items.map(({itemId, amount,}) => (
                        <CartItem id={itemId} amount={amount} key={itemId}/>
                    ))}
                </ul>
            ) : (
                "Empty cart"
            )}
        </div>
    );
};
