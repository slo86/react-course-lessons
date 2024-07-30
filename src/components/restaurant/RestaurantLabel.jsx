import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/index.js";

export const RestaurantLabel = ({id}) => {
    const {name} = useSelector((state) => selectRestaurantById(state, id)) || {};

    if (!name) {
        return null;
    }

    return (
        <span>{name}</span>
    )
}
