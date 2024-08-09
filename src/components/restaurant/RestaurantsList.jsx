import React from "react";
import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurant/index.js";
import {RestaurantItem} from "./RestaurantItem.jsx";
import {useNavigate} from "react-router-dom";
import {useRequest} from "../../hooks/use-request.js";
import {getRestaurants} from "../../redux/entities/restaurant/get-restaurants.js";
import {STATUS_PENDING, STATUS_REJECTED} from "../../redux/ui/request/constants.js";

export const RestaurantsList = ({}) => {
    const restaurantsIds = useSelector(selectRestaurantsIds);
    const navigate = useNavigate();
    const requestStatus = useRequest(getRestaurants);

    if (requestStatus === STATUS_PENDING) {
        return <div>...loading</div>;
    }

    if (requestStatus === STATUS_REJECTED) {
        return <div>error</div>;
    }

    if (!restaurantsIds.length) {
        return null;
    }

    return (
        <div className="restaurantList">
            {restaurantsIds.map(id => (
                <RestaurantItem id={id} key={id} onClick={() => navigate(`${id}/menu`)}/>
            ))}
        </div>
    );
};
