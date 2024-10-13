// src/components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <main className="p-2">
        <div className="container mx-auto lg:px-40">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
