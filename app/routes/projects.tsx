import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useHeaderColor } from "~/context";

export default function Project() {
  const { setHeaderColor } = useHeaderColor();
  const router = useNavigate();
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setHeaderColor("mainColor")
  }, [setHeaderColor]);
  const pathTextMappingMobile = [
    { path: "/mosaic", name: "mosaic" },
    { path: "/portfolio", name: "portfolio" },
    { path: "/capiche", name: "capiche" },
    { path: "/logofolio", name: "logos" }
  ];

  const handleChange = (route: string) => {
    setSelected(route);
    router(`${route}`);
  };

  return (
    <div
      className="md:hidden bg-mainColor z-[999] flex flex-col gap-12 justify-center items-center fixed top-0 left-0 w-full h-full w-full h-full z-50 overflow-y-auto"
    >
      <div className="flex items-start flex-col gap-6 w-full ml-5">
        {pathTextMappingMobile.map((route) => (
          <p
            key={route.path}
            onClick={() => {
              handleChange(route.path);
            }}
            className="text-orange uppercase hover:cursor-pointer text-[70px] leading-[90%] font-neueRegular"
          >
            {route.name}
          </p>
        ))}
      </div>
    </div>
  );
};