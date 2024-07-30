import RestaurantReviewForm from "./RestaurantReviewForm.jsx";
import styles from "./Restaurant.module.css";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/index.js";
import {Review} from "../review/Review.jsx";
import {MenuItem} from "../menu/MenuItem.jsx";

export default function Restaurant({id}) {
    const restaurant = useSelector((state) => selectRestaurantById(state, id)) || {};
    const {
        menu: menuIds,
        reviews: reviewsIds
    } = restaurant;

    return (
        <div className={styles.restaurant}>
            <h2>{restaurant.name}</h2>
            <h3>Menu</h3>
            <ul className={styles.menu}>
                {menuIds.map(id => <MenuItem id={id} key={id}/>)}
            </ul>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {reviewsIds.map(id => <Review id={id} key={id}/>)}
            </ul>
            <RestaurantReviewForm key={restaurant.id}/>
        </div>
    )
}
