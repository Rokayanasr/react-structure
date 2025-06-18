import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import { SidebarProvider } from "@/context/SidebarContext";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import useSidebar from "@/context/Sidebar";
import { useGetProfileQuery } from "../services/profile/api/ProfileApi";
// ... existing code ...
const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
          const { isLoading } = useGetProfileQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className=" mx-auto w-full md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const WorkerLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <ScrollToTop />
      <LayoutContent />
    </SidebarProvider>
  );
};

export default WorkerLayout;
