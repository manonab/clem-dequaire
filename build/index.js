var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-S6YG7SZJ.css";

// app/components/header/index.tsx
import { useNavigate } from "@remix-run/react";

// app/context/index.tsx
import { createContext, useContext, useState } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var HeaderColorContext = createContext({
  headerColor: "",
  setHeaderColor: () => {
  }
}), useHeaderColor = () => useContext(HeaderColorContext), HeaderColorProvider = ({ children }) => {
  let [headerColor, setHeaderColor] = useState("linear-background");
  return /* @__PURE__ */ jsx2(HeaderColorContext.Provider, { value: { headerColor, setHeaderColor }, children });
};

// app/components/header/index.tsx
import { motion } from "framer-motion";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var Menu = () => {
  let router = useNavigate(), { headerColor } = useHeaderColor(), pathTextMapping = [
    { path: "/about", name: "About" },
    { path: "/values", name: "My Values" },
    { path: "/services", name: "Services" },
    { path: "/projects", name: "Projects" }
  ];
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
      className: `${headerColor} flex mx-auto justify-between py-[30px] px-[40px]`,
      children: [
        /* @__PURE__ */ jsx3("div", { onClick: () => router("/home"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsx3("p", { className: "text-grayBlack font-kateMedium text-3xl leading-8", children: "C." }) }),
        /* @__PURE__ */ jsx3(
          "div",
          {
            className: "flex justify-center items-center",
            children: pathTextMapping.map((route) => /* @__PURE__ */ jsx3(
              "div",
              {
                className: "px-5 w-auto",
                onClick: () => router(`${route.path}`),
                children: /* @__PURE__ */ jsx3("p", { className: "leading-4 text-grayBlack hover:cursor-pointer text-xs font-clash text-black", children: route.name })
              },
              route.path
            ))
          }
        ),
        /* @__PURE__ */ jsx3("div", { onClick: () => router("/contact"), children: /* @__PURE__ */ jsx3("p", { className: "text-xs hover:cursor-pointer font-clashSemibold underline", children: "Let\u2019s work together" }) })
      ]
    }
  );
};

// app/common/layout/index.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Layout = ({ children }) => /* @__PURE__ */ jsxs2("div", { className: "h-screen bg-mainColor w-screen", children: [
  /* @__PURE__ */ jsx4(Menu, {}),
  /* @__PURE__ */ jsx4("main", { children })
] });

// app/root.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsx5(HeaderColorProvider, { children: /* @__PURE__ */ jsxs3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs3("head", { children: [
      /* @__PURE__ */ jsx5("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx5(
        "link",
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        }
      ),
      /* @__PURE__ */ jsx5(Meta, {}),
      /* @__PURE__ */ jsx5(Links, {})
    ] }),
    /* @__PURE__ */ jsx5("body", { children: /* @__PURE__ */ jsxs3(Layout, { children: [
      /* @__PURE__ */ jsx5(Outlet, {}),
      /* @__PURE__ */ jsx5(ScrollRestoration, {}),
      /* @__PURE__ */ jsx5(Scripts, {}),
      /* @__PURE__ */ jsx5(LiveReload, {})
    ] }) })
  ] }) });
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Project
});

// app/assets/eye.png
var eye_default = "/build/_assets/eye-CKRM674F.png";

// app/assets/image1.png
var image1_default = "/build/_assets/image1-CTTH335I.png";

// app/assets/image2.png
var image2_default = "/build/_assets/image2-EVRSEZIK.png";

// app/assets/image3.png
var image3_default = "/build/_assets/image3-Z4SPUBSX.png";

// app/assets/image4.png
var image4_default = "/build/_assets/image4-TNG7FKDR.png";

// app/assets/image5.png
var image5_default = "/build/_assets/image5-SNRTZSIU.png";

// app/assets/image6.png
var image6_default = "/build/_assets/image6-W5356ZSH.png";

// app/assets/image7.png
var image7_default = "/build/_assets/image7-G4CFWDGH.png";

// app/assets/image8.png
var image8_default = "/build/_assets/image8-344HZ4MV.png";

// app/assets/image9.png
var image9_default = "/build/_assets/image9-DNNGWOFO.png";

// app/assets/image10.png
var image10_default = "/build/_assets/image10-PE62ZTPI.png";

// app/assets/logo.png
var logo_default = "/build/_assets/logo-JRSPZ2IB.png";

// app/assets/mosaic.png
var mosaic_default = "/build/_assets/mosaic-7QDG5ZMK.png";

// app/assets/bear.png
var bear_default = "/build/_assets/bear-XFIOM2CT.png";

// app/assets/capiche.png
var capiche_default = "/build/_assets/capiche-ET66KVMZ.png";

// app/assets/becks.png
var becks_default = "/build/_assets/becks-PBRWWEAP.png";

// app/assets/rabbit.png
var rabbit_default = "/build/_assets/rabbit-IAV27EE5.png";

// app/common/images/index.tsx
var Images = {
  eye: eye_default,
  image1: image1_default,
  image2: image2_default,
  image3: image3_default,
  image4: image4_default,
  image5: image5_default,
  image6: image6_default,
  image7: image7_default,
  image8: image8_default,
  image9: image9_default,
  image10: image10_default,
  logo: logo_default,
  mosaic: mosaic_default,
  bear: bear_default,
  capiche: capiche_default,
  becks: becks_default,
  rabbit: rabbit_default
};

// app/routes/projects.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function Project() {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      className: "rounded-[20px] mx-auto container w-[875px] h-[559px] z-10",
      children: /* @__PURE__ */ jsxs4("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsx6("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }),
        /* @__PURE__ */ jsx6("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }),
        /* @__PURE__ */ jsx6(
          "img",
          {
            src: Images.becks,
            alt: "victoria beckham image",
            className: "w-full h-[372px]"
          }
        )
      ] })
    }
  );
}

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Services
});
import { useEffect } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
function Services() {
  let { setHeaderColor } = useHeaderColor();
  return useEffect(() => {
    setHeaderColor("linear-services");
  }, [setHeaderColor]), /* @__PURE__ */ jsx7("div", { className: "bg-yellowHome w-full h-full" });
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function Contact() {
  return /* @__PURE__ */ jsx8(
    "div",
    {
      className: "animate__animated animate__zoomIn animate__delay-1.3s  rounded-[20px] mx-auto container w-[875px] h-[559px] z-10",
      children: /* @__PURE__ */ jsxs5("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsx8("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }),
        /* @__PURE__ */ jsx8("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }),
        /* @__PURE__ */ jsx8(
          "img",
          {
            src: Images.becks,
            alt: "victoria beckham image",
            className: "w-full h-[372px]"
          }
        )
      ] })
    }
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useEffect as useEffect4, useState as useState4 } from "react";
import { motion as motion4 } from "framer-motion";

// app/components/home/background-slider.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";
import { motion as motion2 } from "framer-motion";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var BackgroundSlider = ({ isVisible = !1 }) => {
  let [isHovered, setIsHovered] = useState2(!1), { setHeaderColor } = useHeaderColor();
  return useEffect2(() => {
    let timer = setTimeout(() => {
      setIsHovered(!0), setHeaderColor("bg_slider");
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setHeaderColor]), /* @__PURE__ */ jsx9(
    motion2.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
      className: `animate__animated animate__fadeInUpBig animate__delay-1.3s ${isVisible ? "w-full md:min-h-[910px] flex justify-between items-start z-10 h-full inset-0 absolute -top-20 bg_slider " : "hidden"} ${isHovered && "hovered"}`,
      children: /* @__PURE__ */ jsxs6("div", { className: "flex-col", children: [
        /* @__PURE__ */ jsx9("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2s" }, children: "for" }),
        /* @__PURE__ */ jsx9("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.1s" }, children: "bold" }),
        /* @__PURE__ */ jsx9("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.2s" }, children: "mind" }),
        /* @__PURE__ */ jsx9("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.3s" }, children: "only" })
      ] })
    }
  );
}, background_slider_default = BackgroundSlider;

// app/components/home/index.tsx
import { motion as motion3 } from "framer-motion";

// app/assets/big-arrow.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var BigArrow = () => /* @__PURE__ */ jsx10("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "51", viewBox: "0 0 15 51", fill: "none", children: /* @__PURE__ */ jsx10("path", { d: "M6.7929 50.7071C7.18342 51.0976 7.81658 51.0976 8.20711 50.7071L14.5711 44.3431C14.9616 43.9526 14.9616 43.3195 14.5711 42.9289C14.1805 42.5384 13.5474 42.5384 13.1569 42.9289L7.5 48.5858L1.84315 42.9289C1.45262 42.5384 0.819458 42.5384 0.428934 42.9289C0.0384097 43.3195 0.0384097 43.9526 0.428934 44.3431L6.7929 50.7071ZM6.5 4.37114e-08L6.5 50L8.5 50L8.5 -4.37114e-08L6.5 4.37114e-08Z", fill: "black" }) });

// app/components/home/index.tsx
import { Parallax as Parallax2, ParallaxProvider } from "react-scroll-parallax";

// app/components/home/description.tsx
import { useEffect as useEffect3, useState as useState3 } from "react";

// app/assets/arrow-right.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var ArrowRight = () => /* @__PURE__ */ jsx11("svg", { xmlns: "http://www.w3.org/2000/svg", width: "38", height: "16", viewBox: "0 0 38 16", fill: "none", children: /* @__PURE__ */ jsx11("path", { d: "M37.7071 8.70711C38.0976 8.31658 38.0976 7.68342 37.7071 7.29289L31.3431 0.928932C30.9526 0.538408 30.3195 0.538408 29.9289 0.928932C29.5384 1.31946 29.5384 1.95262 29.9289 2.34315L35.5858 8L29.9289 13.6569C29.5384 14.0474 29.5384 14.6805 29.9289 15.0711C30.3195 15.4616 30.9526 15.4616 31.3431 15.0711L37.7071 8.70711ZM0 9L37 9V7L0 7L0 9Z", fill: "black" }) });

// app/components/home/description.tsx
import { useNavigate as useNavigate2 } from "@remix-run/react";
import { Parallax } from "react-scroll-parallax";
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var Description = () => {
  let router = useNavigate2(), [scrollPosition, setScrollPosition] = useState3(0);
  useEffect3(() => {
    let handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let isServicesSectionVisible = scrollPosition > 2e3;
  return /* @__PURE__ */ jsxs7("div", { className: `w-full h-auto flex flex-col ${isServicesSectionVisible ? "bg-saumon" : "bg-yellowHome"}`, children: [
    /* @__PURE__ */ jsxs7("div", { className: "w-full h-full mx-auto flex flex-col gap-[150px] py-32", children: [
      /* @__PURE__ */ jsx12("p", { className: "w-[1100px] ml-24 text-left text-orange text-[64px] leading-[57.6px] font-neueMedium", children: "Anchour is a hard-working marketing agency that propels good companies to discover greatness." }),
      /* @__PURE__ */ jsx12("p", { className: "w-[1100px] ml-48 text-right text-orange text-[64px] leading-[57.6px] font-neueMedium", children: "We\u2019re pragmatic creatives who get our kicks helping brands win through design, digital experiences, and strategy." }),
      /* @__PURE__ */ jsxs7("div", { onClick: () => router("/about"), className: "mb-20 hover:cursor-pointer ml-28 flex border-b-black border-b-2 w-[184px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ jsx12("p", { className: "uppercase text-xl	font-footer", children: "learn more" }),
        /* @__PURE__ */ jsx12(ArrowRight, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "w-screen h-full relative", children: [
      /* @__PURE__ */ jsx12("div", { className: "flex items-start w-full -mt-24", children: /* @__PURE__ */ jsx12("div", { className: "w-[800px] ml-20", children: /* @__PURE__ */ jsx12("p", { className: "text-[250px] text-redHome text-center font-neueMedium uppercase leading-[225px] ", children: "Services" }) }) }),
      /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-around my-36", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsx12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "Digital" }),
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-around", children: [
            /* @__PURE__ */ jsx12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "&" }),
            /* @__PURE__ */ jsx12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "marketing" })
          ] }),
          /* @__PURE__ */ jsx12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "comms." })
        ] }),
        /* @__PURE__ */ jsx12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "Design" }),
        /* @__PURE__ */ jsx12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "Consulting" })
      ] }),
      /* @__PURE__ */ jsxs7("div", { onClick: () => router("/projects"), className: "mt-20 hover:cursor-pointer ml-20 flex border-b-black border-b-2 w-[184px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ jsx12("p", { className: "uppercase text-xl	font-footer", children: "what I do" }),
        /* @__PURE__ */ jsx12(ArrowRight, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx12(Parallax, { speed: -15, children: /* @__PURE__ */ jsxs7("div", { className: "w-full h-screen bg-mainColor relative pt-20 ", children: [
      /* @__PURE__ */ jsxs7("div", { className: "flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxs7("p", { className: "flex justify-center mt-44 items-center text-[100px] leading-[100px] text-royalBlue uppercase font-neueSemiBold", children: [
          "Like what you s",
          /* @__PURE__ */ jsx12("span", { children: /* @__PURE__ */ jsx12("img", { src: Images?.rabbit, className: "w-[130px] bg-center rounded-2xl mx-2" }) }),
          "?"
        ] }),
        /* @__PURE__ */ jsx12("p", { className: "text-black font-footer font-medium leading-[100px] text-center text-[90px]", children: "Let\u2019s keep in touch." })
      ] }),
      /* @__PURE__ */ jsx12("div", { onClick: () => router("/contact"), className: "hover:cursor-pointer border-black border my-20 rounded-3xl px-5 py-3 w-[200px] mx-auto", children: /* @__PURE__ */ jsx12("p", { className: "leading-[17.5px] font-bold text-sm text-center text-grayBlack", children: "CONTACT ME NOW" }) })
    ] }) })
  ] });
}, description_default = Description;

// app/components/home/index.tsx
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}, timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96]
}, HomeComponent = () => /* @__PURE__ */ jsxs8(ParallaxProvider, { children: [
  /* @__PURE__ */ jsxs8(Parallax2, { speed: -30, children: [
    /* @__PURE__ */ jsxs8(
      motion3.div,
      {
        className: "w-screen h-screen z-10 flex justify-between items-start",
        initial: "hidden",
        animate: "visible",
        variants: sectionVariants,
        transition: { ...timing },
        children: [
          /* @__PURE__ */ jsx13(
            motion3.img,
            {
              src: Images.mosaic,
              alt: "mosaic image",
              className: "w-[310px] h-[425px]",
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              transition: { ...timing, delay: 0.2 }
            }
          ),
          /* @__PURE__ */ jsxs8(
            motion3.div,
            {
              className: "relative",
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              transition: { ...timing, delay: 0.5 },
              children: [
                /* @__PURE__ */ jsx13(
                  motion3.img,
                  {
                    src: Images.bear,
                    alt: "bear image",
                    className: "w-[550px] h-[600px] mt-[80px]",
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { ...timing, delay: 0.5 }
                  }
                ),
                /* @__PURE__ */ jsx13(
                  motion3.p,
                  {
                    className: "text-center text-mainColor absolute top-[50%]  transform translate(-50%, -50%) font-neueMedium text-[50px]",
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { ...timing, delay: 0.7 },
                    children: "Welcome to my portfolio."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx13(
            motion3.img,
            {
              src: Images.capiche,
              alt: "capiche image",
              className: "w-[300px] h-[380px] opacity-[0.9] mt-[300px]",
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              transition: { ...timing, delay: 0.8 }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs8(
      motion3.div,
      {
        className: "mx-auto mb-[450px] pl-40 mt-[50px]  flex-col flex items-center gap-3",
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        transition: { ...timing, delay: 2 },
        children: [
          /* @__PURE__ */ jsx13(BigArrow, {}),
          /* @__PURE__ */ jsx13("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "SCROLL & ROLL" })
        ]
      }
    )
  ] }),
  /* @__PURE__ */ jsx13(Parallax2, { speed: -15, children: /* @__PURE__ */ jsx13(description_default, {}) })
] }), home_default = HomeComponent;

// app/routes/_index.tsx
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
function Index() {
  let [state, setState] = useState4({
    currentImage: 0,
    showLastPart: !1,
    animationFinished: !1
  }), images = [
    Images.eye,
    Images.image1,
    Images.image2,
    Images.image3,
    Images.image5,
    Images.image4,
    Images.image6,
    Images.image7,
    Images.image8,
    Images.image9,
    Images.image10,
    Images.logo
  ], startSlideShow = () => {
    let interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        currentImage: prev.currentImage < images.length - 1 ? prev.currentImage + 1 : prev.currentImage
      }));
    }, 150);
    return () => clearInterval(interval);
  };
  return useEffect4(() => {
    let fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);
    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []), useEffect4(() => {
    state.currentImage === images.length - 1 && setTimeout(() => {
      setState((prev) => ({ ...prev, showLastPart: !0 }));
    }, 1500);
  }, [state.currentImage, images.length]), useEffect4(() => {
    state.showLastPart && setTimeout(() => {
      setState((prev) => ({ ...prev, animationFinished: !0 }));
    }, 4e3);
  }, [state.showLastPart]), /* @__PURE__ */ jsxs9(
    "div",
    {
      className: `${state.currentImage === images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`,
      children: [
        /* @__PURE__ */ jsx14(
          motion4.div,
          {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            children: !state.animationFinished && /* @__PURE__ */ jsx14(
              "img",
              {
                src: images[state.currentImage],
                alt: "Image",
                width: 400,
                height: 400,
                className: "rounded mx-auto"
              }
            )
          }
        ),
        state.showLastPart && /* @__PURE__ */ jsx14(background_slider_default, { isVisible: !state.animationFinished }),
        state.animationFinished && /* @__PURE__ */ jsx14(home_default, {})
      ]
    }
  );
}

// app/routes/values.tsx
var values_exports = {};
__export(values_exports, {
  default: () => Values
});
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
function Values() {
  return /* @__PURE__ */ jsx15(
    "div",
    {
      className: "rounded-[20px] mx-auto container w-[875px] h-[559px] z-10",
      children: /* @__PURE__ */ jsxs10("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsx15("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }),
        /* @__PURE__ */ jsx15("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }),
        /* @__PURE__ */ jsx15(
          "img",
          {
            src: Images.becks,
            alt: "victoria beckham image",
            className: "w-full h-[372px]"
          }
        )
      ] })
    }
  );
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { useEffect as useEffect5 } from "react";
import { ParallaxProvider as ParallaxProvider2 } from "react-scroll-parallax";

// app/assets/big-down-arrow.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var BigDownArrow = () => /* @__PURE__ */ jsx16("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "148", viewBox: "0 0 16 148", fill: "none", children: /* @__PURE__ */ jsx16("path", { d: "M7.29289 147.707C7.68341 148.098 8.31658 148.098 8.7071 147.707L15.0711 141.343C15.4616 140.953 15.4616 140.319 15.0711 139.929C14.6805 139.538 14.0474 139.538 13.6568 139.929L7.99999 145.586L2.34314 139.929C1.95262 139.538 1.31945 139.538 0.928926 139.929C0.538402 140.319 0.538402 140.953 0.928926 141.343L7.29289 147.707ZM7 -4.37114e-08L6.99999 147L8.99999 147L9 4.37114e-08L7 -4.37114e-08Z", fill: "black" }) });

// app/routes/about.tsx
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
function About() {
  let { setHeaderColor } = useHeaderColor();
  return useEffect5(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]), /* @__PURE__ */ jsx17(ParallaxProvider2, { children: /* @__PURE__ */ jsxs11("div", { className: "flex-col flex gap-12 w-screen h-auto", children: [
    /* @__PURE__ */ jsxs11("div", { className: "flex items-end justify-between w-auto", children: [
      /* @__PURE__ */ jsxs11("div", { className: "min-w-[950px] flex-col flex", children: [
        /* @__PURE__ */ jsx17("div", { className: "w-[1259px] ml-10", children: /* @__PURE__ */ jsx17("p", { className: "font-neueSemiBold text-[200px] uppercase leading-[180px] text-orange font-medium", children: "IT\u2019S ALL ABOUT PASSION." }) }),
        /* @__PURE__ */ jsx17("div", { className: "w-[637px] ml-12 my-16", children: /* @__PURE__ */ jsx17("p", { className: "leading-[31.2px] text-justify text-2xl font-normal font-footer", children: "Lorem ipsum dolor sit amet consectetur. Rhoncus maecenas non tempor ut sed sapien semper quis sem. Enim aliquet tristique fringilla orci turpis erat pulvinar. Sapien facilisis tellus netus tortor. Molestie turpis a ultrices blandit ut imperdiet duis." }) })
      ] }),
      /* @__PURE__ */ jsx17("div", { className: "w-auto", children: /* @__PURE__ */ jsx17("p", { className: "mx-10 uppercase text-redHome text-[100px] font-medium font-neueMedium leading-[90px]", children: "Scroll" }) })
    ] }),
    /* @__PURE__ */ jsx17("div", { className: "self-end mr-[220px] -mb-[130px] z-[10]", children: /* @__PURE__ */ jsx17(BigDownArrow, {}) }),
    /* @__PURE__ */ jsxs11("div", { className: "bg-saumon h-full w-full flex-col flex", children: [
      /* @__PURE__ */ jsxs11("div", { className: "flex items-end justify-around", children: [
        /* @__PURE__ */ jsx17("div", { className: "bg-[#D9D9D9] w-[395px] h-[480px] rounded-[50px] -mt-10" }),
        /* @__PURE__ */ jsx17("p", { className: "-mb-40 z-[10] w-[802px] leading-[72px] text-royalBlue text-right text-[80px] font-neueMedium", children: "Lorem ipsum dolor 32% sit amet consectetur. Neque leo euismod id mauris." })
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-around mb-10 mt-28 mx-20", children: [
        /* @__PURE__ */ jsx17("p", { className: "text-[25px] leading-[32px] font-normal font-footer text-justify w-[640px]", children: "Lorem ipsum dolor sit amet consectetur. Rhoncus maecenas non tempor ut sed sapien semper quis sem. Enim aliquet tristique fringilla orci turpis erat pulvinar. Sapien facilisis tellus netus tortor. Molestie turpis a ultrices blandit ut imperdiet duis." }),
        /* @__PURE__ */ jsx17("div", { className: "bg-[#D9D9D9] z-0 w-[395px] h-[480px] rounded-[50px]" })
      ] })
    ] }),
    /* @__PURE__ */ jsx17("div", { className: "bg-mainColor h-full w-full flex-col flex gap-12" })
  ] }) });
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
import { jsx as jsx18 } from "react/jsx-runtime";
function Home() {
  return /* @__PURE__ */ jsx18("div", { className: "my-20", children: /* @__PURE__ */ jsx18(home_default, {}) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6ZCJKFA3.js", imports: ["/build/_shared/chunk-K2YDR5EM.js", "/build/_shared/chunk-C46C5URB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5AEGNCHP.js", imports: ["/build/_shared/chunk-Z4K5MLJP.js", "/build/_shared/chunk-HW7LTQEW.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-42BOXPFK.js", imports: ["/build/_shared/chunk-5KATJJYG.js", "/build/_shared/chunk-ZQKGU5GX.js", "/build/_shared/chunk-YPCXIP7Z.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-SADIETED.js", imports: ["/build/_shared/chunk-YPCXIP7Z.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-GNQOVOLX.js", imports: ["/build/_shared/chunk-ZQKGU5GX.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-HFACP3LC.js", imports: ["/build/_shared/chunk-5KATJJYG.js", "/build/_shared/chunk-ZQKGU5GX.js", "/build/_shared/chunk-YPCXIP7Z.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-RJDBSRYI.js", imports: ["/build/_shared/chunk-ZQKGU5GX.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-XLJY33VM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/values": { id: "routes/values", parentId: "root", path: "values", index: void 0, caseSensitive: void 0, module: "/build/routes/values-UUH2T7YJ.js", imports: ["/build/_shared/chunk-ZQKGU5GX.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "540e0144", hmr: void 0, url: "/build/manifest-540E0144.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/values": {
    id: "routes/values",
    parentId: "root",
    path: "values",
    index: void 0,
    caseSensitive: void 0,
    module: values_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
