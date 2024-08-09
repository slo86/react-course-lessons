import ReviewCounter from "../counter/ReviewCounter.jsx";
import {useForm} from "./hooks.js";
import styles from './Restaurant.module.css';
import {useAuth} from "../../context/AuthContext.jsx";
import {useAddReviewMutation} from "../../redux/services/api.js";

export default function RestaurantReviewForm({restaurantId}) {
    const {form, updateText, updateRating} = useForm();
    const {authenticatedUser} = useAuth();
    const [addReview, {isLoading}] = useAddReviewMutation();

    const {text, rating} = form;

    function handleSubmitForm(e) {
        e.preventDefault();

        if (authenticatedUser) {
            addReview({
                restaurantId,
                review: {
                    ...form,
                    userId: authenticatedUser.id
                },
            });
        }
    }

    if (!authenticatedUser) {
        return null;
    }

    return (
        <form className={styles.restaurantReviewForm} onSubmit={handleSubmitForm}>
            <div>
                <div>Text</div>
                <textarea className={styles.restaurantFormText} value={text} onChange={e => updateText(e.target.value)}/>
            </div>
            <div>
                <div>Rating</div>
                <ReviewCounter value={rating} min={1} onChange={value => updateRating(value)}/>
            </div>
            <div>
                <button className={styles.restaurantSubmitButton} disabled={!text || isLoading} type={"submit"}>Submit</button>
            </div>
        </form>
    )
}
