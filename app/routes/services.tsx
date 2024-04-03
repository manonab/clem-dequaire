import { useEffect, useRef, useState } from "react";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";
import { ArrowRight } from "~/assets/arrow-right";
import { useNavigate } from "@remix-run/react";

export default function Services() {
  const { setHeaderColor } = useHeaderColor();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const router = useNavigate();

  const scrollingTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeaderColor("linear-services");

    const handleScroll = () => {
      if (scrollingTextRef.current) {
        const rect = scrollingTextRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setScrolled(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderColor]);


  return (
    <div className="w-full h-full flex-col">
      <div className="bg-yellowHome pt-20">
        <div className="flex items-center mb-32">
          <div className="flex-col mx-auto h-[400px] justify-around">
            <div className="h-1/2 mb-3">
              <p className="font-neueBold  text-[50px] leading-[90%]">
                Communication
              </p>
              <div className="flex items-center">
                <p className="font-neueBold  text-[50px] leading-[90%] mr-10">&</p>
                <p className="font-neueBold  text-[50px] leading-[90%]">marketing</p>
              </div>
              <p className="font-neueBold  text-[50px] leading-[90%] ml-20">digital.</p>
            </div>
            <div className="h-1/2">
              <p className="w-[328px]  text-[16px]">
                Informer, engager et persuader votre public avec des technologies actuelles et adaptées à vos problématiques.
              </p>
              <ul className="list-disc ml-3 mt-3">
                <li className="text-[16px] font-semibold">Social Media</li>
                <li className="text-[16px] font-semibold">SEO</li>
                <li className="text-[16px] font-semibold">Corporate writing</li>
              </ul>
            </div>
          </div>
          <div className="flex-col mx-auto h-[400px]">
            <p className="font-neueBold text-[50px] leading-[90%] mt-20">Design</p>
            <div className="mt-[85px]">
              <p className="w-[328px] text-[16px]">Donner de la puissance à vos messages avec des designs marquants et intuitifs, notamment sur les réseaux.</p>
              <ul className="list-disc ml-3 mt-3">
                <li className="text-[16px] font-semibold">UX/UI design</li>
                <li className="text-[16px] font-semibold">Supports de communication</li>
                <li className="text-[16px] font-semibold">Posts réseaux sociaux</li>
              </ul>
            </div>
          </div>
          <div className="flex-col mx-auto h-[400px]">
            <p className="font-neueBold text-[50px] leading-[90%] mt-20">Consulting</p>
            <div className="mt-[85px]">
              <p className="w-[328px] text-[16px]">Vous portez vers une communication plus éthique et solidaire qui répond aux problématiques d’aujourd’hui.</p>
              <ul className="list-disc ml-3 mt-3">
                <li className="text-[16px] font-semibold">Consulting éthique</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="scrolling-text" ref={scrollingTextRef} className={`flex items-center justify-end gap-3 relative ${scrolled ? 'scrolling' : ''}`}>
          <p className="text-right font-neueRegular uppercase text-[160px] leading-[90%] text-orange">CRÉER</p>
          <img src={Images.service} alt="Service" />
          <p className={`text-right font-neueRegular uppercase text-[160px] leading-[90%] text-orange ${scrolled ? 'text-transition' : 'hidden'}`}>CRÉER</p>
        </div>
      </div>
      <div className="bg-mainColor h-screen my-20">
        <p className="font-neueRegular text-[50px] leading-[90%] mb-20 ml-20">Expertise</p>
        <div className="flex justify-evenly">
          <div className="flex-col w-[330px]">
            <p className="font-footer text-[70px] leading-[90%] font-semibold">01.</p>
            <p className="font-footer text-[16px] leading-[90%] font-bold my-6">Analyser.</p>
            <p className="font-footer text-[16px] leading-[130%]">Ma mission est de vous écouter et de vous accompagner pas à pas dans votre parcours. Avoir compréhension approfondie de vos problématiques pour trouver ensemble des solutions efficaces et personnalisées qui répondent à vos défis uniques.</p>
          </div>
          <div className="flex-col w-[330px]">
            <p className="font-footer text-[70px] leading-[90%] font-semibold">02.</p>
            <p className="font-footer text-[16px] leading-[90%] font-bold my-6">Optimiser.</p>
            <p className="font-footer text-[16px] leading-[130%]">Construire ensemble une image de marque solide et cohérente. En adoptant une approche centrée sur vos besoins, je vise à créer pour vous une stratégie innovante et actuelle qui qui résonnera avec votre audience cible et génèrera un engagement nouveau.</p>
          </div>
          <div className="flex-col w-[330px]">
            <p className="font-footer text-[70px] leading-[90%] font-semibold">03.</p>
            <p className="font-footer text-[16px] leading-[90%] font-bold my-6">Conseiller.</p>
            <p className="font-footer text-[16px] leading-[130%]">Dans un monde où la diversité est devenue un élément incontournable, je serai là pour vous soutenir et vous fournir les outils et conseils nécessaires pour naviguer avec succès dans cet environnement complexe et diversifié.</p>
          </div>
        </div>
        <div onClick={() => router('/projects')} className="mt-[100px] hover:cursor-pointer ml-[100px] flex border-b-black border-b-2 w-[150px] pb-2 items-center justify-around">
          <p className="uppercase text-xl	font-footer">Projets</p>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}