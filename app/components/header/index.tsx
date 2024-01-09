import React from "react";
import { useNavigate } from "@remix-run/react";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";

export const Menu: React.FC = () => {
  const router = useNavigate();
  const { headerColor } = useHeaderColor();

  const pathTextMapping = [
    { path: "/about", name: "About" },
    { path: "/values", name: "My Values" },
    { path: "/services", name: "Services" },
    { path: "/projects", name: "Projects" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`${headerColor} flex mx-auto justify-between py-[30px] px-[40px]`}>
      <div onClick={() => router('/home')} className="hover:cursor-pointer">
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
    </motion.div>
  );
};
