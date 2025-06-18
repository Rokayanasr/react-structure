import { RouteObject } from "react-router-dom";
import Calendar from "@/pages/Calendar";
import Blank from "@/pages/Blank";
import FormElements from "@/pages/Forms/FormElements";
import BasicTables from "@/pages/Tables/BasicTables";
import Alerts from "@/pages/UiElements/Alerts";
import Avatars from "@/pages/UiElements/Avatars";
import Badges from "@/pages/UiElements/Badges";
import Buttons from "@/pages/UiElements/Buttons";
import Images from "@/pages/UiElements/Images";
import Videos from "@/pages/UiElements/Videos";
import LineChart from "@/pages/Charts/LineChart";
import BarChart from "@/pages/Charts/BarChart";
import NotFound from "@/pages/OtherPage/NotFound";
import DeleteProfile from "@/pages/DeleteProfile/DeleteProfile";

export const sharedRoutes: RouteObject[] = [
    {
        path: "delete-profile",
        element: <DeleteProfile />,
    },
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
];

export const notFoundRoute: RouteObject = {
    path: "*",
    element: <NotFound />
}; 