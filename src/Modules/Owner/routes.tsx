import { createBrowserRouter } from "react-router";
// import { dashboardRoutes } from "./Features/Dashboard/routes";
import { profileRoutes } from "./Features/Profile/routes";
import { sharedRoutes } from '../../Routes/shared.routes';
import OwnerLayout from "@/Modules/Owner/layout/OwnerLayout";
import { overviewRoutes } from "./Features/Overview/routes";
import { changePasswordRoutes } from "./Features/ChangePassword/routes";
import { jobOffersRoutes } from "./Features/JobOffers/routes";
import { createJobOffersRoutes } from "./Features/CreateJobOffers/routes";
import { permanentRoutes } from "./Features/Permanent/routes";
import { NonPharmacyRoutes } from "./Features/NonPharmsist/routes";
import { branchesRoutes } from "./Features/Branches/routes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <OwnerLayout/>,
        children: [
            // ...dashboardRoutes,
            ...profileRoutes,
            ...sharedRoutes,
            ...overviewRoutes,
            ...changePasswordRoutes,
            ...jobOffersRoutes,
            ...createJobOffersRoutes,
            ...permanentRoutes,
            ...NonPharmacyRoutes,
            ...branchesRoutes
            
        ]
    }
])
export default router;