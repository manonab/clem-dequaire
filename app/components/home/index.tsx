import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";
import { Images } from "~/common/images";
import { BigArrow } from "~/assets/big-arrow";
import Description from "./description";

const timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const HomeComponent: React.FC = () => {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("#FCF6EF");
  }, []);

  return (
    <ParallaxProvider>
      <Parallax speed={-30} className="flex flex-col justify-around items-center gap-4">
        <motion.div
          transition={{ ...timing, delay: 2 }}
          className="flex flex-col items-center justify-evenly h-screen">
          <p className="font-neueRegular text-redHome text-welcome text-center">Bienvenue</p>
          <div className="flex flex-col items-center gap-3 mb-20">
            <BigArrow />
            <p className="font-footer uppercase font-bold leading-[20px]">SCROLL & ROLL</p>
          </div>
        </motion.div>

      </Parallax>

      <Parallax speed={-15}>
        <Description />
      </Parallax>
    </ParallaxProvider>
  );
};

export default HomeComponent;
