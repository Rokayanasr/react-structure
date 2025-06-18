import { RouteObject } from "react-router-dom";
import Candidates from "./Pages/Candidates";
import Categories from "./Pages/Categories";
import Invoices from "./Pages/Invoices";


export const CandidatesRoutes: RouteObject[] = [
  {
    path: "Candidates",
    element: <Candidates />,
  },
  {
    path:"Categories",
    element: <Categories />
  },
  {
    path:"Invoices",
    element: <Invoices />
  }
];

