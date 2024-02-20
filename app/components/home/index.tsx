import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Images } from "~/common/images";
import { BigArrow } from "~/assets/big-arrow";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Description from "./description";
import { useHeaderColor } from "~/context";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const HomeComponent: React.FC = () => {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor('#FCF6EF')
  }, [])

  return (
    <ParallaxProvider>
      <Parallax speed={-30} className="flex flex-col justify-around items-center gap-4">
        <motion.div
          className="w-full z-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ ...timing }}
        >

          <motion.div
            className="relative flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...timing, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="image-container">
              <motion.img
                src={Images.bear}
                alt="bear image"
                className="w-[550px] h-[600px] mt-[80px] hidden-image"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...timing, delay: 0.5 }}
              />
              <div className="hover-shape"></div>
            </div>
            <motion.p
              className="text-center text-mainColor font-neueMedium text-[50px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...timing, delay: 0.7 }}
            >
              Bienvenue.
            </motion.p>
          </motion.div>


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
