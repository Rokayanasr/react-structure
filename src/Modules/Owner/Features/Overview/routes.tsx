import { RouteObject } from "react-router-dom";
import Overview from "./Pages/Overview";

export const overviewRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Overview />,
  },
];

