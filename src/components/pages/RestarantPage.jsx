import React from "react";
import {Outlet, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {selectRestaurantById} from "../../redux/entities/restaurant/index.js";
import Tab from "../tabs/Tab.jsx";
import Tabs from "../tabs/Tabs.jsx";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

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
