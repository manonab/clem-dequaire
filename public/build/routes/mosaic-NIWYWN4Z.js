import {
  BigArrow
} from "/build/_shared/chunk-OI4BMN2D.js";
import {
  motion
} from "/build/_shared/chunk-GX2C7XOP.js";
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
  import.meta.hot.lastModified = "1712683844181.085";
}
function Mosaic() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  (0, import_react.useEffect)(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  const timing = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex-col items-center justify-center mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col my-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40", children: "Mosaic" }, void 0, false, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 40,
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
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "DISCOVER" }, void 0, false, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mosaic.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/mosaic.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(Mosaic, "xtET3H4yL2Q/OcMWlOKzk0FPBeI=", false, function() {
  return [useHeaderColor];
});
_c = Mosaic;
var _c;
$RefreshReg$(_c, "Mosaic");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Mosaic as default
};
//# sourceMappingURL=/build/routes/mosaic-NIWYWN4Z.js.map
