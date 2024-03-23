import {
  motion
} from "/build/_shared/chunk-HC72RTTB.js";
import {
  ArrowRight
} from "/build/_shared/chunk-4XKXEAD2.js";
import {
  Parallax,
  ParallaxProvider
} from "/build/_shared/chunk-FYYCLQBT.js";
import {
  useNavigate
} from "/build/_shared/chunk-P4DS5TL5.js";
import {
  Images
} from "/build/_shared/chunk-GMZI2DNI.js";
import {
  useHeaderColor
} from "/build/_shared/chunk-WSSTHBAM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/home/index.tsx
var import_react3 = __toESM(require_react(), 1);

// app/assets/big-arrow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/assets/big-arrow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/assets/big-arrow.tsx"
  );
  import.meta.hot.lastModified = "1701346336778.4773";
}
var BigArrow = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "51", viewBox: "0 0 15 51", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M6.7929 50.7071C7.18342 51.0976 7.81658 51.0976 8.20711 50.7071L14.5711 44.3431C14.9616 43.9526 14.9616 43.3195 14.5711 42.9289C14.1805 42.5384 13.5474 42.5384 13.1569 42.9289L7.5 48.5858L1.84315 42.9289C1.45262 42.5384 0.819458 42.5384 0.428934 42.9289C0.0384097 43.3195 0.0384097 43.9526 0.428934 44.3431L6.7929 50.7071ZM6.5 4.37114e-08L6.5 50L8.5 50L8.5 -4.37114e-08L6.5 4.37114e-08Z", fill: "black" }, void 0, false, {
    fileName: "app/assets/big-arrow.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/big-arrow.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_c = BigArrow;
var _c;
$RefreshReg$(_c, "BigArrow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/description.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1711219053705.0044";
}
var Description = () => {
  _s();
  const router = useNavigate();
  const [scrollPosition, setScrollPosition] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isServicesSectionVisible = scrollPosition > 2e3;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `w-full h-auto flex flex-col ${isServicesSectionVisible ? "bg-saumon" : "bg-yellowHome"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-full mx-auto flex flex-col gap-[150px] py-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "w-[1100px] ml-24 text-left text-orange text-[53px] leading-[57.6px] font-neueCondensed", children: "Le courage de nos id\xE9es, la passion de les partager. Parce que vous avez quelque chose \xE0 raconter, qu\u2019attendons nous pour commencer ?" }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "w-[1100px] ml-48 text-right text-orange text-[53px] leading-[57.6px] font-neueCondensed", children: "Consultante en communication et cr\xE9ative passionn\xE9e, je m\u2019efforce d\u2019aider votre marque \xE0 grandir gr\xE2ce au design et au marketing digital." }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => router("/about"), className: "mb-[250px] hover:cursor-pointer ml-20 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "uppercase text-xs	font-footer", children: "En savoir plus" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArrowRight, {}, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen h-full relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start w-full -mt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[800px] ml-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-[250px] text-redHome text-center font-neueRegular uppercase leading-[225px]", children: "Services" }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-around my-36 mx-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueBold  text-[67px] leading-[67px]", children: "Communication" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueBold  text-[67px] leading-[67px] mr-4", children: "&" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueBold  text-[67px] leading-[67px]", children: "marketing" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueBold  text-[67px] leading-[67px] ml-20", children: "digital." }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueBold  text-[67px] leading-[67px]", children: "Design" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueBold  text-[67px] leading-[67px]", children: "Consulting" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => router("/projects"), className: "mb-[250px] hover:cursor-pointer ml-20 flex flex-col mb-2 w-[115px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "uppercase text-xs font-footer", children: "VOIR PLUS" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArrowRight, {}, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 74,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b-black border-b-2 w-[115px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Parallax, { speed: -15, className: "min-h-[450px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-screen bg-mainColor relative pt-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "flex justify-center mt-44 items-baseline text-[100px] leading-[100px] text-royalBlue font-neueSemiBold", children: [
          "Like what you s",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: Images?.rabbit, className: "w-[130px] bg-center rounded-2xl mx-2" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 82,
            columnNumber: 152
          }, this) }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 82,
            columnNumber: 146
          }, this),
          "?"
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-black font-footer font-medium leading-[100px] text-center text-[80px]", children: "Restons en contact" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: () => router("/contact"), className: "py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto", children: "Me contacter" }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/description.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s(Description, "QBI0Ju2lSjGd6MRcQ93MCzlngWM=", false, function() {
  return [useNavigate];
});
_c2 = Description;
var description_default = Description;
var _c2;
$RefreshReg$(_c2, "Description");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1711220590192.9995";
}
var sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
var timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96]
};
var HomeComponent = () => {
  _s2();
  const {
    setHeaderColor
  } = useHeaderColor();
  const [isHovered, setIsHovered] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    setHeaderColor("#FCF6EF");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ParallaxProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Parallax, { speed: -30, className: "flex flex-col justify-around items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(motion.div, { className: "w-full z-10", initial: "hidden", animate: "visible", variants: sectionVariants, transition: {
        ...timing
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(motion.div, { className: "relative flex flex-col items-center justify-center", initial: {
        opacity: 0,
        y: 100
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        ...timing,
        delay: 0.5
      }, whileHover: {
        scale: 1.1
      }, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { width: "318", height: "349", viewBox: "0 0 318 349", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: `w-[550px] h-[600px] mt-[80px] hidden-image ${isHovered ? "opacity-100" : "opacity-0"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("clipPath", { id: "clip-path", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M312.993 88.6437L312.993 88.6447C316.828 101.896 317.111 115.881 316.462 130.216C316.235 135.224 315.894 140.277 315.552 145.355C314.914 154.806 314.271 164.347 314.344 173.862C314.344 184.337 315.229 194.84 316.116 205.365C316.477 209.645 316.838 213.928 317.139 218.214C318.184 233.046 318.522 247.922 315.701 262.848L315.701 262.849C310.284 292.703 292.23 322.759 264.707 337.576C236.957 352.394 199.72 351.771 169.247 340.913C154.013 335.485 140.469 327.446 127.654 318.726C121.75 314.708 116.002 310.546 110.314 306.428C109.829 306.076 109.345 305.726 108.861 305.375C102.699 300.916 96.5992 296.527 90.4426 292.452C83.064 287.505 75.6001 282.987 68.3128 278.576C63.4436 275.629 58.6533 272.729 54.0201 269.781C42.4468 262.418 31.8406 254.746 23.38 245.25L23.3796 245.249C6.45875 226.466 -2.11463 200.169 0.592411 175.335C3.33831 152.085 15.7726 130.295 28.6551 107.719C29.5348 106.178 30.4166 104.632 31.2975 103.083C32.2818 101.351 33.2638 99.6154 34.2467 97.8781C47.0243 75.2932 59.9593 52.4299 80.2886 34.7878C102.181 15.7894 132.2 3.05259 164.026 0.547019L164.019 0.447327L164.027 0.547014C195.626 -1.95847 228.808 6.18453 256.347 22.054C283.662 38.1334 305.548 61.9332 312.993 88.6437Z", fill: "#fff" }, void 0, false, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 73,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 72,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: Images.bear, alt: "bear image", className: `w-[550px] h-[600px] mt-[80px] hidden-image ${isHovered ? "opacity-100" : "opacity-0"}` }, void 0, false, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/index.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(motion.p, { className: "text-center text-redHome\n              font-neueMedium text-[200px]", initial: {
          opacity: 0,
          y: 50
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          ...timing,
          delay: 0.7
        }, children: "Bienvenue." }, void 0, false, {
          fileName: "app/components/home/index.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/index.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/home/index.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(motion.div, { className: "mx-auto mb-[450px] mt-[50px] flex-col flex items-center gap-3", initial: {
        opacity: 0,
        y: 100
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        ...timing,
        delay: 2
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BigArrow, {}, void 0, false, {
          fileName: "app/components/home/index.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "SCROLL & ROLL" }, void 0, false, {
          fileName: "app/components/home/index.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Parallax, { speed: -15, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(description_default, {}, void 0, false, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/index.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_s2(HomeComponent, "+XIFZvbl2Pm9K7P2+kXbvFXNHPk=", false, function() {
  return [useHeaderColor];
});
_c3 = HomeComponent;
var home_default = HomeComponent;
var _c3;
$RefreshReg$(_c3, "HomeComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  home_default
};
//# sourceMappingURL=/build/_shared/chunk-Q7TDIVXM.js.map
