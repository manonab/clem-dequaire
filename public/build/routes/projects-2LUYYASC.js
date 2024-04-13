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
  import.meta.hot.lastModified = "1712991331780.5056";
}
function Project() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const router = useNavigate();
  const [selected, setSelected] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  const pathTextMappingMobile = [{
    path: "/mosaic",
    name: "mosaic"
  }, {
    path: "/portfolio",
    name: "portfolio"
  }, {
    path: "/capciche",
    name: "capiche"
  }, {
    path: "/logofolio",
    name: "logos"
  }];
  const handleChange = (route) => {
    setSelected(route);
    router(`${route}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-mainColor z-[999] flex flex-col gap-12 justify-center items-center fixed top-0 left-0 w-full h-full w-full h-full z-50 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start flex-col gap-6 w-full ml-5", children: pathTextMappingMobile.map((route) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { onClick: () => {
    handleChange(route.path);
  }, className: "text-orange uppercase hover:cursor-pointer text-[70px] leading-[90%] font-neueRegular", children: route.name }, route.path, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 54,
    columnNumber: 45
  }, this)) }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(Project, "fki2ICBbXKsYRJewZy9Crv0knD8=", false, function() {
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
//# sourceMappingURL=/build/routes/projects-2LUYYASC.js.map
