import {
  BigArrow
} from "/build/_shared/chunk-OI4BMN2D.js";
import {
  motion,
  useAnimation
} from "/build/_shared/chunk-GX2C7XOP.js";
import {
  Images
} from "/build/_shared/chunk-EQTILSID.js";
import {
  useNavigate
} from "/build/_shared/chunk-FWVAADBG.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  ArrowBack_default
} from "/build/_shared/chunk-ZF5TFIOV.js";
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

// app/routes/portfolio.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/portfolio.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/portfolio.tsx"
  );
  import.meta.hot.lastModified = "1712947864633.2053";
}
function PortFolio() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const controls = useAnimation();
  const contentRef = (0, import_react.useRef)(null);
  const router = useNavigate();
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        controls.start({
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5
          }
        });
      } else {
        controls.start({
          opacity: 0,
          x: 100,
          transition: {
            duration: 0.5
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  (0, import_react.useEffect)(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  const handleScrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 380;
    }
  };
  const portfolioContent = [{
    title: "Concept.",
    content: "J'ai con\xE7u ce portfolio comme une introduction \xE0 mon univers, mon style et mes valeurs. Des arri\xE8re-plans neutres mais une des couleurs de texte satur\xE9es, une police douce mais imposante... L\u2019ensemble se pose en miroir de mes engagements et croyances : un design simple, avenant mais r\xE9solument affirm\xE9."
  }, {
    title: "Intention",
    content: "Des fonds pastels, plut\xF4t neutre avec des couleurs audacieuses pour les titres."
  }, {
    title: "R\xE9alisation",
    content: "Lorem ipsum dolor sit amet consectetur. Orci sed vulputate molestie et aliquet. Sem sapien eget lectus elementum vulputate. Purus congue ullamcorper id at felis et."
  }];
  const handleGoBack = () => {
    router(-1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex-col items-center justify-center mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-5 w-8", onClick: handleGoBack, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowBack_default, {}, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 89,
      columnNumber: 56
    }, this) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col mt-10 mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase font-neueRegular md:text-title text-capicheMobile text-redHome text-center mt-[180px] mb-[100px]", children: "Portfolio" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 92,
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
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer uppercase font-bold leading-[20px] text-[14px]", children: "DISCOVER" }, void 0, false, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto mt-6 mb-10 mx-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueCondensed text-left leading-[90%] text-orange text-[30px]", children: [
      "Changer les choses, une",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 108,
        columnNumber: 114
      }, this),
      " id\xE9e \xE0 la fois. "
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.bearMobilePortfolio, className: "absolute right-0 mt-10" }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 items-start w-full overflow-auto h-full size-12 px-4 mb-10", children: portfolioContent.map((content, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-start pl-6 pb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-redHome font-neueSemiBold lowercase text-[25px] mb-5", children: content.title }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[16px] min-w-[320px]", children: content.content }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 118,
      columnNumber: 51
    }, this)) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-saumon mt-10 flex flex-col gap-3 justify-center py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 items-center w-full overflow-auto h-full size-12 px-4 py-6", ref: contentRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.screenPortFolio1, width: "350px", className: "pl-6" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.service, className: "w-8", onClick: handleScrollRight }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.screenPortFolio2, width: "350px" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.service, className: "w-8", onClick: handleScrollRight }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.screenPortFolio3, width: "350px" }, void 0, false, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/projects"), className: "py-2 px-2 transition-all duration-300 ease-in-out font-bold text-[10px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full min-w-[100px] max-w-[130px] mx-auto", children: "Autres projets" }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(PortFolio, "YIJQU7oT3DS5dh7XlBDiC1f5rPk=", false, function() {
  return [useHeaderColor, useAnimation, useNavigate];
});
_c = PortFolio;
var _c;
$RefreshReg$(_c, "PortFolio");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PortFolio as default
};
//# sourceMappingURL=/build/routes/portfolio-2N2XLYB7.js.map
