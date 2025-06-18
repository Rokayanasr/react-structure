import { createBrowserRouter } from "react-router";
import { dashboardRoutes } from "./Features/Jobs/routes";
import { EmployerRoutes } from "./Features/Employers/routes";
import { sharedRoutes } from "@/Routes/shared.routes";
import AdminLayout from "./layout/AdminLayout";
import {UserRoutes} from "./Features/Users/routes"
import {ServicesRoutes} from "./Features/Services/routes"
import { CandidatesRoutes } from "./Features/Candidates/routes";

const router =createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout/>,
        children: [
           ...dashboardRoutes,
           ...EmployerRoutes,
           ...CandidatesRoutes,
           ...UserRoutes,
           ...ServicesRoutes,
           ...sharedRoutes,
        ]
    }
])
export default router;