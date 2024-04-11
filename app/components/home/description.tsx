import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "~/assets/arrow-right";
import { useNavigate } from "@remix-run/react";
import { Images } from "~/common/images";
import { Parallax } from "react-scroll-parallax";
import { BigArrow } from "~/assets/big-arrow";
import Contact from "~/routes/contact";

const Description: React.FC = () => {
  const router = useNavigate();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isServicesSectionVisible = scrollPosition > 1350;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 1150) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`hidden w-full h-auto md:flex flex-col ${isServicesSectionVisible ? "bg-mainColor" : "bg-yellowHome"}`}>
        <div className="w-full h-full mx-auto flex flex-col gap-[150px] py-32">
          <p className="w-[1100px] ml-24 text-left text-orange text-[53px] leading-[57.6px] font-neueCondensed">Le courage de nos idées, la passion de les partager. Parce que chaque histoire mérite qu’on la raconte, <span className="text-redHome font-bold">qu’attendons nous pour commencer ?</span></p>
          <p className="w-[1100px] ml-48 text-right text-orange text-[53px] leading-[57.6px] font-neueCondensed">Consultante en communication et créative passionnée, je m’efforce d’aider votre projet à grandir grâce au design et au marketing digital.</p>
          <div
            onClick={() => router('/about')}
            className="hover:cursor-pointer ml-24 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around">
            <span className="flex items-center gap-3">
              <p className="uppercase text-xs	font-footer">En savoir plus</p>
              <ArrowRight />
            </span>
            <div className="border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" />
          </div>
        </div>
        <div className="w-auto h-full relative">
          <div className={`flex items-center justify-end pr-10 gap-3 relative w-full`}>
            <img src={Images.service} alt="Service" />
            <p className="text-right font-neueRegular uppercase text-bannerTitile text-redHome">SERVICES</p>
          </div>
          <div className="flex items-center justify-around my-36 mx-20">
            <div className="flex-col items-center gap-3">
              <p className="font-neueBold text-orange text-serviceTitle">Communication</p>
              <div className="flex items-center">
                <p className="font-neueBold text-orange text-serviceTitle mr-4">&</p>
                <p className="font-neueBold text-orange text-serviceTitle">marketing</p>
              </div>
              <p className="font-neueBold text-orange text-serviceTitle ml-20">digital.</p>
            </div>
            <p className="font-neueBold text-orange text-serviceTitle">Design</p>
            <p className="font-neueBold text-orange text-serviceTitle">Consulting</p>
          </div>
          <div
            onClick={() => router('/services')}
            className="mb-[250px] hover:cursor-pointer ml-24 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around">
            <span className="flex items-center gap-3">
              <p className="uppercase text-xs	font-footer">En savoir plus</p>
              <ArrowRight />
            </span>
            <div className="border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" />
          </div>
        </div>
        <Parallax speed={-15} className="min-h-[450px]">
          <div className="w-full h-screen bg-saumon relative pt-20">
            <div className="flex-col items-center justify-center">
              <p className="flex justify-center mt-44 items-baseline text-[100px] leading-[100px] text-royalBlue font-neueSemiBold">Like what you s<span><img src={Images?.rabbit} className="w-[130px] bg-center rounded-2xl mx-2" /></span>?</p>
              <p className="text-black font-footer font-medium leading-[100px] text-center text-[80px]">Restons en contact</p>
            </div>
            <div onClick={() => router('/contact')} className="py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto">
              Me contacter
            </div>
          </div>
        </Parallax>
      </div>
      <div className="flex flex-col md:hidden h-full w-full gap-12 mt-16">
        <div>
          <img src={Images.homeMobile} width="200px" />
          <p className="text-homeMobileTitle text-redHome font-neueRegular -mt-[100px] ml-8">Tout<br></br> commence<br></br> par une<br></br> idée. </p>
          <div className="mx-4 my-10">
            <p className="text-condensed text-orange text-homeMobileContent max-w-[300px]">Consultante en communication et créative passionnée, je m’efforce d’aider votre marque à grandir grâce au design et au marketing digital.</p>
          </div>
          <div className="flex items-center justify-end">
            <div className="flex flex-col items-center gap-3">
              <BigArrow />
              <p className="font-footer uppercase font-bold leading-[20px]">SCROLL & ROLL</p>
            </div>
            <img src={Images.homeMobile2} width="160px" />
          </div>
        </div>
        <div className="bg-yellowHome w-full pb-24">
          <div className="mt-20 mb-10 m-4">
            <p className="text-condensed text-orange text-homeMobileContent max-w-[300px]">Le courage de nos idées, la passion de les partager. Parce que vous avez quelque chose à raconter, <span className="text-redHome font-bold">qu’attendons nous pour commencer ?</span></p>
          </div>
          <p className="mx-4 mb-5 font-neueBold text-redHome text-homeMobileServices">services</p>
          <div className="flex flex-col gap-3 items-start mx-4 my-5">
            <p className="text-grayBlack font-footer font-bold">Communication</p>
            <img src={Images.line} className="-mt-3" />
            <p className="text-grayBlack font-footer font-bold">Marketing digital</p>
            <img src={Images.line} className="-mt-3" />
            <p className="text-grayBlack font-footer font-bold">Design</p>
            <img src={Images.line} className="-mt-3" />
            <p className="text-grayBlack font-footer font-bold">Consulting</p>
            <img src={Images.line} className="-mt-3" />
          </div>
          <p className="uppercase font-footer text-grayBlack text-[8px] mx-4 my-5">EN SAVOIR PLUS</p>
          <p className="m-4 my-5 font-neueBold text-redHome text-homeMobileServices">projets</p>
          <div className="overflow-auto whitespace-nowrap ml-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <div className="flex items-center justify-evenly space-x-6 py-5 px-10">
              <img onClick={() => router('/capiche')}
                src={Images.homeCapiche} alt="Image 1" className="w-[130px] mx-5" />
              <img onClick={() => router('/mosaic')} src={Images.homeMosaic} alt="Image 2" className="w-[130px] mx-5" />
              <img onClick={() => router('/portfolio')} src={Images.homePortfolio} alt="Image 3" className="w-[130px] mx-5" />
            </div>
          </div>
          <p className="uppercase font-footer text-grayBlack text-[8px] mx-4 my-5">EN SAVOIR PLUS</p>

        </div>
        <div className="bg-mainColor w-full pb-18">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Description;
