import { RouteObject } from "react-router-dom";
import Users from "./Pages/Users";
import NewUser from "./Pages/NewUser"
import Profile from "./Pages/Profile";


export const UserRoutes: RouteObject[] = [
  {
    path: "Users",
    element: <Users />,
  },
  {
    path:"NewUser",
    element: <NewUser />
  },
  {
    path:"Profile",
    element: <Profile />
  }
];

