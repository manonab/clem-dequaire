import React from "react";
import { ArrowRight } from "~/styles/assets/arrow-right";
import { useNavigate } from "@remix-run/react";
import { Images } from "~/common/images";

const Description: React.FC = () => {
  const router = useNavigate();
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-full bg-yellowHome mx-auto flex flex-col gap-[150px] py-32">
        <p className="w-[1100px] ml-24 text-left text-orange text-[64px] leading-[57.6px] font-neueMedium">Anchour is a hard-working marketing agency that propels good companies to discover greatness.</p>
        <p className="w-[1100px] ml-48 text-right text-orange text-[64px] leading-[57.6px] font-neueMedium">We’re pragmatic creatives who get our kicks helping brands win through design, digital experiences, and strategy.</p>
        <div onClick={() => router('/about')} className="mb-20 hover:cursor-pointer ml-28 flex border-b-black border-b-2 w-[184px] pb-2 items-center justify-around">
          <p className="uppercase text-xl	font-footer">learn more</p>
          <ArrowRight />
        </div>
      </div>
      <div className="w-screen h-full bg-saumon relative">
        <div className="flex items-start w-full -mt-24">
          <div className="w-[800px] ml-20">
            <p className="text-[250px] text-redHome font-neueMedium uppercase leading-[225px] ">Servi</p>
            <p className="text-[250px] text-redHome font-neueMedium uppercase leading-[225px]">ces</p>
          </div>
        </div>
        <div className="flex items-center justify-around my-36">
          <div className="flex-col items-center gap-3">
            <p className="font-neueBold  text-[75px] leading-[75px]">Digital</p>
            <div className="flex items-center justify-around">
              <p className="font-neueBold  text-[75px] leading-[75px]">&</p>
              <p className="font-neueBold  text-[75px] leading-[75px]">marketing</p>
            </div>
            <p className="font-neueBold  text-[75px] leading-[75px]">comms.</p>
          </div>
          <p className="font-neueBold  text-[75px] leading-[75px]">Design</p>
          <p className="font-neueBold  text-[75px] leading-[75px]">Consulting</p>
        </div>
        <div>
          <div onClick={() => router('/projects')} className="my-20 hover:cursor-pointer ml-20 flex border-b-black border-b-2 w-[184px] pb-2 items-center justify-around">
            <p className="uppercase text-xl	font-footer">what I do</p>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-mainColor relative">
        <div className="flex-col items-center justify-center">
          <p className="flex justify-center mt-44 items-center text-[100px] leading-[100px] text-royalBlue uppercase font-neueSemiBold">Like what you s<span><img src={Images?.rabbit} className="w-[130px] bg-center rounded-2xl mx-2" /></span>?</p>
          <p className="text-black font-footer font-medium leading-[100px] text-center text-[90px]">Let’s keep in touch.</p>
        </div>
        <div onClick={() => router('/contact')} className="hover:cursor-pointer border-black border my-20 rounded-3xl px-5 py-3 w-[200px] mx-auto">
          <p className="leading-[17.5px] font-bold text-sm text-center text-grayBlack">CONTACT ME NOW</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
