import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import { dashboardRoutes } from "../Modules/Owner/Features/Dashboard/routes";
import { profileRoutes } from "../Modules/Owner/Features/Profile/routes";
import NotFound from "../pages/OtherPage/NotFound";
import Videos from "../pages/UiElements/Videos";
import Images from "../pages/UiElements/Images";
import Alerts from "../pages/UiElements/Alerts";
import Badges from "../pages/UiElements/Badges";
import Avatars from "../pages/UiElements/Avatars";
import Buttons from "../pages/UiElements/Buttons";
import LineChart from "../pages/Charts/LineChart";
import BarChart from "../pages/Charts/BarChart";
import Calendar from "../pages/Calendar";
import BasicTables from "../pages/Tables/BasicTables";
import FormElements from "../pages/Forms/FormElements";
import Blank from "../pages/Blank";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      ...dashboardRoutes,
      ...profileRoutes,
      // Others Page
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "blank",
        element: <Blank />,
      },
      // Forms
      {
        path: "form-elements",
        element: <FormElements />,
      },
      // Tables
      {
        path: "basic-tables",
        element: <BasicTables />,
      },
      // Ui Elements
      {
        path: "alerts",
        element: <Alerts />,
      },
      {
        path: "avatars",
        element: <Avatars />,
      },
      {
        path: "badge",
        element: <Badges />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "images",
        element: <Images />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      // Charts
      {
        path: "line-chart",
        element: <LineChart />,
      },
      {
        path: "bar-chart",
        element: <BarChart />,
      },
    ],
  },
  // Fallback Route
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;