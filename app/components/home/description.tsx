import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "~/assets/arrow-right";
import { useNavigate } from "@remix-run/react";
import { Images } from "~/common/images";
import { Parallax } from "react-scroll-parallax";

const Description: React.FC = () => {
  const router = useNavigate();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isServicesSectionVisible = scrollPosition > 2000;
  return (
    <div className={`w-full h-auto flex flex-col ${isServicesSectionVisible ? "bg-saumon" : "bg-yellowHome"}`}>
      <div className="w-full h-full mx-auto flex flex-col gap-[150px] py-32">
        <p className="w-[1100px] ml-24 text-left text-orange text-[64px] leading-[57.6px] font-neueMedium">Aux grands mots les grands designs. Parce que votre message méritent d’être entendu, travaillons ensemble.</p>
        <p className="w-[1100px] ml-48 text-right text-orange text-[64px] leading-[57.6px] font-neueMedium">Créative passionnée, je m’efforce d’aider votre marque à grandir grâce au design et au marketing digital.</p>
        <div onClick={() => router('/about')} className="mb-20 hover:cursor-pointer ml-28 flex border-b-black border-b-2 w-[220px] pb-2 items-center justify-around">
          <p className="uppercase text-xl	font-footer">En savoir plus</p>
          <ArrowRight />
        </div>
      </div>
      <div className="w-screen h-full relative">
        <div className="flex items-start w-full -mt-24">
          <div className="w-[800px] ml-20">
            <p className="text-[250px] text-redHome text-center font-neueMedium uppercase leading-[225px]">Services</p>
          </div>
        </div>
        <div className="flex items-center justify-around my-36 mx-20">
          <div className="flex-col items-center gap-3">
            <p className="font-neueBold  text-[75px] leading-[75px]">Communication</p>
            <div className="flex items-center">
              <p className="font-neueBold  text-[75px] leading-[75px] mr-10">&</p>
              <p className="font-neueBold  text-[75px] leading-[75px]">marketing</p>
            </div>
            <p className="font-neueBold  text-[75px] leading-[75px] ml-20">digital.</p>
          </div>
          <p className="font-neueBold  text-[75px] leading-[75px]">Design</p>
          <p className="font-neueBold  text-[75px] leading-[75px]">Consulting</p>
        </div>
        <div onClick={() => router('/projects')} className="my-20 hover:cursor-pointer ml-20 flex border-b-black border-b-2 w-[184px] pb-2 items-center justify-around">
          <p className="uppercase text-xl	font-footer">VOIR PLUS</p>
          <ArrowRight />
        </div>
      </div>
      <Parallax speed={-15} className="min-h-[450px]">
        <div className="w-full h-screen bg-mainColor relative pt-20">
          <div className="flex-col items-center justify-center">
            <p className="flex justify-center mt-44 items-center text-[100px] leading-[100px] text-royalBlue font-neueSemiBold">Like what you s<span><img src={Images?.rabbit} className="w-[130px] bg-center rounded-2xl mx-2" /></span>?</p>
            <p className="text-black font-footer font-medium leading-[100px] text-center text-[90px]">Restons en contact</p>
          </div>
          <div onClick={() => router('/contact')} className="hover:cursor-pointer border-black border my-20 rounded-3xl px-5 py-3 w-[200px] mx-auto">
            <p className="leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase">Contactez-moi</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Description;
