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
    <div className="h-full">
      <div onClick={() => console.log('nothing from now')} className="hover:cursor-pointer">
        <p className="text-[180px] my-20 text-center  font-neueRegular text-orange leading-[90%]">PORTEFOLIO</p>
      </div>
      <div onClick={() => router('/mosaic')} className="hover:cursor-pointer">
        <p className="text-[180px] my-20 text-left ml-28 font-neueRegular text-redHome leading-[90%]">MOSAIC</p>
      </div>
    </div>
  );
}