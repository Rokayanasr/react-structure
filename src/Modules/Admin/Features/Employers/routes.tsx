import { RouteObject } from "react-router-dom";
import Employe from "./Pages/Employe";
import Permanentposition from "./Pages/Permanent-position";
import NPM from "./Pages/NPM";

export const EmployerRoutes: RouteObject[] = [
  {
    path: "employers",
    element: <Employe />,
  },
  {
    path:"Permanent-position",
    element: <Permanentposition />
  },
  {
    path:"NPM",
    element: <NPM />
  }
];

