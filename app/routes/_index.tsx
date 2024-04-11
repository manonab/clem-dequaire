import BackgroundSlider from "~/components/home/background-slider";
import HomeComponent from "~/components/home";
import { motion } from "framer-motion";
import { useDesktopAnimation } from "~/animations/home-desktop";
import MobileAnimation from "~/animations/home-mobile";

export default function Index() {
  const { state } = useDesktopAnimation();

  return (
    <div>
      <div className="md:hidden flex">
        <MobileAnimation />
      </div>
      <div className={`hidden md:flex ${state.currentImage === state.images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {!state.animationFinished && (
              <img
                  src={state.images[state.currentImage]}
                  alt="Image"
                  width={400}
                  height={400}
                  className="rounded mx-auto"
                />
              )}
            </motion.div>
            {state.showLastPart && <BackgroundSlider isVisible={!state.animationFinished} />}
        {state.animationFinished && <HomeComponent />}

      </div>
    </div>
  );
}
