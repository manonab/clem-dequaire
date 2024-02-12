import { useEffect } from "react";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";

export default function Contact() {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);
  return (
    <div className="w-screen h-screen flex mt-20 mb-10">
      <div className="flex-col ml-10 ">
        <p className="text-[200px] leading-[90%] text-royalBlue uppercase font-neueRegular">Con</p>
        <p className="text-[200px] leading-[90%] text-royalBlue uppercase font-neueRegular">tact.</p>
      </div>
      <div className="flex-col mx-auto">
        <div className="flex justify-around">
          <div>
            <p className="font-inter mb-1">Nom</p>
            <input className="rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" />
          </div>
          <div>
            <p className="font-inter mb-1">Email</p>
            <input className="rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" />
          </div>
        </div>
        <div className="my-10">
          <p className="font-inter mb-1">Object</p>
          <input className="rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" />
        </div>
        <div className=" mt-10">
          <p className="font-inter mb-1">Message</p>
          <textarea className="rounded-[20px] bg-mainColor border-[2px] border-black w-[635px] h-[190px]" />
        </div>
      </div>
    </div>
  );
}