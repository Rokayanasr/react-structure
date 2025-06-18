import { RouteObject } from "react-router-dom";
import UserProfiles from "./Pages/UserProfiles";
import EditProfile from "./Pages/EditProfile";

export const profileRoutes: RouteObject[] = [
  {
    path: "edit-profile",
    element: <EditProfile />,
  },
  {
    path: "profile",
    element: <UserProfiles />,
  },
];

