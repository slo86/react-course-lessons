import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api'}),
    tagTypes: ["Review"],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => '/restaurants',
        }),
        getDishesByRestaurantId: builder.query({
            query: ({restaurantId}) => `/dishes?restaurantId=${restaurantId}`,
        }),
        getDishById: builder.query({
            query: ({dishId}) => `/dish/${dishId}`,
        }),
        getReviewsByRestaurantId: builder.query({
            query: ({restaurantId}) => {
                return `/reviews?restaurantId=${restaurantId}`
            },
            providesTags: (result, _, { restaurantId }) => [
                { type: "Review", restaurantId },
            ],
        }),
        getUsers: builder.query({
            query: () => `/users`,
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                url: `/review/${restaurantId}`,
                method: "POST",
                body: review,
            }),
            invalidatesTags: (result, _, { restaurantId }) => [
                { type: "Review", restaurantId },
            ],
        }),
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetDishesByRestaurantIdQuery,
    useGetDishByIdQuery,
    useGetReviewsByRestaurantIdQuery,
    useGetUsersQuery,
    useAddReviewMutation,
} = apiSlice;
