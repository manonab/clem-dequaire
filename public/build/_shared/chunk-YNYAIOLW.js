import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/assets/big-down-arrow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/assets/big-down-arrow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/assets/big-down-arrow.tsx"
  );
  import.meta.hot.lastModified = "1701346340791.6482";
}
var BigDownArrow = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "148", viewBox: "0 0 16 148", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7.29289 147.707C7.68341 148.098 8.31658 148.098 8.7071 147.707L15.0711 141.343C15.4616 140.953 15.4616 140.319 15.0711 139.929C14.6805 139.538 14.0474 139.538 13.6568 139.929L7.99999 145.586L2.34314 139.929C1.95262 139.538 1.31945 139.538 0.928926 139.929C0.538402 140.319 0.538402 140.953 0.928926 141.343L7.29289 147.707ZM7 -4.37114e-08L6.99999 147L8.99999 147L9 4.37114e-08L7 -4.37114e-08Z", fill: "black" }, void 0, false, {
    fileName: "app/assets/big-down-arrow.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/big-down-arrow.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_c = BigDownArrow;
var _c;
$RefreshReg$(_c, "BigDownArrow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  BigDownArrow
};
//# sourceMappingURL=/build/_shared/chunk-YNYAIOLW.js.map
