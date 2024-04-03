import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { BigDownArrow } from "~/assets/big-down-arrow";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";

export default function Values() {
  const { setHeaderColor } = useHeaderColor();
  const router = useNavigate();
  useEffect(() => {
    setHeaderColor("linear-values");
  }, [setHeaderColor]);

  return (
    <ParallaxProvider>
      <div className="flex-col flex w-full h-auto">
        <div className="!w-full bg-saumon pb-20">
          <p className="ml-10 font-neueRegular text-[190px] leading-[180px] text-orange font-medium">Tout commença par une <br></br><span className="text-redHome">idée</span>.</p>
        </div>
        <div className="bg-mainColor h-full flex-col flex">
          <div className="flex gap-12 justify-evenly items-center">
            <div className="w-[659px] ml-10">
              <p className="text-[18px] text-justify"><span className="font-semibold">Spécialisée en communication et marketing digital</span>, j’ai toujours ressenti ce besoin de trouver du sens. Plus qu’un métier, je vois la communication comme un moyen de partager et faire grandir des projets auxquels je crois profondément. Cinq années se sont écoulées depuis mon premier poste et cette idée s’est transformée en un défi que je relève passionnément chaque jour. Grâce à d’autres humain.e.s qui croyaient fort en leur convictions,   j’ai eu la chance de porter défis audacieux et des messages engagés. Peut-être serez vous les prochain.e.s ?</p>
            </div>
            <div className="!w-fit bg-white h-[480px] rounded-[50px] -mt-16">
              <img alt="men with pride flag" src={Images.pride} />
            </div>
          </div>
          <p className="z-[10] -mb-32 w-[741px] ml-[300px] leading-[72px] text-royalBlue text-[60px] font-neueRegular">
            "Seules 54% des entreprises françaises ont embrassé la diversité".<span className="text-black">*</span>
          </p>
          <div className="flex items-center justify-evenly">
            <div className="z-0 flex justify-start items-center">
              <p className="rotate-[270deg] -mr-16">Têtu, Nom de l’enquête.</p>
              <img alt="group people" src={Images.group} className="rounded-[50px h-[480px] w-[395px]" />
            </div>
            <p className="text-[18px] font-normal text-justify w-[640px]">
              Au fil de ma vie et de ma carrière personnelle,  j’ai pu appréhender avec clarté et détermination les bouleversements sociaux qui se jouent depuis maintenant des années.  Pour toutes les entreprises qui souhaitent faire parti du changement, je propose une <span className="font-semibold">relecture inclusive</span> et une vision sensible de votre communication.             </p>
          </div>
        </div>
        <div className="bg-yellowHome pt-40 -mt-16">
          <p className="font-neueRegular italic text-[50px] leading-[90%] mx-16">Manifesto</p>
          <div className="w-3/4 mx-auto">
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-14">01.</p>
              <p className="leading-[100%] text-[28px] font-footer">L'<span className="text-orange">inclusivité</span> et le respect d’autrui sont des valeurs fondamentales. Faisons de la diversité un engagement quotidien.</p>
            </div>
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-11">02.</p>
              <p className="leading-[100%] text-[28px] font-footer">La <span className="text-orange">bienveillance</span> et l'écoute forment la base d'une culture d'entreprise saine et productive. Le dialogue est la clé.</p>
            </div>
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-11">03.</p>
              <p className="font-footer leading-[100%] text-[28px]">Sans <span className="text-orange">passion</span>, pas d’action. Croyez en votre message, je m’occupe de le partager.</p>
            </div>
            <div className="flex items-center">
              <p className="font-footer text-[70px] mr-11">04.</p>
              <p className="leading-[100%] text-[28px] font-footer"><span className="text-orange">Amusons nous</span> à créer, partager, designer. Partageons l’amour de nos métiers.</p>
            </div>
          </div>
          <div onClick={() => router('/projects')} className="py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto">
            Mes projets
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
