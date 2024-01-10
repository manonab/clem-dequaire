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

// app/context/index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/context/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/index.tsx"
  );
  import.meta.hot.lastModified = "1704813890318.063";
}
var HeaderColorContext = (0, import_react.createContext)({
  headerColor: "",
  setHeaderColor: () => {
  }
});
var useHeaderColor = () => {
  _s();
  return (0, import_react.useContext)(HeaderColorContext);
};
_s(useHeaderColor, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var HeaderColorProvider = ({
  children
}) => {
  _s2();
  const [headerColor, setHeaderColor] = (0, import_react.useState)("linear-background");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderColorContext.Provider, { value: {
    headerColor,
    setHeaderColor
  }, children }, void 0, false, {
    fileName: "app/context/index.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s2(HeaderColorProvider, "A0fv3FUtIVdWemho7rbtJD1wGic=");
_c = HeaderColorProvider;
var _c;
$RefreshReg$(_c, "HeaderColorProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  useHeaderColor,
  HeaderColorProvider
};
//# sourceMappingURL=/build/_shared/chunk-S6PJ4UDN.js.map
