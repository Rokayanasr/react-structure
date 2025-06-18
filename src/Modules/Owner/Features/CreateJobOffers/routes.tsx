import { RouteObject } from "react-router-dom";
import Index from "./Index";

export const createJobOffersRoutes: RouteObject[] = [
    {
        index: true,
        path: "create-job-offer",
        element: <Index />,
    },
];
