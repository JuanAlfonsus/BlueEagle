import {
    createBrowserRouter, redirect,
} from "react-router-dom"
import LoginView from "../views/LoginView";
import App from "../App";
import PromoView from "../views/PromoView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/promo",
        element: <PromoView />
    },
    {
        path: "/login",
        element: <LoginView />,
        loader: () => localStorage.access_token ? redirect('/') : null
    },
]);

export default router