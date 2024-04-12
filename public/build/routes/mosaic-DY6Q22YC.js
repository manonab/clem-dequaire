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
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  ArrowForward_default
} from "/build/_shared/chunk-KXLZF2FH.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  useHeaderColor
} from "/build/_shared/chunk-DIGSRBO4.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mosaic.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/mosaic.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/mosaic.tsx"
  );
  import.meta.hot.lastModified = "1712941207301.6912";
}
function Mosaic() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const router = useNavigate();
  (0, import_react.useEffect)(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  const mosaicContent = [{
    title: "mission.",
    content: "J'ai con\xE7u ce portfolio comme une introduction \xE0 mon univers, mon style et mes valeurs. Des arri\xE8re-plans neutres mais une des couleurs de texte satur\xE9es, une police douce mais imposante... L\u2019ensemble se pose en miroir de mes engagements et croyances : un design simple, avenant mais r\xE9solument affirm\xE9."
  }, {
    title: "objectifs",
    content: "L\u2019univers et le ton se veulent l\xE9ger, la palette de couleur est un rappel du logo. Le site et l\u2019application mobile sont \xE0 la fois ludiques et fond\xE9s sur les principes de L\u2019UX design pour une exp\xE9rience utilisateur optimum."
  }, {
    title: "R\xE9alisation",
    content: "J\u2019ai veill\xE9 \xE0 ce que ce portfolio pr\xE9sente une coh\xE9rence entre la version mobile et web, tout en offrant une exp\xE9rience utilisateur sp\xE9cifique \xE0 chaque support."
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex-col items-center justify-center mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col mt-20 mb-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase font-neueRegular md:text-title text-capicheMobile text-redHome text-center mt-[180px] mb-[100px]", children: "Mosaic" }, void 0, false, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "mx-auto flex-col flex items-center gap-3 mb-[150px]", initial: {
        opacity: 0,
        y: 100
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        ...timing,
        delay: 0.6
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BigArrow, {}, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer uppercase font-bold leading-[20px] text-[14px]", children: "DISCOVER" }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-auto bg-saumon py-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-orange w-1/2 font-neueCondensed text-[24px] leading-[120%]", children: [
          '"Mosaic encourage, \xE9duque et inspire les jeunes personnes LGBTQ+ et celleux \xE0',
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 71,
            columnNumber: 167
          }, this),
          ' leur c\xF4t\xE9s."'
        ] }, void 0, true, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-50 mt-10 w-[130px] h-[130px] bg-mainColor rounded-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueSemiBold text-[28px] text-center", children: "+16%" }, void 0, false, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[12px] text-center", children: [
            "Augmentation",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/mosaic.tsx",
              lineNumber: 75,
              columnNumber: 78
            }, this),
            " globale en ligne."
          ] }, void 0, true, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[130px] absolute right-4  mt-14 z-10 h-[130px] bg-yellowHome rounded-2xl" }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 items-start w-full overflow-auto h-full size-12 px-4 mt-8 mb-4", children: mosaicContent.map((content, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-start pl-6 pb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-redHome font-neueSemiBold lowercase text-[25px] mb-5", children: content.title }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[16px] min-w-[320px]", children: content.content }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, index, true, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 82,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto py-20 bg-yellowHome overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-around gap-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.mosaic1, className: "w-[180px] h-[180px] -ml-[120px]" }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.mosaic2, className: "w-[220px] h-[220px]" }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.mosaic007, className: "w-[180px] h-[180px] rounded-xl" }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: " mt-5 text-[14px] text-orange text-center font-neueCondensed", children: [
        "Trust the Word, la premi\xE8re \xE9dition d'un concours ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 94,
          columnNumber: 135
        }, this),
        " litt\xE9raire par et pour la communaut\xE9 Queer."
      ] }, void 0, true, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-20 mt-10 flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-orange font-neueRegular text-[40px] mb-10", children: "T\xE9moignage" }, void 0, false, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowForward_default, { className: "w-6" }, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[18px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-footer font-semibold", children: "Hugh O'keeffe" }, void 0, false, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 99,
            columnNumber: 82
          }, this),
          ", Assistant Directeur"
        ] }, void 0, true, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 99,
          columnNumber: 43
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[12px] leading-[120%] mt-5 mb-10 w-[300px]", children: [
        "\u201CCl\xE9mence was a true pleasure to work with. In",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 101,
          columnNumber: 130
        }, this),
        " joining us she created a new role for herself",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 101,
          columnNumber: 185
        }, this),
        " leveraging her skills and abilities to build on Mosaic's",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 101,
          columnNumber: 251
        }, this),
        " online presence and grew our audience [...]\u201D."
      ] }, void 0, true, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: "https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US", className: "py-2 px-2 transition-all duration-300 ease-in-out font-bold text-[10px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full min-w-[100px] max-w-[130px] mx-auto mb-20", children: "Voir sur linkedin" }, void 0, false, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mosaic.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(Mosaic, "aTXwj+32TYSD1Gwc45WCk1GpW2Q=", false, function() {
  return [useHeaderColor, useNavigate];
});
_c = Mosaic;
var _c;
$RefreshReg$(_c, "Mosaic");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Mosaic as default
};
//# sourceMappingURL=/build/routes/mosaic-DY6Q22YC.js.map
