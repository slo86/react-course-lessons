import React from "react";
import {RestaurantItem} from "./RestaurantItem.jsx";
import {useNavigate} from "react-router-dom";
import {useGetRestaurantsQuery} from "../../redux/services/api.js";

export const RestaurantsList = ({}) => {
    const navigate = useNavigate();
    const { isLoading, isError, data} = useGetRestaurantsQuery(undefined);

    if (isLoading) {
        return <div>...loading</div>;
    }

    if (isError) {
        return <div>error</div>;
    }

    if (!data.length) {
        return null;
    }

    return (
        <div className="restaurantList">
            {data.map(({ id, name, description }) => (
                <RestaurantItem
                    id={id}
                    key={id}
                    name={name}
                    description={description}
                    onClick={() => navigate(`${id}/menu`)}
                />
            ))}
        </div>
    );
};
