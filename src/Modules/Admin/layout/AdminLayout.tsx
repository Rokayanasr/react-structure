// import { Outlet } from "react-router-dom";
// import AppHeader from "./AppHeader";
// import Backdrop from "./Backdrop";
// import AppSidebar from "./AppSidebar";
// import { SidebarProvider } from "@/context/SidebarContext";
// import { ScrollToTop } from "@/components/common/ScrollToTop";
// import useSidebar from "@/context/Sidebar";

// const LayoutContent: React.FC = () => {
//   const { isExpanded, isHovered, isMobileOpen } = useSidebar();

//   return (
//     <div className="min-h-screen xl:flex">
//       <div>
//         <AppSidebar />
//         <Backdrop />
//       </div>
//       <div
//         className={`flex-1 transition-all duration-300 ease-in-out ${isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
//           } ${isMobileOpen ? "ml-0" : ""}`}
//       >
//         <AppHeader />
//         <div className="p-4 mx-auto md:p-6"
//           style={{
//             maxWidth: `calc(100vw - ${isExpanded || isHovered ? "290px" : "90px"})`,
//           }}
//         >
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// const AdminLayout: React.FC = () => {
//   return (
//     <SidebarProvider>
//       <ScrollToTop />
//       <LayoutContent />
//     </SidebarProvider>
//   );
// };

// export default AdminLayout;

import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import { SidebarProvider } from "@/context/SidebarContext";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import useSidebar from "@/context/Sidebar";
import { useState, useEffect } from "react";

// Hook لحساب عرض الشاشة
const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const windowWidth = useWindowWidth();

  // نطبق خصم sidebar فقط لو العرض أكبر من 1024px
  const shouldApplySidebarWidth = windowWidth > 1024;

  const maxWidth = shouldApplySidebarWidth
    ? `calc(100vw - ${isExpanded || isHovered ? "290px" : "90px"})`
    : "90%";

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          shouldApplySidebarWidth
            ? isExpanded || isHovered
              ? "lg:ml-[290px]"
              : "lg:ml-[90px]"
            : ""
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="p-4 mx-auto md:p-6" style={{ maxWidth }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AdminLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <ScrollToTop />
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AdminLayout;
