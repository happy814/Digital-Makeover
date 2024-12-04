import React from "react";
import Logo1 from "../../assets/logo1.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="container bg-[#eb5e28] rounded-3xl">
        <div className=" py-10 flex flex-row md:items-center justify-between gap-10 ">
          {/* brand info */}
          <div className="space-y-4">
            <img src={Logo1} alt="" className="w-20" />
          </div>

          {/* social icons */}
          <div className="flex space-x-6 text-3xl pt-5">
            <FaFacebook className="hover:text-yellow-50 duration-200" />
            <FaInstagram className="hover:text-yellow-50 duration-200" />
            <FaLinkedin className="hover:text-yellow-50 duration-200" />
          </div>
        </div>
        {/* Contact Information Section */}
        <div className=" text-white py-9 flex flex-col justify-center items-center md:justify-start md:items-start ">
          <div>
            <h2 className="text-2xl text-black pr-6 md:pr-0 font-bold font-Faculty mb-6">
              Contact Information
            </h2>
          </div>

          <div className="space-y-4 ">
            <div className="flex items-center space-x-4 font-bold hover:text-black">
              <Phone className="h-6 w-6 " />
              <span className="text-lg font-bold ">+91 91344 36056</span>
            </div>

            <div className="flex items-center space-x-4 font-bold hover:text-black">
              <Mail className="h-6 w-6" />
              <span className="text-lg">podders287@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4 font-bold hover:text-black">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">kolkata, India</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
