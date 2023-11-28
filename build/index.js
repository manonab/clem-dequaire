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
import { jsxDEV } from "react/jsx-dev-runtime";
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
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
var tailwind_default = "/build/_assets/tailwind-ST7GTQ7P.css";

// app/components/header/index.tsx
import { useNavigate } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Menu = () => {
  let router = useNavigate();
  return /* @__PURE__ */ jsxDEV2("div", { className: "flex mx-auto justify-between py-[30px] px-[40px] linear-background", children: [
    /* @__PURE__ */ jsxDEV2("div", { onClick: () => router("/"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV2("p", { className: "text-grayBlack font-kateMedium text-3xl leading-8", children: "C." }, void 0, !1, {
      fileName: "app/components/header/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/header/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2(
      "div",
      {
        className: "flex justify-center items-center",
        children: [
          { path: "/home", name: "Home" },
          { path: "/about", name: "About" },
          { path: "/values", name: "My Values" },
          { path: "/projects", name: "Projects" }
        ].map((route) => /* @__PURE__ */ jsxDEV2(
          "div",
          {
            className: "px-5 w-auto",
            onClick: () => router(`${route.path}`),
            children: /* @__PURE__ */ jsxDEV2("p", { className: "leading-4 text-grayBlack hover:cursor-pointer text-xs font-clash text-black", children: route.name }, void 0, !1, {
              fileName: "app/components/header/index.tsx",
              lineNumber: 27,
              columnNumber: 13
            }, this)
          },
          route.path,
          !1,
          {
            fileName: "app/components/header/index.tsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/header/index.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV2("div", { onClick: () => router("/contact"), children: /* @__PURE__ */ jsxDEV2("p", { className: "text-xs hover:cursor-pointer font-clashSemibold underline", children: "Let\u2019s work together" }, void 0, !1, {
      fileName: "app/components/header/index.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/header/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/common/layout/index.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Layout = ({ children }) => /* @__PURE__ */ jsxDEV3("div", { className: "h-screen bg-mainColor w-screen", children: [
  /* @__PURE__ */ jsxDEV3(Menu, {}, void 0, !1, {
    fileName: "app/common/layout/index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("main", { children }, void 0, !1, {
    fileName: "app/common/layout/index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/common/layout/index.tsx",
  lineNumber: 12,
  columnNumber: 5
}, this);

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: /* @__PURE__ */ jsxDEV4(Layout, { children: [
      /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Project
});

// app/styles/assets/eye.png
var eye_default = "/build/_assets/eye-CKRM674F.png";

// app/styles/assets/image1.png
var image1_default = "/build/_assets/image1-CTTH335I.png";

// app/styles/assets/image2.png
var image2_default = "/build/_assets/image2-EVRSEZIK.png";

// app/styles/assets/image3.png
var image3_default = "/build/_assets/image3-Z4SPUBSX.png";

// app/styles/assets/image4.png
var image4_default = "/build/_assets/image4-TNG7FKDR.png";

// app/styles/assets/image5.png
var image5_default = "/build/_assets/image5-SNRTZSIU.png";

// app/styles/assets/image6.png
var image6_default = "/build/_assets/image6-W5356ZSH.png";

// app/styles/assets/image7.png
var image7_default = "/build/_assets/image7-G4CFWDGH.png";

// app/styles/assets/image8.png
var image8_default = "/build/_assets/image8-344HZ4MV.png";

// app/styles/assets/image9.png
var image9_default = "/build/_assets/image9-DNNGWOFO.png";

// app/styles/assets/image10.png
var image10_default = "/build/_assets/image10-PE62ZTPI.png";

// app/styles/assets/logo.png
var logo_default = "/build/_assets/logo-JRSPZ2IB.png";

// app/styles/assets/mosaic.png
var mosaic_default = "/build/_assets/mosaic-7QDG5ZMK.png";

// app/styles/assets/bear.png
var bear_default = "/build/_assets/bear-XFIOM2CT.png";

// app/styles/assets/capiche.png
var capiche_default = "/build/_assets/capiche-ET66KVMZ.png";

// app/styles/assets/becks.png
var becks_default = "/build/_assets/becks-PBRWWEAP.png";

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
  becks: becks_default
};

// app/routes/projects.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Project() {
  return /* @__PURE__ */ jsxDEV5(
    "div",
    {
      className: "rounded-[20px] mx-auto container w-[875px] h-[559px] z-10",
      children: /* @__PURE__ */ jsxDEV5("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV5("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }, void 0, !1, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV5("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }, void 0, !1, {
          fileName: "app/routes/projects.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV5(
          "img",
          {
            src: Images.becks,
            alt: "victoria beckham image",
            className: "w-full h-[372px]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/projects.tsx",
            lineNumber: 10,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/projects.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/projects.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Contact() {
  return /* @__PURE__ */ jsxDEV6(
    "div",
    {
      className: "rounded-[20px] mx-auto container w-[875px] h-[559px] z-10",
      children: /* @__PURE__ */ jsxDEV6("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV6("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV6("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV6(
          "img",
          {
            src: Images.becks,
            alt: "victoria beckham image",
            className: "w-full h-[372px]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 10,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/contact.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useEffect as useEffect2, useState as useState2 } from "react";
import { motion as motion3 } from "framer-motion";

// app/components/home/background-slider.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var BackgroundSlider = ({ isVisible = !1 }) => {
  let [isHovered, setIsHovered] = useState(!1);
  return useEffect(() => {
    let timer = setTimeout(() => {
      setIsHovered(!0);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []), useEffect(() => {
    let timer = setTimeout(() => {
      setIsHovered(!0);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []), /* @__PURE__ */ jsxDEV7(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
      className: `${isVisible ? "w-full md:min-h-[910px] flex justify-between items-start z-10 h-full inset-0 absolute -top-20 bg_slider " : "hidden"} ${isHovered && "hovered"}`,
      children: /* @__PURE__ */ jsxDEV7("div", { className: "flex-col", children: [
        /* @__PURE__ */ jsxDEV7("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2s" }, children: "for" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.1s" }, children: "bold" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.2s" }, children: "mind" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.3s" }, children: "only" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/background-slider.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/home/background-slider.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
}, background_slider_default = BackgroundSlider;

// app/components/home/index.tsx
import { motion as motion2 } from "framer-motion";

// app/styles/assets/big-arrow.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var BigArrow = () => /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "51", viewBox: "0 0 15 51", fill: "none", children: /* @__PURE__ */ jsxDEV8("path", { d: "M6.7929 50.7071C7.18342 51.0976 7.81658 51.0976 8.20711 50.7071L14.5711 44.3431C14.9616 43.9526 14.9616 43.3195 14.5711 42.9289C14.1805 42.5384 13.5474 42.5384 13.1569 42.9289L7.5 48.5858L1.84315 42.9289C1.45262 42.5384 0.819458 42.5384 0.428934 42.9289C0.0384097 43.3195 0.0384097 43.9526 0.428934 44.3431L6.7929 50.7071ZM6.5 4.37114e-08L6.5 50L8.5 50L8.5 -4.37114e-08L6.5 4.37114e-08Z", fill: "black" }, void 0, !1, {
  fileName: "app/styles/assets/big-arrow.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/styles/assets/big-arrow.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/components/home/index.tsx
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// app/styles/assets/arrow-right.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var ArrowRight = () => /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", width: "38", height: "16", viewBox: "0 0 38 16", fill: "none", children: /* @__PURE__ */ jsxDEV9("path", { d: "M37.7071 8.70711C38.0976 8.31658 38.0976 7.68342 37.7071 7.29289L31.3431 0.928932C30.9526 0.538408 30.3195 0.538408 29.9289 0.928932C29.5384 1.31946 29.5384 1.95262 29.9289 2.34315L35.5858 8L29.9289 13.6569C29.5384 14.0474 29.5384 14.6805 29.9289 15.0711C30.3195 15.4616 30.9526 15.4616 31.3431 15.0711L37.7071 8.70711ZM0 9L37 9V7L0 7L0 9Z", fill: "black" }, void 0, !1, {
  fileName: "app/styles/assets/arrow-right.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/styles/assets/arrow-right.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/components/home/description.tsx
import { useNavigate as useNavigate2 } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Description = () => {
  let router = useNavigate2();
  return /* @__PURE__ */ jsxDEV10("div", { className: "w-full h-auto flex flex-col", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "w-full h-full bg-yellowHome mx-auto py-48 flex flex-col gap-[150px]", children: [
      /* @__PURE__ */ jsxDEV10("p", { className: "w-[1100px] ml-24 text-left text-orange text-[64px] leading-[57.6px] font-neueMedium", children: "Anchour is a hard-working marketing agency that propels good companies to discover greatness." }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("p", { className: "w-[1100px] ml-48 text-right text-orange text-[64px] leading-[57.6px] font-neueMedium", children: "We\u2019re pragmatic creatives who get our kicks helping brands win through design, digital experiences, and strategy." }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { onClick: () => router("/about"), className: "hover:cursor-pointer ml-20 flex border-b-black border-b-2 w-[184px] pb-4 items-center justify-around", children: [
        /* @__PURE__ */ jsxDEV10("p", { className: "uppercase text-xl	font-footer", children: "learn more" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10(ArrowRight, {}, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "w-full h-screen bg-saumon", children: /* @__PURE__ */ jsxDEV10("div", { className: "w-[800px] break-words", children: /* @__PURE__ */ jsxDEV10("p", { className: "text-[250px] text-uppercase ", children: "Services" }, void 0, !1, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/description.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}, description_default = Description;

// app/components/home/index.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}, timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96]
}, HomeComponent = () => /* @__PURE__ */ jsxDEV11(ParallaxProvider, { children: [
  /* @__PURE__ */ jsxDEV11(Parallax, { speed: -30, children: [
    /* @__PURE__ */ jsxDEV11(
      motion2.div,
      {
        className: "w-screen h-screen z-10 flex justify-between items-start",
        initial: "hidden",
        animate: "visible",
        variants: sectionVariants,
        transition: { ...timing },
        children: [
          /* @__PURE__ */ jsxDEV11(
            motion2.img,
            {
              src: Images.mosaic,
              alt: "mosaic image",
              className: "w-[310px] h-[425px]",
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              transition: { ...timing, delay: 0.2 }
            },
            void 0,
            !1,
            {
              fileName: "app/components/home/index.tsx",
              lineNumber: 30,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV11(
            motion2.div,
            {
              className: "relative",
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              transition: { ...timing, delay: 1.3 },
              children: [
                /* @__PURE__ */ jsxDEV11(
                  motion2.img,
                  {
                    src: Images.bear,
                    alt: "bear image",
                    className: "w-[550px] h-[600px] mt-[80px]",
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { ...timing, delay: 0.5 }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/home/index.tsx",
                    lineNumber: 44,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV11(
                  motion2.p,
                  {
                    className: "text-center text-mainColor absolute top-[50%]  transform translate(-50%, -50%) font-neueMedium text-[50px]",
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { ...timing, delay: 0.7 },
                    children: "Welcome to my portfolio."
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/home/index.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/home/index.tsx",
              lineNumber: 38,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV11(
            motion2.img,
            {
              src: Images.capiche,
              alt: "capiche image",
              className: "w-[300px] h-[380px] opacity-[0.9] mt-[300px]",
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
              transition: { ...timing, delay: 1.5 }
            },
            void 0,
            !1,
            {
              fileName: "app/components/home/index.tsx",
              lineNumber: 61,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/home/index.tsx",
        lineNumber: 23,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      motion2.div,
      {
        className: "mx-auto mb-[450px] pl-40 mt-[50px]  flex-col flex items-center gap-3",
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        transition: { ...timing, delay: 2 },
        children: [
          /* @__PURE__ */ jsxDEV11(BigArrow, {}, void 0, !1, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 76,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "SCROLL & ROLL" }, void 0, !1, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/home/index.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/home/index.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV11(Parallax, { speed: -15, children: /* @__PURE__ */ jsxDEV11(description_default, {}, void 0, !1, {
    fileName: "app/components/home/index.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/home/index.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/home/index.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this), home_default = HomeComponent;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function Index() {
  let [state, setState] = useState2({
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
  return useEffect2(() => {
    let fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);
    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []), useEffect2(() => {
    state.currentImage === images.length - 1 && setTimeout(() => {
      setState((prev) => ({ ...prev, showLastPart: !0 }));
    }, 1500);
  }, [state.currentImage, images.length]), useEffect2(() => {
    state.showLastPart && setTimeout(() => {
      setState((prev) => ({ ...prev, animationFinished: !0 }));
    }, 4e3);
  }, [state.showLastPart]), /* @__PURE__ */ jsxDEV12(
    "div",
    {
      className: `${state.currentImage === images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`,
      children: [
        /* @__PURE__ */ jsxDEV12(
          motion3.div,
          {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            children: !state.animationFinished && /* @__PURE__ */ jsxDEV12(
              "img",
              {
                src: images[state.currentImage],
                alt: "Image",
                width: 400,
                height: 400,
                className: "rounded mx-auto"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 75,
            columnNumber: 7
          },
          this
        ),
        state.showLastPart && /* @__PURE__ */ jsxDEV12(background_slider_default, { isVisible: !state.animationFinished }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 91,
          columnNumber: 30
        }, this),
        state.animationFinished && /* @__PURE__ */ jsxDEV12(home_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 35
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 71,
      columnNumber: 5
    },
    this
  );
}

// app/routes/values.tsx
var values_exports = {};
__export(values_exports, {
  default: () => Values
});
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function Values() {
  return /* @__PURE__ */ jsxDEV13(
    "div",
    {
      className: "rounded-[20px] mx-auto container w-[875px] h-[559px] z-10",
      children: /* @__PURE__ */ jsxDEV13("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV13("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV13("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV13(
          "img",
          {
            src: Images.becks,
            alt: "victoria beckham image",
            className: "w-full h-[372px]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/values.tsx",
            lineNumber: 10,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/values.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/values.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV14(
    "div",
    {
      className: "rounded-[20px] mx-auto container w-[875px] h-[559px] z-10",
      children: /* @__PURE__ */ jsxDEV14("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV14("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV14("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV14(
          "img",
          {
            src: Images.becks,
            alt: "victoria beckham image",
            className: "w-full h-[372px]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/about.tsx",
            lineNumber: 10,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/about.tsx",
      lineNumber: 5,
      columnNumber: 5
    },
    this
  );
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function Home() {
  return /* @__PURE__ */ jsxDEV15("div", { className: "my-20", children: /* @__PURE__ */ jsxDEV15(home_default, {}, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6PCYKVL5.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-P4DS5TL5.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-43WGSL2O.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CKPTL6UY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JRASTSTQ.js", imports: ["/build/_shared/chunk-D3BF25VY.js", "/build/_shared/chunk-FW5BL6XR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-RXEMAGFP.js", imports: ["/build/_shared/chunk-FW5BL6XR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-J3KIIWA4.js", imports: ["/build/_shared/chunk-FW5BL6XR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-SYKHTHR5.js", imports: ["/build/_shared/chunk-D3BF25VY.js", "/build/_shared/chunk-FW5BL6XR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-TYSZRZQB.js", imports: ["/build/_shared/chunk-FW5BL6XR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/values": { id: "routes/values", parentId: "root", path: "values", index: void 0, caseSensitive: void 0, module: "/build/routes/values-336ZMCGR.js", imports: ["/build/_shared/chunk-FW5BL6XR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "cc9ea470", hmr: { runtime: "/build/_shared/chunk-43WGSL2O.js", timestamp: 1701167603093 }, url: "/build/manifest-CC9EA470.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
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
//# sourceMappingURL=index.js.map
