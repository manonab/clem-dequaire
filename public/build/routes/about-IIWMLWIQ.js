import {
  ParallaxProvider
} from "/build/_shared/chunk-FYYCLQBT.js";
import {
  useHeaderColor
} from "/build/_shared/chunk-S6PJ4UDN.js";
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

// app/routes/about.tsx
var import_react = __toESM(require_react(), 1);

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

// app/routes/about.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.tsx"
  );
  import.meta.hot.lastModified = "1704813862562.747";
}
function About() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  (0, import_react.useEffect)(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ParallaxProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col flex gap-12 w-screen h-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-end justify-between w-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-w-[950px] flex-col flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[1259px] ml-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueSemiBold text-[200px] uppercase leading-[180px] text-orange font-medium", children: "IT\u2019S ALL ABOUT PASSION." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[637px] ml-12 my-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "leading-[31.2px] text-justify text-2xl font-normal font-footer", children: "Lorem ipsum dolor sit amet consectetur. Rhoncus maecenas non tempor ut sed sapien semper quis sem. Enim aliquet tristique fringilla orci turpis erat pulvinar. Sapien facilisis tellus netus tortor. Molestie turpis a ultrices blandit ut imperdiet duis." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mx-10 uppercase text-redHome text-[100px] font-medium font-neueMedium leading-[90px]", children: "Scroll" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "self-end mr-[220px] -mb-[130px] z-[10]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BigDownArrow, {}, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-saumon h-full w-full flex-col flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-end justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#D9D9D9] w-[395px] h-[480px] rounded-[50px] -mt-10" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "-mb-40 z-[10] w-[802px] leading-[72px] text-royalBlue text-right text-[80px] font-neueMedium", children: "Lorem ipsum dolor 32% sit amet consectetur. Neque leo euismod id mauris." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-around mb-10 mt-28 mx-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-[25px] leading-[32px] font-normal font-footer text-justify w-[640px]", children: "Lorem ipsum dolor sit amet consectetur. Rhoncus maecenas non tempor ut sed sapien semper quis sem. Enim aliquet tristique fringilla orci turpis erat pulvinar. Sapien facilisis tellus netus tortor. Molestie turpis a ultrices blandit ut imperdiet duis." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-[#D9D9D9] z-0 w-[395px] h-[480px] rounded-[50px]" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-mainColor h-full w-full flex-col flex gap-12" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(About, "xtET3H4yL2Q/OcMWlOKzk0FPBeI=", false, function() {
  return [useHeaderColor];
});
_c2 = About;
var _c2;
$RefreshReg$(_c2, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default
};
//# sourceMappingURL=/build/routes/about-IIWMLWIQ.js.map
