import React from "react";
import styles from "./Restaurant.module.css";

export const RestaurantItem = ({id, name, description, onClick}) => {
    return (
        <div className={styles.restaurantItem} onClick={() => onClick(id)}>
            <h3>{name}</h3>
            {description && (<p>{description}</p>)}
        </div>
    );
};
