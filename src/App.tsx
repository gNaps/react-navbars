import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import navigationData from "./data/navigation";
import Navbar from "./components/Navbar/Navbar";
import Tabbar from "./components/Tabbar/Tabbar";
import useNavigation from "./hooks/useNavigation";

function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  const [navigationType, setNavigationType] = useState("SIDE");

  return (
    <div className="bg-gray-200">
      {navigationType === "SIDE" && (
        <Sidebar
          navigationData={navigationData}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
        />
      )}
      {navigationType === "TOP" && (
        <Navbar
          navigationData={navigationData}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
        />
      )}
      {navigationType === "TAB" && (
        <Tabbar
          navigationData={navigationData}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute}
        />
      )}
      <div className="flex flex-col items-center justify-center text-5xl text-gray-300 h-screen">
        <p className="text-xl my-2 text-gray-800">
          You're seeing{" "}
          <span className="font-semibold">
            {navigationType.toLocaleLowerCase()}
          </span>{" "}
          navigation bar
        </p>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-600 hover:bg-purple-700 rounded-lg text-base py-2 px-4 mx-2"
            onClick={() => setNavigationType("TOP")}
          >
            Top
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 rounded-lg text-base py-2 px-4 mx-2"
            onClick={() => setNavigationType("SIDE")}
          >
            Side
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 rounded-lg text-base py-2 px-4 mx-2"
            onClick={() => setNavigationType("TAB")}
          >
            Tab
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
