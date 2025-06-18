import { RouteObject } from "react-router-dom";
import UserProfiles from "./Pages/UserProfiles";

export const profileRoutes: RouteObject[] = [
  {
    path: "profile",
    element: <UserProfiles />,
  },
];

