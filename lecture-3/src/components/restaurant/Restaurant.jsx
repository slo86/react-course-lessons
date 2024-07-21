import DishCounter from "../counter/DishCounter.jsx";
import RestaurantReviewForm from "./RestaurantReviewForm.jsx";
import styles from "./Restaurant.module.css";

export default function Restaurant({restaurant}) {
    return (
        <div className={styles.restaurant}>
            <h2>{restaurant.name}</h2>
            <h3>Menu</h3>
            <ul className={styles['restaurant__menu']}>
                {restaurant.menu.map((menuItem) => (
                    <li className={styles['restaurant__menu-item']} key={menuItem.id}>
                        {menuItem.name}
                        <DishCounter/>
                    </li>
                ))}
            </ul>
            <h3>Reviews</h3>
            <ul className={styles['restaurant__reviews']}>
                {restaurant.reviews.map((previewItem) => (
                    <li className={styles['restaurant__reviews-item']} key={previewItem.id}>
                        {previewItem.user} - {previewItem.text} (Rating: {previewItem.rating})
                    </li>
                ))}
            </ul>
            <RestaurantReviewForm key={restaurant.id}/>
        </div>
    )
}
