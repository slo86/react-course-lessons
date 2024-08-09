import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/index.js";
import DishCounter from "../counter/DishCounter.jsx";

export const DishPage = () => {
    const {dishId} = useParams();
    const {name, ingredients, price} = useSelector(state => selectDishById(state, dishId)) || {};

    return (
        <div>
            <h2>{name} - {price}$</h2>
            <p>{ingredients.join(', ')}</p>
            <DishCounter id={dishId}/>
        </div>
    );
};
