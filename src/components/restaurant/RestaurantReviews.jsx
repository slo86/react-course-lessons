import React, {useState} from "react";
import styles from "./Restaurant.module.css";
import {Review} from "../review/Review.jsx";
import RestaurantReviewForm from "./RestaurantReviewForm.jsx";
import {selectRestaurantById} from "../../redux/entities/restaurant/index.js";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useRequest} from "../../hooks/use-request.js";
import {getReviews} from "../../redux/entities/review/get-reviews.js";
import {getUsers} from "../../redux/entities/user/get-users.js";
import {STATUS_PENDING, STATUS_REJECTED} from "../../redux/ui/request/constants.js";

export const RestaurantReviews = () => {
    const {restaurantId} = useParams();
    const {reviews: reviewsIds} = useSelector(state => selectRestaurantById(state, restaurantId)) || {};
    const usersRequestStatus = useRequest(getUsers);
    const reviewsRequestStatus = useRequest(getReviews, restaurantId);
    console.log('---', usersRequestStatus, reviewsRequestStatus);
    if ([usersRequestStatus, reviewsRequestStatus].includes(STATUS_PENDING)) {
        return <div>...loading</div>;
    }


    if ([usersRequestStatus, reviewsRequestStatus].includes(STATUS_REJECTED)) {
        return <div>error</div>;
    }

    if (!reviewsIds.length) {
        return null;
    }

    return (
        <>
            <ul className={styles.reviews}>
                {reviewsIds.map(id => <Review id={id} key={id}/>)}
            </ul>
            <RestaurantReviewForm key={restaurantId}/>
        </>
    );
};
