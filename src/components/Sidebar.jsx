import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const Sidebar = () => {
  const { activeMenu, disableACtiveMenu, toggleActiveMenu, screenSize, currentColor } =
    useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      disableACtiveMenu();
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-white "
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-light-gray dark:hover:bg-half-transparent m-2";
  return (
    <div className="ml-3 h-screen pb-10 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center p-4 sticky top-0 left-0 bg-white dark:bg-secondary-dark-bg">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" postition="BottomCenter">
              <button
                type="button"
                onClick={toggleActiveMenu}
                className="text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-half-transparent block xl:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
