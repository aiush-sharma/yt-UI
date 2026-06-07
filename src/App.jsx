import React, { useState } from "react";
import Navbar from "./Shared/Navbar";
import Sidebar from "./Shared/Sidebar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";

const App = () => {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => setSidebarHidden((s) => !s);

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} sidebarHidden={sidebarHidden} />
      <Sidebar hidden={sidebarHidden} />

      {/* Dark overlay when sidebar is open */}
      {!sidebarHidden && (
        <div
          className="fixed top-14 left-0 right-0 bottom-0 bg-black z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="*"
          element={
            <h1 className="text-red-600 text-4xl my-30 mx-80 font-extrabold">
              404 - Page Not Found
            </h1>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
