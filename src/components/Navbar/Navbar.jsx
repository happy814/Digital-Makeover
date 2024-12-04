import React from "react";
import logo1 from "../../assets/logo1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pt-10">
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="container py-5 flex items-center justify-between md:border-b-2 border-black ">
          {/* Logo section */}
          <div>
            <Link to="/">
              <img src={logo1} alt="" className="w-20  rounded-lg " />
            </Link>
          </div>

          {/* Button section */}
          <div>
            <Link to="/Trust" style={{ textDecoration: "none" }}>
              <button className=" px-4 py-2 rounded-lg hover:hover:bg-sky-400 hover:text-black transform duration-300 font-bold text-yellow-200 border-2 border-black">
                contain
              </button>
            </Link>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Navbar;
