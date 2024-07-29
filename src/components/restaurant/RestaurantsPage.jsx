import Tabs from "../tabs/Tabs.jsx";
import Tab from "../tabs/Tab.jsx";
import Restaurant from "./Restaurant.jsx";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurant/index.js";
import {RestaurantLabel} from "./RestaurantLabel.jsx";

export const RestaurantsPage = ({}) => {
    const restaurantsIds = useSelector(selectRestaurantsIds);
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0])

    if (!restaurantsIds.length) {
        return null;
    }

    return (
        <>
            <Tabs>
                {restaurantsIds.map(id => (
                    <Tab
                        isActive={activeRestaurantId === id}
                        key={id}
                        onTabClick={() => setActiveRestaurantId(id)}
                    >
                        <RestaurantLabel id={id} key={id}/>
                    </Tab>
                ))}
            </Tabs>
            <Restaurant id={activeRestaurantId}/>
        </>
    );
};