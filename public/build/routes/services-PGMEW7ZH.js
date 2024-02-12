import {
  useHeaderColor
} from "/build/_shared/chunk-WSSTHBAM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/services.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/services.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/services.tsx"
  );
  import.meta.hot.lastModified = "1704898254994.9585";
}
function Services() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  (0, import_react.useEffect)(() => {
    setHeaderColor("linear-services");
  }, [setHeaderColor]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellowHome w-full h-screen flex" }, void 0, false, {
    fileName: "app/routes/services.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(Services, "xtET3H4yL2Q/OcMWlOKzk0FPBeI=", false, function() {
  return [useHeaderColor];
});
_c = Services;
var _c;
$RefreshReg$(_c, "Services");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Services as default
};
//# sourceMappingURL=/build/routes/services-PGMEW7ZH.js.map
