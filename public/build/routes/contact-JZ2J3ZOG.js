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

// app/routes/contact.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contact.tsx"
  );
  import.meta.hot.lastModified = "1707775989365.8245";
}
function Contact() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  (0, import_react.useEffect)(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-screen h-screen flex mt-20 mb-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col ml-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[200px] leading-[90%] text-royalBlue uppercase font-neueRegular", children: "Con" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[200px] leading-[90%] text-royalBlue uppercase font-neueRegular", children: "tact." }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-inter mb-1", children: "Nom" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-inter mb-1", children: "Email" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-inter mb-1", children: "Object" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " mt-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-inter mb-1", children: "Message" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "rounded-[20px] bg-mainColor border-[2px] border-black w-[635px] h-[190px]" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(Contact, "xtET3H4yL2Q/OcMWlOKzk0FPBeI=", false, function() {
  return [useHeaderColor];
});
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contact-JZ2J3ZOG.js.map
