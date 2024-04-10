import {
  BigArrow
} from "/build/_shared/chunk-OI4BMN2D.js";
import {
  motion
} from "/build/_shared/chunk-APMP54XW.js";
import {
  Images
} from "/build/_shared/chunk-MLKKL7IS.js";
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

// app/routes/capiche.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/capiche.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/capiche.tsx"
  );
  import.meta.hot.lastModified = "1712685038721.9648";
}
function Capiche() {
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
  const capicheContent = [{
    title: "Concept.",
    content: "Capiche est un site fictif de revente de jeux de soci\xE9t\xE9 de seconde main. Sa particularit\xE9 est d\u2019avoir des sections sp\xE9cialis\xE9es dans le vintage et les produits japonais, toujours d\u2019occasion. "
  }, {
    title: "Intention",
    content: "L\u2019univers et le ton se veulent l\xE9ger, la palette de couleur est un rappel du logo. Le site et l\u2019application mobile sont \xE0 la fois ludiques et fond\xE9s sur les principes de L\u2019UX design pour une exp\xE9rience utilisateur optimum. "
  }, {
    title: "R\xE9alisation",
    content: "Lorem ipsum dolor sit amet consectetur. Orci sed vulputate molestie et aliquet. Sem sapien eget lectus elementum vulputate. Purus congue ullamcorper id at felis et."
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex-col items-center justify-center mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col my-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40", children: "Capiche" }, void 0, false, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 51,
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
          fileName: "app/routes/capiche.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "DISCOVER" }, void 0, false, {
          fileName: "app/routes/capiche.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-auto my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.capicheBG, alt: "capiche background" }, void 0, false, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto m-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueCondensed text-left leading-[90%] text-orange text-[25px]", children: [
      "Une alternative \xE9cologique",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 70,
        columnNumber: 117
      }, this),
      " \xE0 vos soir\xE9es endiabl\xE9es. "
    ] }, void 0, true, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 items-center w-full overflow-x-auto", children: capicheContent.map((content, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: content.title }, void 0, false, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: content.content }, void 0, false, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 73,
      columnNumber: 49
    }, this)) }, void 0, false, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/capiche.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(Capiche, "xtET3H4yL2Q/OcMWlOKzk0FPBeI=", false, function() {
  return [useHeaderColor];
});
_c = Capiche;
var _c;
$RefreshReg$(_c, "Capiche");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Capiche as default
};
//# sourceMappingURL=/build/routes/capiche-KGUVDCCD.js.map
