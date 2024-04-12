import {
  motion
} from "/build/_shared/chunk-GX2C7XOP.js";
import {
  Images
} from "/build/_shared/chunk-3SRQZ3IO.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate
} from "/build/_shared/chunk-FWVAADBG.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  Close_default
} from "/build/_shared/chunk-MOEXCUEJ.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  HeaderColorProvider,
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

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-76R5F2MI.css";

// app/components/header/index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/header/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/header/index.tsx"
  );
  import.meta.hot.lastModified = "1712869887697.5989";
}
var Menu = () => {
  _s();
  const router = useNavigate();
  const [selected, setSelected] = (0, import_react.useState)("/home");
  const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
  const {
    headerColor
  } = useHeaderColor();
  const pathTextMapping = [{
    path: "/home",
    name: "accueil"
  }, {
    path: "/values",
    name: "mes valeurs"
  }, {
    path: "/services",
    name: "services"
  }, {
    path: "/projects",
    name: "projets"
  }];
  const pathTextMappingMobile = [{
    path: "/home",
    name: "accueil"
  }, {
    path: "/values",
    name: "\xE0 propos"
  }, {
    path: "/services",
    name: "services"
  }, {
    path: "/projects",
    name: "projets"
  }, {
    path: "/contact",
    name: "contact"
  }];
  const handleChange = (route) => {
    setSelected(route);
    router(`${route}`);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }, className: `${headerColor} hidden md:flex mx-auto justify-between items-center py-[30px] px-[40px]`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/home"), className: "hover:cursor-pointer h-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.newlogo, alt: "logo", width: "50px", height: "50px" }, void 0, false, {
        fileName: "app/components/header/index.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/header/index.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center gap-9", children: pathTextMapping.map((route) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto", onClick: () => handleChange(route.path), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `${selected === route.path ? "text-redHome font-bold" : " text-grayBlack"} hover:text-redHome hover:font-bold leading-4 hover:cursor-pointer text-[18px] font-footer text-black`, children: route.name }, void 0, false, {
        fileName: "app/components/header/index.tsx",
        lineNumber: 88,
        columnNumber: 15
      }, this) }, route.path, false, {
        fileName: "app/components/header/index.tsx",
        lineNumber: 87,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/components/header/index.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/contact"), className: "hover:cursor-pointer flex flex-col items-center justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[15px] hover:cursor-pointer font-clashSemibold uppercase", children: "Rencontrons nous" }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b-black border-b-2 w-[165px] h-10 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header/index.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header/index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${headerColor} flex justify-between items-center py-[32px] px-[30px] mt-2`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/home"), className: "hover:cursor-pointer h-[80px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.newlogo, alt: "logo", width: "60px", height: "50px" }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: toggleMenu, className: "text-grayBlack focus:outline-none flex gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
            y: 10,
            opacity: 0,
            scale: 0.5
          }, animate: {
            y: 0,
            opacity: 1,
            scale: 1
          }, transition: {
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 150
          }, className: "bg-orange h-2.5 w-2.5 rounded-full" }, void 0, false, {
            fileName: "app/components/header/index.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
            y: 10,
            opacity: 0,
            scale: 0.5
          }, animate: {
            y: 0,
            opacity: 1,
            scale: 1
          }, transition: {
            delay: 0.6,
            duration: 0.8,
            type: "spring",
            stiffness: 150
          }, className: "bg-redHome h-2.5 w-2.5 rounded-full" }, void 0, false, {
            fileName: "app/components/header/index.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
            y: 10,
            opacity: 0,
            scale: 0.5
          }, animate: {
            y: 0,
            opacity: 1,
            scale: 1
          }, transition: {
            delay: 0.9,
            duration: 0.8,
            type: "spring",
            stiffness: 150
          }, className: "bg-pinkVive h-2.5 w-2.5 rounded-full" }, void 0, false, {
            fileName: "app/components/header/index.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header/index.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      isMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        y: -20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "bg-yellowHome flex flex-col gap-12 justify-start items-end fixed top-0 left-0 w-full h-full z-50 overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: toggleMenu, className: "m-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { className: "w-8 h-8" }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 162,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center flex-col gap-6 w-full", children: pathTextMappingMobile.map((route) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { onClick: () => {
          handleChange(route.path);
          toggleMenu();
        }, className: "text-orange uppercase hover:cursor-pointer text-titleMobile font-neueRegular", children: route.name }, route.path, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 165,
          columnNumber: 51
        }, this)) }, void 0, false, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header/index.tsx",
        lineNumber: 152,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header/index.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header/index.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
};
_s(Menu, "ewjvkuBiivzyzpcvJvahlxwIZkM=", false, function() {
  return [useNavigate, useHeaderColor];
});
_c = Menu;
var _c;
$RefreshReg$(_c, "Menu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/common/layout/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/common/layout/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/common/layout/index.tsx"
  );
  import.meta.hot.lastModified = "1712858247771.9016";
}
var Layout = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-auto bg-mainColor w-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu, {}, void 0, false, {
      fileName: "app/common/layout/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children }, void 0, false, {
      fileName: "app/common/layout/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/common/layout/index.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c2 = Layout;
var _c2;
$RefreshReg$(_c2, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderColorProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-NVM2JOYU.js.map
