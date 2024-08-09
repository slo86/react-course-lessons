import styles from "../restaurant/Restaurant.module.css";
import DishCounter from "../counter/DishCounter.jsx";

export const MenuItem = ({id, name, price, onClick}) => {
    return (
        <div className={styles.menuItem} onClick={onClick}>
            <div>{name} - {price}$</div>
            <DishCounter id={id}/>
        </div>
    );
};
