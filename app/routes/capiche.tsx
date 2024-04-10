import { useEffect } from "react";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";
import { BigArrow } from "~/assets/big-arrow";

export default function Capiche() {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const capicheContent = [
    { title: "Concept.", content: "Capiche est un site fictif de revente de jeux de société de seconde main. Sa particularité est d’avoir des sections spécialisées dans le vintage et les produits japonais, toujours d’occasion. " },
    { title: "Intention", content: "L’univers et le ton se veulent léger, la palette de couleur est un rappel du logo. Le site et l’application mobile sont à la fois ludiques et fondés sur les principes de L’UX design pour une expérience utilisateur optimum. " },
    { title: "Réalisation", content: "Lorem ipsum dolor sit amet consectetur. Orci sed vulputate molestie et aliquet. Sem sapien eget lectus elementum vulputate. Purus congue ullamcorper id at felis et." },
  ];

  return (
    <div className="h-full flex-col items-center justify-center mx-auto">
      <div className="flex-col my-20">
        <p className="uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40">Capiche</p>
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
      <div className="w-full h-auto my-20">
        <img src={Images.capicheBG} alt="capiche background" />
      </div>
      <div className="w-auto m-20">
        <p className="font-neueCondensed text-left leading-[90%] text-orange text-[25px]">Une alternative écologique<br></br> à vos soirées endiablées. </p>
      </div>
      <div className="flex gap-6 items-center w-full overflow-x-auto">
        {capicheContent.map((content, index) => (
          <div key={index} className="flex flex-col items-start">
            <p>{content.title}</p>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}