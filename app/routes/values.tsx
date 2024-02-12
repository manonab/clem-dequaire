import { useEffect } from "react";
import { Images } from "~/common/images";
import { useHeaderColor } from "~/context";

export default function Values() {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("linear-background")
  }, [setHeaderColor]);
  return (
    <div
      className="rounded-[20px] mx-auto container w-[875px] h-[559px] z-10">
      <div className="flex bg-mainColor justify-around flex-col gap-2 items-center">
        <p className="text-[80px] text-redHome font-neueSemiBold leading-[70px]">Hello you,</p>
        <p className="w-[526px] text-xl text-center leading-6">if you really really want to see this webiste, please keep in mind that it’s still a work in progress !</p>
        <img
          src={Images.becks}
          alt="victoria beckham image"
          className="w-full h-[372px]" />
      </div>
    </div>
  );
}