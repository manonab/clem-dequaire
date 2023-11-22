import React from "react";
import { motion } from "framer-motion";
import { Images } from "~/common/images";

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
    <motion.div
      className="z-10 flex justify-between items-start h-auto"
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
        transition={{ ...timing, delay: 1.3 }}
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
        <motion.button
          className="bg-grayBlack mx-auto self-center absolute top-[75%] py-2.5 px-10 w-[163px] font-inter text-xs uppercase text-white font-bold rounded-[50px] left-[40%] transform translate(-50%, -50%)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...timing, delay: 0.9 }}
        >
          See more
        </motion.button>
      </motion.div>
      <motion.img
        src={Images.capiche}
        alt="capiche image"
        className="w-[300px] h-[380px] opacity-[0.9] mt-[300px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...timing, delay: 1.5 }}
      />
    </motion.div>
  );
};

export default HomeComponent;
