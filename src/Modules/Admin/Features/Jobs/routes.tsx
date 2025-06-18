import { RouteObject } from "react-router-dom";
import Home from "./Index";
import JobLocation from "./Pages/JobLocation";
import JobApplicant from "./Pages/JobApplicant";
import JobTypes from "./Pages/JobTypes";
import NewJob from "./Pages/AddJob"

export const dashboardRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "jobLocation",
    element: <JobLocation />
  },
  {
    path:"jobapplicants",
    element: <JobApplicant />
  },
  {
    path:"jobTypes",
    element: <JobTypes />
  },
    {
    path:"NewJob",
    element: <NewJob />
  }
];

