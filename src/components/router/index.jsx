import {createBrowserRouter, RouterProvider as ReactRouterProvider} from "react-router-dom";
import {HomePage} from "../pages/HomePage.jsx";
import {RestaurantsPage} from "../pages/RestarantsPage.jsx";
import Layout from "../layout/Layout.jsx";
import {RestaurantPage} from "../pages/RestarantPage.jsx";
import {RestaurantMenu} from "../restaurant/RestaurantMenu.jsx";
import {RestaurantReviews} from "../restaurant/RestaurantReviews.jsx";
import {DishPage} from "../pages/DishPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/dish/:dishId',
                element: <DishPage/>,
            },
            {
                path: '/restaurants',
                element: <RestaurantsPage/>,
            },
            {
                path: '/restaurants/:restaurantId',
                element: <RestaurantPage/>,
                children: [
                    {
                        path: 'menu',
                        element: <RestaurantMenu/>,
                    },
                    {
                        path: 'reviews',
                        element: <RestaurantReviews/>,
                    }
                ]
            },
        ],
        errorElement: <div>Not Found</div>
    },
]);

export const RouterProvider = () => {
    return <ReactRouterProvider router={router} />
}
