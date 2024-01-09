import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { BigDownArrow } from "~/assets/big-down-arrow";
import { useHeaderColor } from "~/context";

export default function About() {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);

  return (
    <ParallaxProvider>
      <div className="flex-col flex gap-12 w-screen h-auto">
        <div className="flex items-end justify-between w-auto">
          <div className="min-w-[950px] flex-col flex">
            <div className="w-[1259px] ml-10">
              <p className="font-neueSemiBold text-[200px] uppercase leading-[180px] text-orange font-medium">IT’S ALL ABOUT PASSION.</p>
            </div>
            <div className="w-[637px] ml-12 my-16">
              <p className="leading-[31.2px] text-justify text-2xl font-normal font-footer">Lorem ipsum dolor sit amet consectetur. Rhoncus maecenas non tempor ut sed sapien semper quis sem. Enim aliquet tristique fringilla orci turpis erat pulvinar. Sapien facilisis tellus netus tortor. Molestie turpis a ultrices blandit ut imperdiet duis.</p>
            </div>
          </div>
          <div className="w-auto">
            <p className="mx-10 uppercase text-redHome text-[100px] font-medium font-neueMedium leading-[90px]">Scroll</p>
          </div>
        </div>
        <div className="self-end mr-[220px] -mb-[130px] z-[10]">
          <BigDownArrow />
        </div>
        <div className="bg-saumon h-full w-full flex-col flex">
          <div className="flex items-end justify-around">
            <div className="bg-[#D9D9D9] w-[395px] h-[480px] rounded-[50px] -mt-10"></div>
            <p className="-mb-40 z-[10] w-[802px] leading-[72px] text-royalBlue text-right text-[80px] font-neueMedium">Lorem ipsum dolor 32% sit amet consectetur. Neque leo euismod id mauris.</p>
          </div>
          <div className="flex items-center justify-around mb-10 mt-28 mx-20">
            <p className="text-[25px] leading-[32px] font-normal font-footer text-justify w-[640px]">Lorem ipsum dolor sit amet consectetur. Rhoncus maecenas non tempor ut sed sapien semper quis sem. Enim aliquet tristique fringilla orci turpis erat pulvinar. Sapien facilisis tellus netus tortor. Molestie turpis a ultrices blandit ut imperdiet duis.</p>
            <div className="bg-[#D9D9D9] z-0 w-[395px] h-[480px] rounded-[50px]"></div>
          </div>
        </div>

        <div className="bg-mainColor h-full w-full flex-col flex gap-12">

        </div>
      </div>
    </ParallaxProvider>
  );
}
