import React from "react";
import { FaReact } from "react-icons/fa";
import classNames from "classnames";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }: any) => {
  return (
    <nav className="flex flex-row items-center justify-between px-8 h-16 rounded-b-3xl bg-white">
      <span className="text-5xl text-gray-800 -mb-1">
        <FaReact />
      </span>
      <ul className="flex flex-row self-end h-12">
        {navigationData.map((item: string, index: number) => (
          <li
            className={classNames([
              "w-24 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center",
              currentRoute === item &&
                "border-b-4 border-blue-600",
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
