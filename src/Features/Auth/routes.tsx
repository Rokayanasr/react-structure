import { RouteObject } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

export const authRoutes: RouteObject[] = [
    {
        path: "signin",
        element: <SignIn />,
    },
    {
        path: "signup",
        element: <SignUp />,
    },
];
