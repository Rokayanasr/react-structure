import { RouteObject } from "react-router-dom";
import Index from "./Index";
import CreateBranch from "./Pages/CreateBranch";
import EditBranch from "./Pages/EditBranch";

export const branchesRoutes: RouteObject[] = [
  {
    path: "branches",
    index: true,
    element: <Index />,
  },
  {
    path: "branches/create",
    element: <CreateBranch />,
  },
  {
    path: "branches/edit/:id",
    element: <EditBranch />,
  }
];

