"use client";

import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] grid grid-cols-5">
      {/* FIRST COL */}
      <div className="w-full h-full flex items-start">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/4348556/pexels-photo-4348556.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Person in Brown Coat Holding a News Paper
          "
              width={300}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* SEC COL */}
      <div className="w-full h-full"></div>
      {/* THIRD COL */}
      <div className="w-full h-full flex items-center">
        <div className="w-full h-4/6 overflow-hidden ">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.2)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/7184344/pexels-photo-7184344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Strawberries in a Glass Containers
          "
              width={300}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* FOURTH COL */}
      <div className="w-full h-full"></div>
      {/* FIFTH COL */}
      <div className="w-full h-full flex items-end">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.4)}
            className="w-full h-full "
          >
            <Image
              src="https://images.pexels.com/photos/3925875/pexels-photo-3925875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Yellow Instant Camera on Top of Ripped Paper Pages
          "
              width={300}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
