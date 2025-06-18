import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    ChevronDownIcon,
    GroupIcon,
    BagIcon,
    UserIcon,
    DocsIcon,
    // LogOutIcon
} from "@/assets/icons";
import useSidebar from "@/context/Sidebar";

type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
    {
        icon: <BagIcon />,
        name: "Jobs",
        subItems: [
            { name: "All jobs", path: "/", pro: false },
            { name: "Add new job", path: "/NewJob", pro: false },
            { name: "Types", path: "/jobTypes", pro: false },
            { name: "Locations", path: "/jobLocation", pro: false },
            { name: "Applicants", path: "/jobapplicants", pro: false },

        ],
    },

    {
        name: "Employers",
        icon: <GroupIcon />,
        subItems: [
            { name: "All Employers", path: "/employers", pro: false },
            { name: "Permanent position", path: "/Permanent-position", pro: false },
            { name: "NPM", path: "/NPM", pro: false }
        ],
    },
    {
        name: "Candidates",
        icon: <GroupIcon />,
        subItems: [
            { name: "All candidates", path: "/Candidates", pro: false },
            { name: "Categories", path: "/Categories", pro: false },
            { name: "Invoices", path: "/Invoices", pro: false }
        ],
    },
    {
        name: "Users",
        icon: <UserIcon />,
        subItems: [
            { name: "All users", path: "/Users", pro: false },
            { name: "Add new user", path: "/NewUser", pro: false },
            { name: "Profile", path: "/Profile", pro: false }
        ],
    },
        {
        name: "Services",
        icon: <DocsIcon />,
        subItems: [
            { name: "Boten services", path: "/Boten-services", pro: false },
            { name: "Reinigung services", path: "/Reinigung-services", pro: false }
        ],
    },
    // {       
    //     icon: <LogOutIcon />,
    //     name: "Ausloggen",
    //     path: "/logout",  
    // },


];

// const othersItems: NavItem[] = [
//     {
//         icon: <PieChartIcon />,
//         name: "Charts",
//         subItems: [
//             { name: "Line Chart", path: "/line-chart", pro: false },
//             { name: "Bar Chart", path: "/bar-chart", pro: false },
//         ],
//     },
//     {
//         icon: <BoxCubeIcon />,
//         name: "UI Elements",
//         subItems: [
//             { name: "Alerts", path: "/alerts", pro: false },
//             { name: "Avatar", path: "/avatars", pro: false },
//             { name: "Badge", path: "/badge", pro: false },
//             { name: "Buttons", path: "/buttons", pro: false },
//             { name: "Images", path: "/images", pro: false },
//             { name: "Videos", path: "/videos", pro: false },
//         ],
//     },
//     {
//         icon: <PlugInIcon />,
//         name: "Authentication",
//         subItems: [
//             { name: "Sign In", path: "/signin", pro: false },
//             { name: "Sign Up", path: "/signup", pro: false },
//         ],
//     },
// ];

const AppSidebar: React.FC = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const location = useLocation();

    const [openSubmenu, setOpenSubmenu] = useState<{
        type: "main" | "others";
        index: number;
    } | null>(null);
    const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // const isActive = (path: string) => location.pathname === path;
    const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

    useEffect(() => {
        let submenuMatched = false;
["main"].forEach((menuType) => {
    const items = navItems;

            items.forEach((nav, index) => {
                if (nav.subItems) {
                    nav.subItems.forEach((subItem) => {
                        if (isActive(subItem.path)) {
                            setOpenSubmenu({
                                type: menuType as "main" | "others",
                                index,
                            });
                            submenuMatched = true;
                        }
                    });
                }
            });
        });

        if (!submenuMatched) {
            setOpenSubmenu(null);
        }
    }, [location, isActive]);

    useEffect(() => {
        if (openSubmenu !== null) {
            const key = `${openSubmenu.type}-${openSubmenu.index}`;
            if (subMenuRefs.current[key]) {
                setSubMenuHeight((prevHeights) => ({
                    ...prevHeights,
                    [key]: subMenuRefs.current[key]?.scrollHeight || 0,
                }));
            }
        }
    }, [openSubmenu]);

    const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
        setOpenSubmenu((prevOpenSubmenu) => {
            if (prevOpenSubmenu && prevOpenSubmenu.type === menuType && prevOpenSubmenu.index === index) {
                return null;
            }
            return { type: menuType, index };
        });
    };

    const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
        <ul className='flex flex-col gap-4'>
            {items.map((nav, index) => (
                <li key={nav.name}>
                    {nav.subItems ? (
                        <button
                            onClick={() => handleSubmenuToggle(index, menuType)}
                            className={`menu-item group ${
                                openSubmenu?.type === menuType && openSubmenu?.index === index ? "menu-item-active" : "menu-item-inactive"
                            } cursor-pointer ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}>
                            <span
                                className={`menu-item-icon-size  ${
                                    openSubmenu?.type === menuType && openSubmenu?.index === index ? "menu-item-icon-active" : "menu-item-icon-inactive"
                                }`}>
                                {nav.icon}
                            </span>
                            {(isExpanded || isHovered || isMobileOpen) && <span className='menu-item-text'>{nav.name}</span>}
                            {(isExpanded || isHovered || isMobileOpen) && (
                                <ChevronDownIcon
                                    className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                                        openSubmenu?.type === menuType && openSubmenu?.index === index ? "rotate-180 text-brand-500" : ""
                                    }`}
                                />
                            )}
                        </button>
                    ) : (
                        nav.path && (
                            <Link to={nav.path} className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}>
                                <span className={`menu-item-icon-size ${isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>
                                    {nav.icon}
                                </span>
                                {(isExpanded || isHovered || isMobileOpen) && <span className='menu-item-text'>{nav.name}</span>}
                            </Link>
                        )
                    )}
                    {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
                        <div
                            ref={(el) => {
                                subMenuRefs.current[`${menuType}-${index}`] = el;
                            }}
                            className='overflow-hidden transition-all duration-300'
                            style={{
                                height: openSubmenu?.type === menuType && openSubmenu?.index === index ? `${subMenuHeight[`${menuType}-${index}`]}px` : "0px",
                            }}>
                            <ul className='mt-2 space-y-1 ml-9'>
                                {nav.subItems.map((subItem) => (
                                    <li key={subItem.name}>
                                        <Link
                                            to={subItem.path}
                                            className={`menu-dropdown-item ${
                                                isActive(subItem.path) ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"
                                            }`}>
                                            {subItem.name}
                                            <span className='flex items-center gap-1 ml-auto'>
                                                {subItem.new && (
                                                    <span
                                                        className={`ml-auto ${
                                                            isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"
                                                        } menu-dropdown-badge`}>
                                                        new
                                                    </span>
                                                )}
                                                {subItem.pro && (
                                                    <span
                                                        className={`ml-auto ${
                                                            isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"
                                                        } menu-dropdown-badge`}>
                                                        pro
                                                    </span>
                                                )}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <aside
            className={`sidebar-layout
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className={`py-4 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
                <Link to='/'>
                    {isExpanded || isHovered || isMobileOpen ? (
                        <>
                            <img className='dark:hidden' src='/images/logo/favicon.png' alt='Logo' width={60} height={40} />
                            <img className='hidden dark:block' src='/images/logo/favicon.png' alt='Logo' width={60} height={40} />
                        </>
                    ) : (
                        <img src='/images/logo/favicon.png' alt='Logo' width={32} height={32} />
                    )}
                </Link>
            </div>
            <div className='flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar'>
                <nav className='mb-6'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            {/* <h2
                                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                                    !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
                                }`}>
                                {isExpanded || isHovered || isMobileOpen ? "Menu" : <HorizontaLDots className='size-6' />}
                            </h2> */}
                            {renderMenuItems(navItems, "main")}
                        </div>
                        {/* <div className=''>
                            <h2
                                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                                    !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
                                }`}>
                                {isExpanded || isHovered || isMobileOpen ? "Others" : <HorizontaLDots />}
                            </h2> */}
                            {/* {renderMenuItems(othersItems, "others")} */}
                        {/* </div> */}
                    </div>
                </nav>
                {/* {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null} */}
            </div>
        </aside>
    );
};

export default AppSidebar;
// import { useCallback, useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import SignoutModal from "@/components/common/SignOutModal/SignOut";

// import {
//   ChevronDownIcon,
//   GroupIcon,
//   BagIcon,
//   UserIcon,
//   DocsIcon,
//   LogOutIcon,
// } from "@/assets/icons";
// import useSidebar from "@/context/Sidebar";

// type NavItem = {
//   name: string;
//   icon: React.ReactNode;
//   path?: string;
//   subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
// };

// const navItems: NavItem[] = [
//   {
//     icon: <BagIcon />,
//     name: "Jobs",
//     subItems: [
//       { name: "All jobs", path: "/", pro: false },
//       { name: "Add new job", path: "/NewJob", pro: false },
//       { name: "Types", path: "/jobTypes", pro: false },
//       { name: "Locations", path: "/jobLocation", pro: false },
//       { name: "Applicants", path: "/jobapplicants", pro: false },
//     ],
//   },
//   {
//     name: "Employers",
//     icon: <GroupIcon />,
//     subItems: [
//       { name: "All Employers", path: "/employers", pro: false },
//       { name: "Permanent position", path: "/Permanent-position", pro: false },
//       { name: "NPM", path: "/NPM", pro: false },
//     ],
//   },
//   {
//     name: "Candidates",
//     icon: <GroupIcon />,
//     subItems: [
//       { name: "All candidates", path: "/Candidates", pro: false },
//       { name: "Categories", path: "/Categories", pro: false },
//       { name: "Invoices", path: "/Invoices", pro: false },
//     ],
//   },
//   {
//     name: "Users",
//     icon: <UserIcon />,
//     subItems: [
//       { name: "All users", path: "/Users", pro: false },
//       { name: "Add new user", path: "/NewUser", pro: false },
//       { name: "Profile", path: "/Profile", pro: false },
//     ],
//   },
//   {
//     name: "Services",
//     icon: <DocsIcon />,
//     subItems: [
//       { name: "Boten services", path: "/Boten-services", pro: false },
//       { name: "Reinigung services", path: "/Reinigung-services", pro: false },
//     ],
//   },
//   {
//     icon: <LogOutIcon />,
//     name: "Ausloggen",
//     path: "/logout",
//   },
// ];

// const AppSidebar: React.FC = () => {
//   const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
//   const location = useLocation();

//   const [openSubmenu, setOpenSubmenu] = useState<{
//     type: "main" | "others";
//     index: number;
//   } | null>(null);
//   const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
//     {}
//   );
//   const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

//   // حالة المودال لزر تسجيل الخروج
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

// //   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleConfirmLogout = () => {
//     setIsLoading(true);
//     // هنا تحط عملية تسجيل الخروج مثلاً:
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsModalOpen(false);
//       // نفذ هنا أي شيء بعد تسجيل الخروج مثل إعادة توجيه الصفحة
//       console.log("Logged out");
//     }, 2000);
//   };

//   const isActive = useCallback(
//     (path: string) => location.pathname === path,
//     [location.pathname]
//   );

//   useEffect(() => {
//     let submenuMatched = false;
//     ["main"].forEach((menuType) => {
//       navItems.forEach((nav, index) => {
//         if (nav.subItems) {
//           nav.subItems.forEach((subItem) => {
//             if (isActive(subItem.path)) {
//               setOpenSubmenu({
//                 type: menuType as "main" | "others",
//                 index,
//               });
//               submenuMatched = true;
//             }
//           });
//         }
//       });
//     });

//     if (!submenuMatched) {
//       setOpenSubmenu(null);
//     }
//   }, [location, isActive]);

//   useEffect(() => {
//     if (openSubmenu !== null) {
//       const key = `${openSubmenu.type}-${openSubmenu.index}`;
//       if (subMenuRefs.current[key]) {
//         setSubMenuHeight((prevHeights) => ({
//           ...prevHeights,
//           [key]: subMenuRefs.current[key]?.scrollHeight || 0,
//         }));
//       }
//     }
//   }, [openSubmenu]);

//   const handleSubmenuToggle = (
//     index: number,
//     menuType: "main" | "others"
//   ) => {
//     setOpenSubmenu((prevOpenSubmenu) => {
//       if (
//         prevOpenSubmenu &&
//         prevOpenSubmenu.type === menuType &&
//         prevOpenSubmenu.index === index
//       ) {
//         return null;
//       }
//       return { type: menuType, index };
//     });
//   };

//   const handleLogoutClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setIsModalOpen(true);
//   };



//   const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
//     <ul className="flex flex-col gap-4">
//       {items.map((nav, index) => (
//         <li key={nav.name}>
//           {nav.subItems ? (
//             <button
//               onClick={() => handleSubmenuToggle(index, menuType)}
//               className={`menu-item group ${
//                 openSubmenu?.type === menuType &&
//                 openSubmenu?.index === index
//                   ? "menu-item-active"
//                   : "menu-item-inactive"
//               } cursor-pointer ${
//                 !isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "lg:justify-start"
//               }`}
//             >
//               <span
//                 className={`menu-item-icon-size  ${
//                   openSubmenu?.type === menuType &&
//                   openSubmenu?.index === index
//                     ? "menu-item-icon-active"
//                     : "menu-item-icon-inactive"
//                 }`}
//               >
//                 {nav.icon}
//               </span>
//               {(isExpanded || isHovered || isMobileOpen) && (
//                 <span className="menu-item-text">{nav.name}</span>
//               )}
//               {(isExpanded || isHovered || isMobileOpen) && (
//                 <ChevronDownIcon
//                   className={`ml-auto w-5 h-5 transition-transform duration-200 ${
//                     openSubmenu?.type === menuType &&
//                     openSubmenu?.index === index
//                       ? "rotate-180 text-brand-500"
//                       : ""
//                   }`}
//                 />
//               )}
//             </button>
//           ) : nav.name === "Ausloggen" ? (
//             <a
//               href={nav.path}
//               onClick={handleLogoutClick}
//               className={`menu-item group cursor-pointer`}
//             >
//               <span className="menu-item-icon-size menu-item-icon-inactive">
//                 {nav.icon}
//               </span>
//               {(isExpanded || isHovered || isMobileOpen) && (
//                 <span className="menu-item-text">{nav.name}</span>
//               )}
//             </a>
//           ) : (
//             nav.path && (
//               <Link
//                 to={nav.path}
//                 className={`menu-item group ${
//                   isActive(nav.path)
//                     ? "menu-item-active"
//                     : "menu-item-inactive"
//                 }`}
//               >
//                 <span
//                   className={`menu-item-icon-size ${
//                     isActive(nav.path)
//                       ? "menu-item-icon-active"
//                       : "menu-item-icon-inactive"
//                   }`}
//                 >
//                   {nav.icon}
//                 </span>
//                 {(isExpanded || isHovered || isMobileOpen) && (
//                   <span className="menu-item-text">{nav.name}</span>
//                 )}
//               </Link>
//             )
//           )}

//           {nav.subItems &&
//             (isExpanded || isHovered || isMobileOpen) && (
//               <div
//                 ref={(el) => {
//                   subMenuRefs.current[`${menuType}-${index}`] = el;
//                 }}
//                 className="overflow-hidden transition-all duration-300"
//                 style={{
//                   height:
//                     openSubmenu?.type === menuType &&
//                     openSubmenu?.index === index
//                       ? `${subMenuHeight[`${menuType}-${index}`]}px`
//                       : "0px",
//                 }}
//               >
//                 <ul className="mt-2 space-y-1 ml-9">
//                   {nav.subItems.map((subItem) => (
//                     <li key={subItem.name}>
//                       <Link
//                         to={subItem.path}
//                         className={`menu-dropdown-item ${
//                           isActive(subItem.path)
//                             ? "menu-dropdown-item-active"
//                             : "menu-dropdown-item-inactive"
//                         }`}
//                       >
//                         {subItem.name}
//                         <span className="flex items-center gap-1 ml-auto">
//                           {subItem.new && (
//                             <span
//                               className={`ml-auto ${
//                                 isActive(subItem.path)
//                                   ? "menu-dropdown-badge-active"
//                                   : "menu-dropdown-badge-inactive"
//                               } menu-dropdown-badge`}
//                             >
//                               new
//                             </span>
//                           )}
//                           {subItem.pro && (
//                             <span
//                               className={`ml-auto ${
//                                 isActive(subItem.path)
//                                   ? "menu-dropdown-badge-active"
//                                   : "menu-dropdown-badge-inactive"
//                               } menu-dropdown-badge`}
//                             >
//                               pro
//                             </span>
//                           )}
//                         </span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <>
//       <aside
//         className={`sidebar-layout
//             ${
//               isExpanded || isMobileOpen
//                 ? "w-[290px]"
//                 : isHovered
//                 ? "w-[290px]"
//                 : "w-[90px]"
//             }
//             ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
//             lg:translate-x-0`}
//         onMouseEnter={() => !isExpanded && setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div
//           className={`py-4 flex ${
//             !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
//           }`}
//         >
//           <Link to="/">
//             {isExpanded || isHovered || isMobileOpen ? (
//               <>
//                 <img
//                   className="dark:hidden"
//                   src="/images/logo/favicon.png"
//                   alt="Logo"
//                   width={60}
//                   height={40}
//                 />
//                 <img
//                   className="hidden dark:block"
//                   src="/images/logo/favicon.png"
//                   alt="Logo Dark"
//                   width={60}
//                   height={40}
//                 />
//               </>
//             ) : (
//               <>
//                 <img
//                   className="mx-auto"
//                   src="/images/logo/favicon.png"
//                   alt="Logo"
//                   width={40}
//                   height={40}
//                 />
//               </>
//             )}
//           </Link>
//         </div>

//         <nav className="flex-1 px-2">{renderMenuItems(navItems, "main")}</nav>
//       </aside>

//       {/* مودال تأكيد تسجيل الخروج */}
//       <SignoutModal 
//         isOpen={isModalOpen} 
//         onCancel={handleCloseModal} 
//         onConfirm={handleConfirmLogout}
//         isLoading={isLoading}
//       />
//     </>
//   );
// };

// export default AppSidebar;
