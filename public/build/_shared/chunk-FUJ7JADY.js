import {
  Parallax,
  ParallaxProvider
} from "/build/_shared/chunk-5T6BUAZE.js";
import {
  ArrowRight
} from "/build/_shared/chunk-Z7AT2O2U.js";
import {
  useNavigate
} from "/build/_shared/chunk-FWVAADBG.js";
import {
  BigArrow
} from "/build/_shared/chunk-OI4BMN2D.js";
import {
  motion
} from "/build/_shared/chunk-APMP54XW.js";
import {
  Images
} from "/build/_shared/chunk-MLKKL7IS.js";
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
  import.meta.hot.lastModified = "1712766514500.8643";
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
            lineNumber: 48,
            columnNumber: 217
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-[1100px] ml-48 text-right text-orange text-[53px] leading-[57.6px] font-neueCondensed", children: "Consultante en communication et cr\xE9ative passionn\xE9e, je m\u2019efforce d\u2019aider votre projet \xE0 grandir gr\xE2ce au design et au marketing digital." }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/about"), className: "hover:cursor-pointer ml-24 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-xs	font-footer", children: "En savoir plus" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 52,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto h-full relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex items-center justify-end pr-10 gap-3 relative w-full`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.service, alt: "Service" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-right font-neueRegular uppercase text-bannerTitile text-redHome", children: "SERVICES" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-around my-36 mx-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Communication" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle mr-4", children: "&" }, void 0, false, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle", children: "marketing" }, void 0, false, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle ml-20", children: "digital." }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Design" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Consulting" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/services"), className: "mb-[250px] hover:cursor-pointer ml-24 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-xs	font-footer", children: "En savoir plus" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Parallax, { speed: -15, className: "min-h-[450px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-screen bg-saumon relative pt-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex justify-center mt-44 items-baseline text-[100px] leading-[100px] text-royalBlue font-neueSemiBold", children: [
            "Like what you s",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images?.rabbit, className: "w-[130px] bg-center rounded-2xl mx-2" }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 86,
              columnNumber: 154
            }, this) }, void 0, false, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 86,
              columnNumber: 148
            }, this),
            "?"
          ] }, void 0, true, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black font-footer font-medium leading-[100px] text-center text-[80px]", children: "Restons en contact" }, void 0, false, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/contact"), className: "py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto", children: "Me contacter" }, void 0, false, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "coucou mon coeur" }, void 0, false, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/description.tsx",
    lineNumber: 45,
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
  import.meta.hot.lastModified = "1712766543451.4075";
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
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 54,
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
//# sourceMappingURL=/build/_shared/chunk-FUJ7JADY.js.map
