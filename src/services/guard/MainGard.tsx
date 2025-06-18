import Cookies from "js-cookie";
import { RouterProvider } from "react-router-dom";
import adminRouter from "@/Modules/Admin/routes";
import ownerRouter from "@/Modules/Owner/routes";
import workerRouter from "@/Modules/Worker/routes";
import authRouter from "../../Modules/Auth/routes";
import { ROLES } from "@/constants/auth.const";

const MainGuard = () => {
    const role = Cookies.get("role");
    const token = Cookies.get("token");
// ... existing code ...
      
    console.log("Current role:", role);
    
    let currentRouter;
    if (!role||!token) {
        console.log("No token or role found, using authRouter");

        currentRouter = authRouter;
    } else {
        const userRole = String(role).trim();
        console.log("Checking role:", userRole);
        
        switch (userRole) {
            case ROLES.ADMIN:
                currentRouter = adminRouter;
                break;
            case ROLES.OWNER:
                currentRouter = ownerRouter;
                break;
            case ROLES.WORKER:
                currentRouter = workerRouter;
                break;
            default:
                currentRouter = authRouter;
        }
    }
    
    return <RouterProvider router={currentRouter} />;
};

export default MainGuard;