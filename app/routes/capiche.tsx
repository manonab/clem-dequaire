import { useEffect } from "react";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";
import { BigArrow } from "~/assets/big-arrow";
import { useNavigate } from "@remix-run/react";

export default function Capiche() {
  const { setHeaderColor } = useHeaderColor();
  const router = useNavigate();

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const capicheContent = [
    { title: "Concept.", content: "Capiche est un site fictif spécialisé dans la revente de jeux de société de seconde main. Il se distingue par ses sections dédiées aux produits vintage et japonais, toujours d'occasion. L’objectif est d’encourager le consommateur à un mode de consommation plus responsable via une plateforme ludique et moderne." },
    { title: "Intention", content: "L’univers et le ton se veulent léger, la palette de couleur est un rappel du logo. Le site et l’application mobile sont à la fois ludiques et fondés sur les principes de L’UX design pour une expérience utilisateur optimum." },
    { title: "Réalisation", content: "Lorem ipsum dolor sit amet consectetur. Orci sed vulputate molestie et aliquet. Sem sapien eget lectus elementum vulputate. Purus congue ullamcorper id at felis et." },
  ];

  return (
    <div className="h-full flex-col items-center justify-center mx-auto">
      <div className="flex-col my-20">
        <p className="uppercase font-neueRegular md:text-title text-capicheMobile text-redHome text-center mt-[180px] mb-[100px]">Capiche</p>
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
      <div className="w-full h-auto mb-16 mt-20">
        <img src={Images.capicheBG} alt="capiche background" height={"260px"} />
      </div>
      <div className="w-auto mt-12 mb-10 mx-10">
        <p className="font-neueCondensed text-left leading-[90%] text-orange text-[30px]">Une alternative<br></br> écologique à vos soirées<br></br> endiablées. </p>
      </div>
      <div className="flex gap-6 items-start w-full overflow-auto h-full size-12 px-4 mb-10">
        {capicheContent.map((content, index) => (
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