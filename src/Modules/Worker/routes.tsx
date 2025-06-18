import { sharedRoutes } from "@/Routes/shared.routes";
import { dashboardRoutes } from "./Features/Dashboard/routes";
import { createBrowserRouter } from "react-router";
import { profileRoutes } from "./Features/Profile/routes";
import { ReceiptRoutes } from "./Features/Receipt/routes";
import { JobsRoutes } from "./Features/JobOffers/routes";
import WorkerLayout from "@/Modules/Worker/layout/WorkerLayout";
import { OperationRoutes } from "./Features/Operation/routes";
import { changePasswordRoutes } from "./Features/ChangePassword/routes";

const router =createBrowserRouter([
    {
        path: '/',
        element: <WorkerLayout/>,
        children: [
           ...dashboardRoutes,
           ...profileRoutes,
           ...sharedRoutes,
           ...ReceiptRoutes,
           ...JobsRoutes,...OperationRoutes,...changePasswordRoutes,
        ]
    }
])
export default router;