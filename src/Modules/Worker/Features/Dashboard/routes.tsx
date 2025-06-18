import { RouteObject } from "react-router-dom";
import Home from "./Pages/Home";
import Employee from "./Pages/Employee";

export const dashboardRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path:"/job",
    element: <Employee />,
  },
  
];

