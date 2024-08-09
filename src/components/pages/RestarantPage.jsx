import React from "react";
import {Outlet, useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";
import Tab from "../tabs/Tab.jsx";
import Tabs from "../tabs/Tabs.jsx";
import {useGetRestaurantsQuery} from "../../redux/services/api.js";

export const RestaurantPage = () => {
    const {restaurantId} = useParams();
    const {data, isLoading, isError} = useGetRestaurantsQuery(undefined, {
        selectFromResult: ({data, ...rest}) => ({
            ...rest,
            data: data?.find((restaurant) => restaurant.id === restaurantId),
        }),
    });

    if (isLoading) {
        return <div>...loading</div>;
    }

    if (isError) {
        return <div>error</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <>
            <h2>{data.name}</h2>
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
