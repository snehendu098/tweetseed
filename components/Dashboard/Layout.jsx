import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full grid lg:grid-cols-5 h-full lg:gap-5">
      <div className="lg:col-span-1 h-full">
        <Sidebar />
      </div>
      <div className="lg:col-span-3">{children}</div>
    </div>
  );
};

export default Layout;
