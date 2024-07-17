import DishCounter from "../counter/DishCounter.jsx";
import RestaurantReviewForm from "./RestaurantReviewForm.jsx";

export default function Restaurant({ restaurant }) {
    return (
        <div className='restaurant'>
            <h2>{restaurant.name}</h2>
            <h3>Menu</h3>
            <ul className='restaurant__menu'>
                {restaurant.menu.map((menuItem) => (
                    <li className='restaurant__menu-item' key={menuItem.id}>
                        {menuItem.name}
                        <DishCounter/>
                    </li>
                ))}
            </ul>
            <h3>Reviews</h3>
            <ul className='restaurant__reviews'>
                {restaurant.reviews.map((previewItem) => (
                    <li className='restaurant__reviews-item' key={previewItem.id}>
                        {previewItem.user} - {previewItem.text} (Rating: {previewItem.rating})
                    </li>
                ))}
            </ul>
            <RestaurantReviewForm key={restaurant.id} />
        </div>
    )
}
