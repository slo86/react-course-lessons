import React from "react";
import styles from "./Restaurant.module.css";
import {Review} from "../review/Review.jsx";
import RestaurantReviewForm from "./RestaurantReviewForm.jsx";
import {useParams} from "react-router-dom";
import {useGetReviewsByRestaurantIdQuery,} from "../../redux/services/api.js";

export const RestaurantReviews = () => {
    const {restaurantId} = useParams();
    const {isFetching, isError, data} = useGetReviewsByRestaurantIdQuery({restaurantId});

    if (isFetching) {
        return <div>...loading</div>;
    }


    if (isError) {
        return <div>error</div>;
    }

    if (!data.length) {
        return null;
    }

    return (
        <>
            <ul className={styles.reviews}>
                {data.map(({id, text, rating, userId}) => (
                    <Review
                        id={id}
                        text={text}
                        userId={userId}
                        rating={rating}
                        key={id}
                    />
                ))}
            </ul>
            <RestaurantReviewForm restaurantId={restaurantId} key={restaurantId}/>
        </>
    );
};
