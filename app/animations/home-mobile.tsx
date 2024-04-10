import React from "react";
import { motion } from "framer-motion";
import { Images } from "~/common/images";

const MobileAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full z-50">
      {/* Logo initial */}
      <motion.img
        src={Images.newlogo}
        alt="logo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="flex gap-1.5">
        {/* Points */}
        <motion.div
          initial={{ y: 10, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 150 }}
          className="bg-orange h-2.5 w-2.5 rounded-full"
        ></motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 150 }}
          className="bg-redHome h-2.5 w-2.5 rounded-full"
        ></motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, type: "spring", stiffness: 150 }}
          className="bg-pinkVive h-2.5 w-2.5 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default MobileAnimation;
