import {
    createBrowserRouter, redirect,
} from "react-router-dom"
import LoginView from "../views/LoginView";
import App from "../App";
import PromoView from "../views/PromoView";
import RideView from "../views/RideView";
import FleetView from "../views/FleetView";
import CheckoutView from "../views/CheckoutView";
import BookingConfirmationView from "../views/BookingConfirmationView";
import WaitingView from "../views/WaitingView";
import SuccessView from "../views/SuccessView";
import UserView from "../views/UserView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: () => !localStorage.access_token ? redirect('/login') : null
    },
    {
        path: "/promo",
        element: <PromoView />
    },
    {
        path: "/ride",
        element: <RideView />
    },
    {
        path: "/fleet",
        element: <FleetView />
    },
    {
        path: "/booking",
        element: <BookingConfirmationView />
    },
    {
        path: "/checkout",
        element: <CheckoutView />
    },
    {
        path: "/waiting-arrive",
        element: <WaitingView />
    },
    {
        path: "/success",
        element: <SuccessView />
    },
    {
        path: "/user",
        element: <UserView />
    },
    {
        path: "/login",
        element: <LoginView />,
        loader: () => localStorage.access_token ? redirect('/') : null
    },
]);

export default router