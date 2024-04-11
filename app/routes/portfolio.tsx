import { useEffect } from "react";
import { BigArrow } from "~/assets/big-arrow";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";
import { useNavigate } from "@remix-run/react";

export default function PortFolio() {
  const { setHeaderColor } = useHeaderColor();
  const router = useNavigate();

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);

  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  const portfolioContent = [
    { title: "Concept.", content: "J'ai conçu ce portfolio comme une introduction à mon univers, mon style et mes valeurs. Des arrière-plans neutres mais une des couleurs de texte saturées, une police douce mais imposante... L’ensemble se pose en miroir de mes engagements et croyances : un design simple, avenant mais résolument affirmé." },
    { title: "Intention", content: "Des fonds pastels, plutôt neutre avec des couleurs audacieuses pour les titres." },
    { title: "Réalisation", content: "Lorem ipsum dolor sit amet consectetur. Orci sed vulputate molestie et aliquet. Sem sapien eget lectus elementum vulputate. Purus congue ullamcorper id at felis et." },
  ];
  return (
    <div className="h-full flex-col items-center justify-center mx-auto">
      <div className="flex-col mt-20 mb-12">
        <p className="uppercase font-neueRegular md:text-title text-capicheMobile text-redHome text-center mt-[180px] mb-[100px]">Portfolio</p>
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
      <div className="w-auto mt-6 mb-10 mx-10">
        <p className="font-neueCondensed text-left leading-[90%] text-orange text-[30px]">Changer les choses, une<br></br> idée à la fois. </p>
      </div>
      <div className="flex gap-6 items-start w-full overflow-auto h-full size-12 px-4 mb-10">
        {portfolioContent.map((content, index) => (
          <div key={index} className="flex flex-col items-start pl-6 pb-6">
            <p className="text-redHome font-neueSemiBold lowercase text-[25px] mb-5">{content.title}</p>
            <p className="font-footer text-[16px] min-w-[320px]">{content.content}</p>
          </div>
        ))}
      </div>
      <div className="bg-saumon mt-10 flex flex-col gap-3 justify-center py-20">
        <div className="flex gap-3 justify-evenly">
          <img src={Images.capicheImg1} width="160px" className="-mt-10" />
          <img src={Images.capicheImg2} width="160px" className="-mb-10" />
        </div>
      </div>
      <div className="my-20">
        <div onClick={() => router('/projects')} className="py-2 px-2 transition-all duration-300 ease-in-out font-bold text-[10px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full min-w-[100px] max-w-[130px] mx-auto">
          Autres projets
        </div>
      </div>

    </div>
  );
}