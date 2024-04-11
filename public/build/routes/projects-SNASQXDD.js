import {
  useNavigate
} from "/build/_shared/chunk-FWVAADBG.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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

// app/routes/projects.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects.tsx"
  );
  import.meta.hot.lastModified = "1712870230712.4866";
}
function Project() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const router = useNavigate();
  (0, import_react2.useEffect)(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex flex-col gap-6 md:gap-12 items-start ml-10 my-10 md:my-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/mosaic"), className: "hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-titleMobile md:text-title text-left font-neueRegular text-orange hover:text-redHome", children: "MOSAIC" }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/portfolio"), className: "hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome", children: "PORTEFOLIO" }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/capiche"), className: "hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome", children: "CAPICHE" }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/logofolio"), className: "hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome", children: "LOGOfolio" }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/cards"), className: "hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome", children: "CARTES" }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(Project, "aTXwj+32TYSD1Gwc45WCk1GpW2Q=", false, function() {
  return [useHeaderColor, useNavigate];
});
_c = Project;
var _c;
$RefreshReg$(_c, "Project");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Project as default
};
//# sourceMappingURL=/build/routes/projects-SNASQXDD.js.map
