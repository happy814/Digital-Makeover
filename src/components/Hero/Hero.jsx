import React from "react";
import hero from "../../assets/Hero/hero.png";
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="bg-rose-600 rounded-3xl container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/* Text section */}
        <div className="flex flex-col justify-center xl:pr-40">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                stiffness: 120,
                damping: 10,
              }}
              className=" md:hidden flex  justify-center items-center "
            >
              <img className="  w-36 md:w-80 " src={hero} alt="" />
            </motion.div>
            <motion.h1
              variants={SlideUp(0.2)}
              whileInView={"animate"}
              initial="initial"
              className="text-5xl font-bold font-Tangerine text-yellow-100"
            >
              Welcome to <br /> Digital Makeover
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              whileInView={"animate"}
              initial="initial"
              className="text-lg font-Faculty  text-[#000000] mt-4"
            >
              At Digital Makeover, beauty is more than a craft it's our passion.
              We believe every individual is unique, and our team of skilled
              artists works tirelessly to bring out the best version of you
            </motion.p>
            <motion.div
              variants={SlideUp(0.6)}
              whileInView={"animate"}
              initial="initial"
              className="bg-fuchsia-700 hover:bg-sky-400 hover:text-white text-white px-6 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200 border-2 border-black"
            >
              <Link to="/Trust" style={{ textDecoration: "none" }}>
                <button>See our contain</button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            stiffness: 120,
            damping: 10,
          }}
          className="hidden md:flex justify-center items-center "
        >
          <img className="  w-36 md:w-80 " src={hero} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
