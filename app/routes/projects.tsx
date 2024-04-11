import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useHeaderColor } from "~/context";

export default function Project() {
  const { setHeaderColor } = useHeaderColor();
  const router = useNavigate();

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);
  return (
    <div className="h-full flex flex-col gap-6 md:gap-12 items-start ml-10 my-10 md:my-auto">
      <div onClick={() => router('/mosaic')} className="hover:cursor-pointer">
        <p className="uppercase text-titleMobile md:text-title text-left font-neueRegular text-orange hover:text-redHome">MOSAIC</p>
      </div>
      <div onClick={() => router('/portfolio')} className="hover:cursor-pointer">
        <p className="uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome">PORTEFOLIO</p>
      </div>
      <div onClick={() => router('/capiche')} className="hover:cursor-pointer">
        <p className="uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome">CAPICHE</p>
      </div>
      <div onClick={() => router('/logofolio')} className="hover:cursor-pointer">
        <p className="uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome">LOGOfolio</p>
      </div>
      <div onClick={() => router('/cards')} className="hover:cursor-pointer">
        <p className="uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome">CARTES</p>
      </div>
    </div>
  );
}