import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Images } from "~/common/images";
import { BigArrow } from "~/assets/big-arrow";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Description from "./description";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const HomeComponent: React.FC = () => {
  return (
    <ParallaxProvider>
      <Parallax speed={-30}>
        <motion.div
          className="w-screen h-screen z-10 flex justify-between items-start"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ ...timing }}
        >
          <motion.img
            src={Images.mosaic}
            alt="mosaic image"
            className="w-[310px] h-[425px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.2 }}
          />
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.5 }}
          >
            <motion.img
              src={Images.bear}
              alt="bear image"
              className="w-[550px] h-[600px] mt-[80px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...timing, delay: 0.5 }}
            />
            <motion.p
              className="text-center text-mainColor absolute top-[50%]  transform translate(-50%, -50%) font-neueMedium text-[50px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...timing, delay: 0.7 }}
            >
              Welcome to my portfolio.
            </motion.p>
          </motion.div>
          <motion.img
            src={Images.capiche}
            alt="capiche image"
            className="w-[300px] h-[380px] opacity-[0.9] mt-[300px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.8 }}
          />
        </motion.div>
        <motion.div
          className="mx-auto mb-[450px] pl-40 mt-[50px]  flex-col flex items-center gap-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...timing, delay: 2 }}
        >
          <BigArrow />
          <p className="font-footer uppercase font-bold leading-[20px]">SCROLL & ROLL</p>
        </motion.div>

      </Parallax>
      <Parallax speed={-15}>
        <Description />
      </Parallax>
    </ParallaxProvider>
  );
};

export default HomeComponent;
