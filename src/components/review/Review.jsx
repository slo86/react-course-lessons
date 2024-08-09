import styles from "../restaurant/Restaurant.module.css";
import {User} from "../user/User.jsx";

export const Review = ({id, text, rating, userId}) => {
    if (!text) {
        return null;
    }

    return (
        <div className={styles.review} key={id}>
            {userId && (
                <span>
                    <User id={userId}/> - {text}
                </span>
            )}
            (Rating: {rating})
        </div>
    );
};
