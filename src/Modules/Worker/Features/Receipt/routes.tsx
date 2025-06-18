import { RouteObject } from "react-router-dom";
import Receipt from "./pages/Receipt";
import Employee from "./pages/Employee";

export const ReceiptRoutes: RouteObject[] = [
  
  {
    path:"/receipts",
    element: <Receipt />,
  },
  {
    path:"/receipts/:id",
    element: <Employee />,
  },
  
];

