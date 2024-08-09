import React from "react";
import {selectRestaurantById} from "../../redux/entities/restaurant/index.js";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./Restaurant.module.css";
import {MenuItem} from "../menu/MenuItem.jsx";
import {useRequest} from "../../hooks/use-request.js";
import {getDishes} from "../../redux/entities/dish/get-dishes.js";
import {getUsers} from "../../redux/entities/user/get-users.js";
import {STATUS_PENDING, STATUS_REJECTED} from "../../redux/ui/request/constants.js";

export const RestaurantMenu = () => {
    const {restaurantId} = useParams();
    const navigate = useNavigate();
    const {menu: menuIds} = useSelector((state) => selectRestaurantById(state, restaurantId)) || {};
    const requestStatus = useRequest(getDishes, restaurantId);

    if (requestStatus === STATUS_PENDING) {
        return <div>...loading</div>;
    }

    if (requestStatus === STATUS_REJECTED) {
        return <div>error</div>;
    }

    if (!menuIds.length) {
        return null;
    }

    return (
        <div className={styles.menu}>
            {menuIds.map(id => (
                <MenuItem id={id} key={id} onClick={() => navigate(`/dish/${id}`)}/>
            ))}
        </div>
    );
};
