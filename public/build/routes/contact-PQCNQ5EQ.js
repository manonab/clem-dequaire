import {
  Images
} from "/build/_shared/chunk-XFDXQD64.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/contact.tsx
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contact.tsx"
  );
  import.meta.hot.lastModified = "1701250766353.212";
}
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate__animated animate__zoomIn animate__delay-1.3s  rounded-[20px] mx-auto container w-[875px] h-[559px] z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.becks, alt: "victoria beckham image", className: "w-full h-[372px]" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contact-PQCNQ5EQ.js.map
