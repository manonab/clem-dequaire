import {
  Parallax,
  ParallaxProvider
} from "/build/_shared/chunk-5T6BUAZE.js";
import {
  ArrowRight
} from "/build/_shared/chunk-Z7AT2O2U.js";
import {
  BigArrow
} from "/build/_shared/chunk-OI4BMN2D.js";
import {
  motion
} from "/build/_shared/chunk-GX2C7XOP.js";
import {
  Images
} from "/build/_shared/chunk-3SRQZ3IO.js";
import {
  useNavigate
} from "/build/_shared/chunk-FWVAADBG.js";
import {
  Contact
} from "/build/_shared/chunk-FZ2F3HJQ.js";
import {
  useHeaderColor
} from "/build/_shared/chunk-DIGSRBO4.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/home/index.tsx
var import_react3 = __toESM(require_react(), 1);

// app/components/home/description.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/description.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/description.tsx"
  );
  import.meta.hot.lastModified = "1712935291036.3447";
}
var Description = () => {
  _s();
  const router = useNavigate();
  const [scrollPosition, setScrollPosition] = (0, import_react.useState)(0);
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  const isServicesSectionVisible = scrollPosition > 1350;
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 1150) {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `hidden w-full h-auto md:flex flex-col ${isServicesSectionVisible ? "bg-mainColor" : "bg-yellowHome"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full mx-auto flex flex-col gap-[150px] py-32", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-[1100px] ml-24 text-left text-orange text-[53px] leading-[57.6px] font-neueCondensed", children: [
          "Le courage de nos id\xE9es, la passion de les partager. Parce que chaque histoire m\xE9rite qu\u2019on la raconte, ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-redHome font-bold", children: "qu\u2019attendons nous pour commencer ?" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 50,
            columnNumber: 217
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-[1100px] ml-48 text-right text-orange text-[53px] leading-[57.6px] font-neueCondensed", children: "Consultante en communication et cr\xE9ative passionn\xE9e, je m\u2019efforce d\u2019aider votre projet \xE0 grandir gr\xE2ce au design et au marketing digital." }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/about"), className: "hover:cursor-pointer ml-24 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-xs	font-footer", children: "En savoir plus" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 55,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto h-full relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex items-center justify-end pr-10 gap-3 relative w-full`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.service, alt: "Service" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-right font-neueRegular uppercase text-bannerTitile text-redHome", children: "SERVICES" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-around my-36 mx-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Communication" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle mr-4", children: "&" }, void 0, false, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 69,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle", children: "marketing" }, void 0, false, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 70,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle ml-20", children: "digital." }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Design" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Consulting" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/services"), className: "mb-[250px] hover:cursor-pointer ml-24 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-xs	font-footer", children: "En savoir plus" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Parallax, { speed: -15, className: "min-h-[450px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-screen bg-saumon relative pt-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex justify-center mt-44 items-baseline text-[100px] leading-[100px] text-royalBlue font-neueSemiBold", children: [
            "Like what you s",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images?.rabbit, className: "w-[130px] bg-center rounded-2xl mx-2" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 88,
              columnNumber: 154
            }, this) }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 88,
              columnNumber: 148
            }, this),
            "?"
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-footer font-medium leading-[100px] text-center text-[80px]", children: "Restons en contact" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/contact"), className: "py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto", children: "Me contacter" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:hidden h-full w-full gap-12 mt-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.homeMobile, width: "200px" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-homeMobileTitle text-redHome font-neueRegular -mt-[100px] ml-8", children: [
          "Tout",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 100,
            columnNumber: 98
          }, this),
          " commence",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 100,
            columnNumber: 116
          }, this),
          " par une",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 100,
            columnNumber: 133
          }, this),
          " id\xE9e. "
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-6 my-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-condensed text-orange text-homeMobileContent max-w-[300px]", children: "Consultante en communication et cr\xE9ative passionn\xE9e, je m\u2019efforce d\u2019aider votre marque \xE0 grandir gr\xE2ce au design et au marketing digital." }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BigArrow, {}, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 106,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "SCROLL & ROLL" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 107,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.homeMobile2, width: "160px" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellowHome w-full pb-24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-20 mb-10 m-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-condensed text-orange text-homeMobileContent max-w-[300px]", children: [
          "Le courage de nos id\xE9es, la passion de les partager. Parce que vous avez quelque chose \xE0 raconter, ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-redHome font-bold", children: "qu\u2019attendons nous pour commencer ?" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 114,
            columnNumber: 191
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-4 mb-5 font-neueRegular text-redHome text-homeMobileServices", children: "services" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 items-start mx-4 my-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-grayBlack font-footer font-bold", children: "Communication" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.line, className: "-mt-3" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-grayBlack font-footer font-bold", children: "Marketing digital" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.line, className: "-mt-3" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-grayBlack font-footer font-bold", children: "Design" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.line, className: "-mt-3" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-grayBlack font-footer font-bold", children: "Consulting" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.line, className: "-mt-3" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase font-footer text-grayBlack text-[8px] mx-4 my-5", children: "EN SAVOIR PLUS" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "m-4 my-5 font-neueRegular text-redHome text-homeMobileServices", children: "projets" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-auto whitespace-nowrap ml-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-evenly space-x-6 py-5 px-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { onClick: () => router("/capiche"), src: Images.homeCapiche, alt: "Logo de capiche", className: "w-[130px] mx-5" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { onClick: () => router("/mosaic"), src: Images.homeMosaic, alt: "Image 2", className: "w-[130px] mx-5" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { onClick: () => router("/portfolio"), src: Images.homePortfolio, alt: "Image 3", className: "w-[130px] ml-5 mr-10" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase font-footer text-grayBlack text-[8px] mx-4 my-5", children: "EN SAVOIR PLUS" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-mainColor w-full pb-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Contact, {}, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/description.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s(Description, "UyLNY1PERkp3IFoOmCrlv9yCLA8=", false, function() {
  return [useNavigate];
});
_c = Description;
var description_default = Description;
var _c;
$RefreshReg$(_c, "Description");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/index.tsx"
  );
  import.meta.hot.lastModified = "1712868277867.905";
}
var timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96]
};
var HomeComponent = () => {
  _s2();
  const {
    setHeaderColor
  } = useHeaderColor();
  (0, import_react3.useEffect)(() => {
    setHeaderColor("#FCF6EF");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ParallaxProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Parallax, { speed: -30, className: "hidden md:flex flex-col justify-around items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(motion.div, { transition: {
      ...timing,
      delay: 2
    }, className: "flex flex-col items-center justify-evenly h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueRegular text-redHome text-welcome text-center", children: "Bienvenue" }, void 0, false, {
        fileName: "app/components/home/index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center gap-3 mb-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BigArrow, {}, void 0, false, {
          fileName: "app/components/home/index.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "SCROLL & ROLL" }, void 0, false, {
          fileName: "app/components/home/index.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Parallax, { speed: -15, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(description_default, {}, void 0, false, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/index.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s2(HomeComponent, "xtET3H4yL2Q/OcMWlOKzk0FPBeI=", false, function() {
  return [useHeaderColor];
});
_c2 = HomeComponent;
var home_default = HomeComponent;
var _c2;
$RefreshReg$(_c2, "HomeComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  home_default
};
//# sourceMappingURL=/build/_shared/chunk-VEMMLYKP.js.map
