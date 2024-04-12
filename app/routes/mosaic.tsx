import { useEffect } from "react";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";
import { BigArrow } from "~/assets/big-arrow";
import { useNavigate } from "@remix-run/react";
import { ArrowForward } from "@mui/icons-material";

export default function Mosaic() {
  const { setHeaderColor } = useHeaderColor();
  const router = useNavigate();

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const mosaicContent = [
    { title: "mission.", content: "J'ai conçu ce portfolio comme une introduction à mon univers, mon style et mes valeurs. Des arrière-plans neutres mais une des couleurs de texte saturées, une police douce mais imposante... L’ensemble se pose en miroir de mes engagements et croyances : un design simple, avenant mais résolument affirmé." },
    { title: "objectifs", content: "L’univers et le ton se veulent léger, la palette de couleur est un rappel du logo. Le site et l’application mobile sont à la fois ludiques et fondés sur les principes de L’UX design pour une expérience utilisateur optimum." },
    { title: "Réalisation", content: "J’ai veillé à ce que ce portfolio présente une cohérence entre la version mobile et web, tout en offrant une expérience utilisateur spécifique à chaque support." },
  ];

  return (
    <div className="h-full flex-col items-center justify-center mx-auto">
      <div className="flex-col mt-20 mb-16">
        <p className="uppercase font-neueRegular md:text-title text-capicheMobile text-redHome text-center mt-[180px] mb-[100px]">Mosaic</p>
        <motion.div
          className="mx-auto flex-col flex items-center gap-3 mb-[150px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...timing, delay: 0.6 }}
        >
          <BigArrow />
          <p className="font-footer uppercase font-bold leading-[20px] text-[14px]">DISCOVER</p>
        </motion.div>
      </div>
      <div className="w-full h-auto bg-saumon py-10">
        <div className="flex items-center justify-center gap-4">
          <p className="text-orange w-1/2 font-neueCondensed text-[24px] leading-[120%]">"Mosaic encourage, éduque et inspire les jeunes personnes LGBTQ+ et celleux à<br></br> leur côtés."</p>
          <div className="z-50 mt-10 w-[130px] h-[130px] bg-mainColor rounded-2xl">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="font-neueSemiBold text-[28px] text-center">+16%</p>
              <p className="font-footer text-[12px] text-center">Augmentation<br></br> globale en ligne.</p>
            </div>
          </div>
          <div className="w-[130px] absolute right-4  mt-14 z-10 h-[130px] bg-yellowHome rounded-2xl">
          </div>
        </div>
        <div className="flex gap-6 items-start w-full overflow-auto h-full size-12 px-4 mt-8 mb-4">
          {mosaicContent.map((content, index) => (
            <div key={index} className="flex flex-col items-start pl-6 pb-6">
              <p className="text-redHome font-neueSemiBold lowercase text-[25px] mb-5">{content.title}</p>
              <p className="font-footer text-[16px] min-w-[320px]">{content.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-auto py-20 bg-yellowHome overflow-hidden">
        <div className="flex items-center justify-around gap-12">
          <img src={Images.mosaic1} className="w-[180px] h-[180px] -ml-[120px]" />
          <img src={Images.mosaic2} className="w-[220px] h-[220px]" />
          <img src={Images.mosaic007} className="w-[180px] h-[180px] rounded-xl" />
        </div>
        <p className=" mt-5 text-[14px] text-orange text-center font-neueCondensed">Trust the Word, la première édition d'un concours <br></br> littéraire par et pour la communauté Queer.</p>
      </div>
      <div className="mb-20 mt-10 flex flex-col items-center">
        <p className="text-orange font-neueRegular text-[40px] mb-10">Témoignage</p>
        <div className="flex items-center">
          <ArrowForward className="w-6" /><p className="font-footer text-[18px]"><span className="font-footer font-semibold">Hugh O'keeffe</span>, Assistant Directeur</p>
        </div>
        <p className="font-footer text-[12px] leading-[120%] mt-5 mb-10 w-[300px]">“Clémence was a true pleasure to work with. In<br></br> joining us she created a new role for herself<br></br> leveraging her skills and abilities to build on Mosaic's<br></br> online presence and grew our audience [...]”.</p>
        <a target="_blank" href="https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US" className="py-2 px-2 transition-all duration-300 ease-in-out font-bold text-[10px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full min-w-[100px] max-w-[130px] mx-auto mb-20">
          Voir sur linkedin
        </a>
      </div>

    </div>
  );
}