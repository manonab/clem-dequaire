import {
  BigDownArrow
} from "/build/_shared/chunk-YNYAIOLW.js";
import {
  ParallaxProvider
} from "/build/_shared/chunk-FYYCLQBT.js";
import {
  useNavigate
} from "/build/_shared/chunk-P4DS5TL5.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  Images
} from "/build/_shared/chunk-GMZI2DNI.js";
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

// app/routes/about.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1709480776715.2366";
}
function About() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const router = useNavigate();
  (0, import_react2.useEffect)(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParallaxProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col flex gap-12 w-screen h-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end justify-between w-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-[950px] flex-col flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[1259px] ml-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueRegular text-[200px] uppercase leading-[180px] text-orange font-medium", children: "IT\u2019S ALL ABOUT PASSION." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[637px] ml-12 my-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-[31.2px] text-justify text-2xl font-normal font-footer", children: "Sp\xE9cialiste en communication/marketing et passionn\xE9e de design, j\u2019aide les entreprises \xE0 valoriser leur image de marque en leur proposant une strat\xE9gie digitale adapt\xE9e. J\u2019aime relever de nouveaux d\xE9fis et m\xE9thodiquement mener les projets jusqu'\xE0 leur pleine r\xE9ussite.                  " }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mx-10 uppercase text-redHome text-[100px] font-medium font-neueRegular leading-[90px]", children: "Scroll" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "self-end mr-[220px] -mb-[130px] z-[10]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BigDownArrow, {}, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-saumon h-full w-full flex-col flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[395px] h-[480px] rounded-[50px] -mt-10 ml-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "men with pride flag", src: Images.pride }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "-mb-40 z-[10] w-[802px] leading-[72px] text-royalBlue text-right text-[80px] font-neueRegular", children: '"Seules 54% des entreprises fran\xE7aises ont embrass\xE9 la diversit\xE9"*.' }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-around mb-10 mt-28 mx-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[25px] leading-[32px] font-normal font-footer text-justify w-[640px]", children: "Dans un monde o\xF9 l'\xE9quit\xE9 n'est plus simplement une option mais une n\xE9cessit\xE9, j'ai un grand int\xE9r\xEAt \xE0 utiliser mon expertise pour aider les marques \xE0 \xE9voluer. Mon objectif est de les guider vers une approche plus inclusive. Cela implique de comprendre et de respecter la diversit\xE9 de leur public et de s'assurer que tous se sentent repr\xE9sent\xE9s et valoris\xE9s. Ensemble, faisons bouger les choses !              " }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-0 w-[395px] h-[480px] rounded-[50px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "group people", src: Images.group }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-mainColor h-full w-full flex-col flex gap-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[250px] text-redHome font-neueRegular uppercase mr-10", children: "Militer" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "arrow pink", src: Images.manifesto, width: 100, height: 100 }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueRegular italic text-[50px] leading-[90%] mx-16", children: "Manifesto" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/4 mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] mr-14", children: "01." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-[100%] text-[28px] font-footer", children: [
            "L'",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "inclusivit\xE9" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 85,
              columnNumber: 71
            }, this),
            " et le respect d\u2019autrui sont des valeurs fondamentales. Faisons de la diversit\xE9 un engagement quotidien."
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] mr-11", children: "02." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-[100%] text-[28px] font-footer", children: [
            "La ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "bienveillance" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 89,
              columnNumber: 72
            }, this),
            " et l'\xE9coute forment la base d'une culture d'entreprise saine et productive. Le dialogue est la cl\xE9."
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] mr-11", children: "03." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer leading-[100%] text-[28px]", children: [
            "Sans ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "passion" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 93,
              columnNumber: 74
            }, this),
            ", pas d\u2019action. Croyez en votre message, je m\u2019occupe de le partager."
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] mr-11", children: "04." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-[100%] text-[28px] font-footer", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "Amusons nous" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 97,
              columnNumber: 69
            }, this),
            " \xE0 cr\xE9er, partager, designer. Partageons l\u2019amour de nos m\xE9tiers."
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/services"), className: "hover:cursor-pointer border-black border mb-20 rounded-3xl p-[10px] w-[200px] mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase", children: "Services" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(About, "aTXwj+32TYSD1Gwc45WCk1GpW2Q=", false, function() {
  return [useHeaderColor, useNavigate];
});
_c = About;
var _c;
$RefreshReg$(_c, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default
};
//# sourceMappingURL=/build/routes/about-4AFWIND3.js.map
