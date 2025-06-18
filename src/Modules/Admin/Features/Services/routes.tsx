import { RouteObject } from "react-router-dom";
import Boten from "./Pages/Boten";
import Reinigung from "./Pages/Reinigung";

export const ServicesRoutes: RouteObject[] = [
  {
    path: "Boten-services",
    element: <Boten />,
  },
  {
    path:"Reinigung-services",
    element: <Reinigung />
  },

];

