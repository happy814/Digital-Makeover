import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Applyout() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-rose-700 to-red-600 pb-10">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Applyout;
