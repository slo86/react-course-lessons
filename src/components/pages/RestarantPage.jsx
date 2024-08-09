import React from "react";
import {Outlet, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {selectRestaurantById, selectRestaurantsIds} from "../../redux/entities/restaurant/index.js";
import Tab from "../tabs/Tab.jsx";
import Tabs from "../tabs/Tabs.jsx";
import {useRequest} from "../../hooks/use-request.js";
import {getRestaurant} from "../../redux/entities/restaurant/get-restaurant.js";
import {STATUS_PENDING, STATUS_REJECTED} from "../../redux/ui/request/constants.js";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const requestStatus = useRequest(getRestaurant, restaurantId);

    if (requestStatus === STATUS_PENDING) {
        return <div>...loading</div>;
    }

    if (requestStatus === STATUS_REJECTED) {
        return <div>error</div>;
    }

    if (!restaurant) {
        return null;
    }

    return (
       <>
           <h2>{restaurant.name}</h2>
           <Tabs>
               <NavLink to={'menu'} replace>
                   {({isActive}) => (
                       <Tab isActive={isActive}>Menu</Tab>
                   )}
               </NavLink>
               <NavLink to={'reviews'} replace>
                   {({isActive}) => (
                       <Tab isActive={isActive}>Reviews</Tab>
                   )}
               </NavLink>
           </Tabs>
           <Outlet/>
       </>
    );
};
