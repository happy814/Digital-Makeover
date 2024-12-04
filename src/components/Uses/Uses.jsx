import React from "react";
import Img1 from "../../assets/uses/p1.jpg";
import Img2 from "../../assets/uses/p2.jpg";
import Img3 from "../../assets/uses/p3.jpg";
import Img4 from "../../assets/uses/p4.jpg";
import Img5 from "../../assets/uses/p5.jpeg";
import Img6 from "../../assets/uses/p6.jpeg";
import Img7 from "../../assets/uses/p7.jpeg";
import Img8 from "../../assets/uses/p8.jpeg";
import Img9 from "../../assets/uses/p9.jpeg";
import Img10 from "../../assets/uses/p10.jpeg";
import Img11 from "../../assets/uses/p11.jpeg";
import Img12 from "../../assets/uses/p12.jpeg";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container my-14 bg-pink-700 rounded-2xl">
        <div className="py-5  flex flex-col ">
          <motion.div
            variants={SlideRight(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="
           flex flex-col xl:pr-14 py-10 justify-center items-center  "
          >
            <h1 className="md:text-8xl text-5xl font-bold font-Tangerine text-yellow-200 border-2 px-20 py-2 border-black">
              Our Work
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
            <motion.div
              variants={SlideLeft(0.4)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img1}
                alt=""
                className="md:w-52 w-full rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center mt-4 font-bold ">
                Wedding Girl
              </p>
            </motion.div>
            <motion.div
              variants={SlideLeft(0.6)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img2}
                alt=""
                className="md:w-52 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 mt-4 text-center font-bold ">
                Wedding Girl
              </p>
            </motion.div>
            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img3}
                alt=""
                className="md:w-56 w-full  rounded-3xl object-cover border-2  border-black"
              />
              <p className="text-yellow-400 text-center mt-4 font-bold ">
                Wedding Girl
              </p>
            </motion.div>
            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img4}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                Wedding Girl
              </p>
            </motion.div>
            {/* 2nd */}

            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img5}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                almond-shaped nail with a rainbow French tip || Priya's Makeover
              </p>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img6}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                Abstract Nails, Color Blocking, Negative || Priya's Makeover
              </p>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img7}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                ombre nails or gradient nails || Priya's Makeover
              </p>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img8}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                Aurora nails or Jelly nails || Priya's Makeover
              </p>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img9}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                Metallic Gold and Black Swirl or Gold and Black Abstract design
                || Priya's Makeover
              </p>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img10}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                French Tips, Glitter Accent and Floral/Leaf Design || Priya's
                Makeover
              </p>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img11}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                Red Glitter French nail art || Priya's Makeover
              </p>
            </motion.div>

            <motion.div
              variants={SlideLeft(0.8)}
              whileInView={"animate"}
              initial="initial"
              className="flex flex-col justify-center items-center"
            >
              <img
                src={Img12}
                alt=""
                className="md:w-56 w-full  rounded-3xl border-2  border-black"
              />
              <p className="text-yellow-400 text-center font-bold mt-4">
                Abstract Nails, Color Blocking, Negative Accent || Priya's
                Makeover
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
