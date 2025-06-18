import { RouteObject } from "react-router-dom";
import Home from "./Index";
import Blank from "./Pages/Blank";

export const dashboardRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "blank",
    element: <Blank />,
  },
];

