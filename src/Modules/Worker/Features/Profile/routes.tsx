import { RouteObject } from "react-router-dom";
import Profile from "./Pages/Profile";
import UserProfiles from "./Pages/UserProfiles";
export const profileRoutes: RouteObject[] = [
  {
    path: "profile/edit",
    element: <Profile />,

  },
  {
    path: "profile",
    element: <UserProfiles />,
  }

];

