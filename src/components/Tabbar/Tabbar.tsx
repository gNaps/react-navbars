import React, { useCallback } from "react";
import classNames from "classnames";
import { BsHouseFill, BsHandbagFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }: any) => {
  const getTabicon = useCallback((element) => {
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
    <nav className="flex flex-row items-center justify-around px-8 h-16 bg-white fixed bottom-0 w-full rounded-t-3xl text-2xl">
      {navigationData.map((item: string, index: number) => (
        <span
          key={index}
          className={classNames([
            "flex flex-col text-gray-400 hover:text-gray-700 cursor-pointer w-16 h-full flex items-center justify-center",
            currentRoute === item && "text-blue-600 hover:text-blue-700",
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <span>{getTabicon(item)}</span>
          <span
            className={classNames([
              "text-xs font-medium group-hover:inline",
              currentRoute !== item && "hidden",
            ])}
          >
            {item}
          </span>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;
