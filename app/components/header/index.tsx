import React from "react";
import { useNavigate } from "@remix-run/react";

export const Menu: React.FC = () => {
  const router = useNavigate();

  const pathTextMapping = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/values", name: "My Values" },
    { path: "/projects", name: "Projects" }
  ];

  return (
    <div className={`flex mx-auto justify-between py-[30px] px-[40px] linear-background`}>
      <div onClick={() => router('/')} className="hover:cursor-pointer">
        <p className="text-grayBlack font-kateMedium text-3xl leading-8">C.</p>
      </div>
      <div
        className="flex justify-center items-center">
        {pathTextMapping.map((route) => (
          <div
            className="px-5 w-auto"
            key={route.path}
            onClick={() => router(`${route.path}`)}
          >
            <p className="leading-4 text-grayBlack hover:cursor-pointer text-xs font-clash text-black">
              {route.name}
            </p>
          </div>
        ))}
      </div>
      <div onClick={() => router('/contact')}>
        <p className="text-xs hover:cursor-pointer font-clashSemibold underline">Let’s work together</p>
      </div>
    </div>
  );
};
