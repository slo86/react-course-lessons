import styles from "../restaurant/Restaurant.module.css";
import {selectReviewById} from "../../redux/entities/review/index.js";
import {useSelector} from "react-redux";
import {User} from "../user/User.jsx";

export const Review = ({id}) => {
    const {text, rating, userId} = useSelector((state) => selectReviewById(state, id)) || {};

    if (!text) {
        return null;
    }

    return (
        <li className={styles.review} key={id}>
            {userId && (
                <span>
                    <User id={userId}/> - {" "}
                </span>
            )}
            {text} (Rating: {rating})
        </li>
    );
};
