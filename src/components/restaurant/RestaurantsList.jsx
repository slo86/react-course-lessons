import React from "react";
import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurant/index.js";
import {RestaurantItem} from "./RestaurantItem.jsx";
import {useNavigate} from "react-router-dom";

export const RestaurantsList = ({}) => {
    const restaurantsIds = useSelector(selectRestaurantsIds);
    const navigate = useNavigate();

    return (
        <div className="restaurantList">
            {restaurantsIds.map(id => (
                <RestaurantItem id={id} key={id} onClick={() => navigate(`${id}/menu`)}/>
            ))}
        </div>
    );
};
