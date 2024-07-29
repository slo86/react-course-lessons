import styles from "../restaurant/Restaurant.module.css";
import DishCounter from "../counter/DishCounter.jsx";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/index.js";

export const MenuItem = ({id}) => {
    const dish = useSelector(state => selectDishById(state, id));

    return (
        <li className={styles.menuItem} key={id}>
            {dish.name} - {dish.price}$
            <DishCounter/>
        </li>
    );
};
