import { createBrowserRouter, Navigate } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Welcome from "./Pages/Welcome";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPaasword";
import Verification from "./Pages/Verfication";

 const router= createBrowserRouter([
    {
        path: "/owner/signin",
        element: <SignIn />,
    },
    {
        path: "/pharmacist/signin",
        element: <SignIn />,
    },
    {
        path: "/admin/signin",
        element: <SignIn />,
    },
    {
        path: "/welcome",
        element: <Welcome />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },
    {
        path: "/Verify",
        element: <Verification />,
    },
    {
        path: "*",
        element: <Navigate to="/welcome" replace />,
    },

    
])

export default router