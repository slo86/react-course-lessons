import React from "react";
import {selectRestaurantById} from "../../redux/entities/restaurant/index.js";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./Restaurant.module.css";
import {MenuItem} from "../menu/MenuItem.jsx";

export const RestaurantMenu = () => {
    const {restaurantId} = useParams();
    const navigate = useNavigate();
    const {menu: menuIds} = useSelector((state) => selectRestaurantById(state, restaurantId)) || {};

    return (
        <div className={styles.menu}>
            {menuIds.map(id => (
                <MenuItem id={id} key={id} onClick={() => navigate(`/dish/${id}`)}/>
            ))}
        </div>
    );
};
