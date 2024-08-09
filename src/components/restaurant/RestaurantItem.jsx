import React from "react";
import styles from "./Restaurant.module.css";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/index.js";

export const RestaurantItem = ({id, onClick}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id)) || {};

    return (
        <div className={styles.restaurantItem} onClick={() => onClick(id)}>
            <h3>{restaurant.name}</h3>
            <p></p>
        </div>
    );
};
