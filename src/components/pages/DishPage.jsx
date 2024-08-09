import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/index.js";
import DishCounter from "../counter/DishCounter.jsx";
import {useRequest} from "../../hooks/use-request.js";
import React from "react";
import {getDish} from "../../redux/entities/dish/get-dish.js";
import {STATUS_PENDING, STATUS_REJECTED} from "../../redux/ui/request/constants.js";

export const DishPage = () => {
    const {dishId} = useParams();
    const {name, ingredients, price} = useSelector(state => selectDishById(state, dishId)) || {};

    const requestStatus = useRequest(getDish, dishId);

    if (requestStatus === STATUS_PENDING) {
        return <div>...loading</div>;
    }

    if (requestStatus === STATUS_REJECTED) {
        return <div>error</div>;
    }

    if (!name) {
        return null;
    }

    return (
        <div>
            <h2>{name} - {price}$</h2>
            <p>{ingredients.join(', ')}</p>
            <DishCounter id={dishId}/>
        </div>
    );
};
