import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";
import { Images } from "~/common/images";
import { BigArrow } from "~/assets/big-arrow";
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
  const { setHeaderColor } = useHeaderColor();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setHeaderColor("#FCF6EF");
  }, []);

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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              <svg
                width="318"
                height="349"
                viewBox="0 0 318 349"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-[550px] h-[600px] mt-[80px] hidden-image ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      d="M312.993 88.6437L312.993 88.6447C316.828 101.896 317.111 115.881 316.462 130.216C316.235 135.224 315.894 140.277 315.552 145.355C314.914 154.806 314.271 164.347 314.344 173.862C314.344 184.337 315.229 194.84 316.116 205.365C316.477 209.645 316.838 213.928 317.139 218.214C318.184 233.046 318.522 247.922 315.701 262.848L315.701 262.849C310.284 292.703 292.23 322.759 264.707 337.576C236.957 352.394 199.72 351.771 169.247 340.913C154.013 335.485 140.469 327.446 127.654 318.726C121.75 314.708 116.002 310.546 110.314 306.428C109.829 306.076 109.345 305.726 108.861 305.375C102.699 300.916 96.5992 296.527 90.4426 292.452C83.064 287.505 75.6001 282.987 68.3128 278.576C63.4436 275.629 58.6533 272.729 54.0201 269.781C42.4468 262.418 31.8406 254.746 23.38 245.25L23.3796 245.249C6.45875 226.466 -2.11463 200.169 0.592411 175.335C3.33831 152.085 15.7726 130.295 28.6551 107.719C29.5348 106.178 30.4166 104.632 31.2975 103.083C32.2818 101.351 33.2638 99.6154 34.2467 97.8781C47.0243 75.2932 59.9593 52.4299 80.2886 34.7878C102.181 15.7894 132.2 3.05259 164.026 0.547019L164.019 0.447327L164.027 0.547014C195.626 -1.95847 228.808 6.18453 256.347 22.054C283.662 38.1334 305.548 61.9332 312.993 88.6437Z"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
              </svg>
              <img
                src={Images.bear}
                alt="bear image"
                className={`w-[550px] h-[600px] mt-[80px] hidden-image ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <motion.p
              className="text-center text-redHome
              font-neueMedium text-[200px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...timing, delay: 0.7 }}
            >
              Bienvenue.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="mx-auto mb-[450px] mt-[50px] flex-col flex items-center gap-3"
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
