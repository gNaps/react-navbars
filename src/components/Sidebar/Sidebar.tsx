import React, { useCallback } from "react";
import { BsHouseFill, BsHandbagFill } from "react-icons/bs";
import { RiDashboardFill, RiSettings4Fill } from "react-icons/ri";
import { FaReact, FaRegBell, FaUserCircle } from "react-icons/fa";
import classNames from "classnames";

const Sidebar = ({ navigationData, currentRoute, setCurrentRoute }: any) => {
  const renderIcon = useCallback((element: string) => {
    switch (element) {
      case "Home":
        return <BsHouseFill />;
      case "Discover":
        return <RiDashboardFill />;
      case "Store":
        return <BsHandbagFill />;
      case "Profile":
        return <FaUserCircle />;
    }
  }, []);

  return (
    <nav className="fixed left-0 top-0 bottom-0 z-50 w-16 bg-white flex flex-col h-screen justify-between items-center py-6 rounded-tr-lg rounded-br-lg">
      <span className="text-4xl text-gray-800">
        <FaReact />
      </span>
      <ul className="flex flex-col items-center w-full">
        {navigationData.map((element: string, index: number) => (
          <li
            key={index}
            className={classNames([
              "flex flex-col items-center text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer",
              currentRoute === element && "text-blue-600 hover:text-blue-700",
              "group",
            ])}
            onClick={() => setCurrentRoute(element)}
          >
            {renderIcon(element)}
            <span
              className={classNames([
                "text-xs font-medium group-hover:inline",
                currentRoute !== element && "hidden",
              ])}
            >
              {element}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-between items-center">
        <div className="w-10 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center text-gray-800 text-lg relative mb-4">
          <span className="h-5 w-5 flex justify-center items-center text-white absolute -top-1 -right-1 bg-red-500 text-xs rounded-full">
            24
          </span>
          <FaRegBell />
        </div>
        <span className="text-3xl text-gray-400 hover:text-gray-800 cursor-pointer">
          <RiSettings4Fill />
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;
