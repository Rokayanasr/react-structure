import { RouteObject } from "react-router-dom";
import JobOffers from "./pages/JobOffers";
import ShowJob from "./pages/ShowJob";  
export const JobsRoutes: RouteObject[] = [
  {
    path:"/offers",
    element: <JobOffers />,
  },

  {
    path: "/offers/:id",
    element: <ShowJob />,
  },
  
  
];

