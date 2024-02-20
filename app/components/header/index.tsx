import React from "react";
import { useNavigate } from "@remix-run/react";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";

export const Menu: React.FC = () => {
  const router = useNavigate();
  const { headerColor } = useHeaderColor();

  const pathTextMapping = [
    { path: "/about", name: "à propos" },
    { path: "/values", name: "mes valeurs" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`${headerColor} flex mx-auto justify-between py-[30px] px-[40px]`}>
      <div onClick={() => router('/home')} className="hover:cursor-pointer">
        <p className="text-orange font-kateMedium text-[52px] leading-8">C.</p>
      </div>
      <div
        className="flex justify-center items-center gap-4">
        {pathTextMapping.map((route) => (
          <div
            className="w-auto"
            key={route.path}
            onClick={() => router(`${route.path}`)}
          >
            <p className="leading-4 text-grayBlack hover:cursor-pointer text-[18px] font-clash text-black">
              {route.name}
            </p>
          </div>
        ))}
      </div>
      <div onClick={() => router('/contact')}>
        <p className="text-[15px] hover:cursor-pointer font-clashSemibold uppercase underline">Rencontrons-nous</p>
      </div>
    </motion.div>
  );
};
