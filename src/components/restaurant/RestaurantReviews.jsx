import React, {useState} from "react";
import styles from "./Restaurant.module.css";
import {Review} from "../review/Review.jsx";
import RestaurantReviewForm from "./RestaurantReviewForm.jsx";
import {selectRestaurantById} from "../../redux/entities/restaurant/index.js";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export const RestaurantReviews = () => {
    const {restaurantId} = useParams();
    const {reviews: reviewsIds} = useSelector(state => selectRestaurantById(state, restaurantId)) || {};

    return (
        <>
            <ul className={styles.reviews}>
                {reviewsIds.map(id => <Review id={id} key={id}/>)}
            </ul>
            <RestaurantReviewForm key={restaurantId}/>
        </>
    );
};
