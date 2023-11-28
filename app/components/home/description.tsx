import React from "react";
import { ArrowRight } from "~/styles/assets/arrow-right";
import { useNavigate } from "@remix-run/react";

const Description: React.FC = () => {
  const router = useNavigate();
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-full h-full bg-yellowHome mx-auto py-48 flex flex-col gap-[150px]">
        <p className="w-[1100px] ml-24 text-left text-orange text-[64px] leading-[57.6px] font-neueMedium">Anchour is a hard-working marketing agency that propels good companies to discover greatness.</p>
        <p className="w-[1100px] ml-48 text-right text-orange text-[64px] leading-[57.6px] font-neueMedium">We’re pragmatic creatives who get our kicks helping brands win through design, digital experiences, and strategy.</p>
        <div onClick={() => router('/about')} className="hover:cursor-pointer ml-20 flex border-b-black border-b-2 w-[184px] pb-4 items-center justify-around">
          <p className="uppercase text-xl	font-footer">learn more</p>
          <ArrowRight />
        </div>
      </div>
      <div className="w-full h-screen bg-saumon">
        <div className="w-[800px] break-words">
          <p className="text-[250px] text-uppercase ">Services</p>
        </div>
      </div>

    </div>
  );
};

export default Description;
