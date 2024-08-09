import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./Restaurant.module.css";
import {MenuItem} from "../menu/MenuItem.jsx";
import {useGetDishesByRestaurantIdQuery} from "../../redux/services/api.js";

export const RestaurantMenu = () => {
    const {restaurantId} = useParams();
    const navigate = useNavigate();
    const {isFetching, isError, data} = useGetDishesByRestaurantIdQuery({restaurantId});

    if (isFetching) {
        return <div>...loading</div>;
    }

    if (isError) {
        return <div>error</div>;
    }

    if (!data.length) {
        return null;
    }

    return (
        <div className={styles.menu}>
            {data.map(({ id, name, price }) => (
                <MenuItem
                    id={id}
                    key={id}
                    name={name}
                    price={price}
                    onClick={() => navigate(`/dish/${id}`)}
                />
            ))}
        </div>
    );
};
