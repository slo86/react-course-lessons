import {useParams} from "react-router-dom";
import DishCounter from "../counter/DishCounter.jsx";
import React from "react";
import {useGetDishByIdQuery} from "../../redux/services/api.js";

export const DishPage = () => {
    const {dishId} = useParams();
    const {isLoading, isError, data} = useGetDishByIdQuery({dishId});
    const {name, ingredients, price} = data || {};


    if (isLoading) {
        return <div>...loading</div>;
    }

    if (isError) {
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
