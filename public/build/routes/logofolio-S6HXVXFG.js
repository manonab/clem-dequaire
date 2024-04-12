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
  ArrowBack_default
} from "/build/_shared/chunk-MOEXCUEJ.js";
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

// app/routes/logofolio.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/logofolio.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/logofolio.tsx"
  );
  import.meta.hot.lastModified = "1712944822461.4746";
}
function LogoFolio() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const [showYellowBackground, setShowYellowBackground] = (0, import_react.useState)(false);
  const containerRef = (0, import_react.useRef)(null);
  const router = useNavigate();
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  (0, import_react.useEffect)(() => {
    setHeaderColor("mainColor");
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY || window.pageYOffset;
        const threshold = containerRect.top + containerRect.height / 2;
        if (scrollPosition > threshold) {
          setShowYellowBackground(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderColor]);
  const handleGoBack = () => {
    router(-1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex-col flex", ref: containerRef, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-5 w-8", onClick: handleGoBack, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowBack_default, {}, void 0, false, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 62,
      columnNumber: 56
    }, this) }, void 0, false, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40", children: "Logofolio" }, void 0, false, {
        fileName: "app/routes/logofolio.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "mx-auto flex-col flex items-center gap-3 mb-20", initial: {
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
          fileName: "app/routes/logofolio.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "DISCOVER" }, void 0, false, {
          fileName: "app/routes/logofolio.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/logofolio.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:border-t-[1px] md:border-black md:w-full md:my-20 hidden" }, void 0, false, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:py-[250px] py-[150px] bg-saumon md:bg-mainColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.newlogo, className: "md:w-[400px] md:h-[350px] w-[100px] mx-auto" }, void 0, false, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `md:py-[250px] py-[150px] w-full ${showYellowBackground && "bg-yellowHome"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.capichelogo, className: "mx-auto md:w-[600px] md:h-[150px] w-[250px]" }, void 0, false, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/logofolio.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(LogoFolio, "dQiFWbE0mOCX06zlTqPQXIwLN1o=", false, function() {
  return [useHeaderColor, useNavigate];
});
_c = LogoFolio;
var _c;
$RefreshReg$(_c, "LogoFolio");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LogoFolio as default
};
//# sourceMappingURL=/build/routes/logofolio-S6HXVXFG.js.map
