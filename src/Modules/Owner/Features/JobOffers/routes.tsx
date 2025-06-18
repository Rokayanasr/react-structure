import { RouteObject } from "react-router-dom";
import JobOffersLayout from "./index";
import JobOfferDetailsPage from './Pages/JobOfferDetailsPage';
import JobOffersPage from "./Pages/JobOffersPage";

export const jobOffersRoutes: RouteObject[] = [
  {
    path: "job-offers",
    element: <JobOffersLayout />,
    children: [
      {
        index: true,
        element: <JobOffersPage />,
      },
      {
        path: "details",
        element: <JobOfferDetailsPage />
      }
    ]
  }
]; 