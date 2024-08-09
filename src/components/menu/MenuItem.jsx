import styles from "../restaurant/Restaurant.module.css";
import DishCounter from "../counter/DishCounter.jsx";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/index.js";

export const MenuItem = ({id, onClick}) => {
    const dish = useSelector(state => selectDishById(state, id)) || {};

    return (
        <div className={styles.menuItem} onClick={onClick}>
            <div>{dish.name} - {dish.price}$</div>
            <DishCounter id={id}/>
        </div>
    );
};
