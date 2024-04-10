import { useEffect } from "react";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";
import { BigArrow } from "~/assets/big-arrow";

export default function Mosaic() {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  return (
    <div className="h-full flex-col items-center justify-center mx-auto">
      <div className="flex-col my-20">
        <p className="uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40">Mosaic</p>
        <motion.div
          className="mx-auto flex-col flex items-center gap-3 mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...timing, delay: 0.6 }}
        >
          <BigArrow />
          <p className="font-footer uppercase font-bold leading-[20px]">DISCOVER</p>
        </motion.div>
      </div>
      {/* <div className="flex flex-wrap items-center w-full">
        <img src={Images.mosaic002} className="md:w-[392px] h-[392px]" />
        <img src={Images.mosaic003} className="md:w-[392px] h-[392px]" />
        <img src={Images.mosaic004} className="w-[392px] h-[392px]" />
        <img src={Images.mosaic005} className="w-[392px] h-[392px]" />
        <img src={Images.mosaic006} className="w-[392px] h-[392px]" />
      </div> */}
    </div>
  );
}