import React, { HtmlHTMLAttributes, useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { useHeaderColor } from "~/context";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export const Menu: React.FC = () => {
  const router = useNavigate();
  const params = useParams();
  const [selected, setSelected] = useState<string>("/home")
  const { headerColor } = useHeaderColor();

  const pathTextMapping = [
    { path: "/home", name: "accueil" },
    { path: "/values", name: "mes valeurs" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" }
  ];

  const handleChange = (route: string) => {
    setSelected(route)
    router(`${route}`)
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`${headerColor} flex mx-auto justify-between items-center py-[30px] px-[40px]`}>
      <div onClick={() => router('/home')} className="hover:cursor-pointer h-[70px]">
        <Logo />
      </div>
      <div
        className="flex justify-center items-center gap-9">
        {pathTextMapping.map((route) => (
          <div
            className="w-auto"
            key={route.path}
            onClick={() => handleChange(route.path)}
          >
            <p className={`${selected === route.path ? "text-redHome" : " text-grayBlack"} hover:text-redHome leading-4 hover:cursor-pointer text-[18px] font-clash text-black`}>
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
