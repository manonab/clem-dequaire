import {
  ParallaxProvider
} from "/build/_shared/chunk-5T6BUAZE.js";
import {
  require_lib
} from "/build/_shared/chunk-IR7NE7RZ.js";
import {
  Images
} from "/build/_shared/chunk-EQTILSID.js";
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

// app/routes/values.tsx
var import_react2 = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/values.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/values.tsx"
  );
  import.meta.hot.lastModified = "1712948962596.1538";
}
function Values() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const router = useNavigate();
  (0, import_react2.useEffect)(() => {
    if (!import_react_device_detect.isMobile) {
      setHeaderColor("linear-values");
    }
  }, [setHeaderColor]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParallaxProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col md:flex w-full h-auto hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "!w-full bg-saumon pb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-10 font-neueRegular text-title text-orange font-medium", children: [
        "Tout commen\xE7a par une ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 42,
          columnNumber: 106
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-redHome", children: "id\xE9e" }, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 42,
          columnNumber: 115
        }, this),
        "."
      ] }, void 0, true, {
        fileName: "app/routes/values.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/values.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-mainColor h-full flex-col flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-12 justify-evenly items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[659px] ml-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[22px] leading-[110%] font-footer text-justify", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Sp\xE9cialis\xE9e en communication et marketing digital" }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 47,
              columnNumber: 82
            }, this),
            ", j\u2019ai toujours ressenti ce besoin de trouver du sens. Plus qu\u2019un m\xE9tier, je vois la communication comme un moyen de partager et faire grandir des projets auxquels je crois profond\xE9ment. Cinq ann\xE9es se sont \xE9coul\xE9es depuis mon premier poste et cette id\xE9e s\u2019est transform\xE9e en un d\xE9fi que je rel\xE8ve passionn\xE9ment chaque jour. Gr\xE2ce \xE0 d\u2019autres humain.e.s qui croyaient fort en leur convictions,   j\u2019ai eu la chance de porter d\xE9fis audacieux et des messages engag\xE9s. Peut-\xEAtre serez vous les prochain.e.s ?"
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "!w-fit bg-white h-[480px] rounded-[50px] -mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "men with pride flag", src: Images.pride }, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/values.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "z-10 -mb-32 w-[741px] ml-[300px] leading-[72px] text-royalBlue text-[60px] font-neueRegular", children: [
          '"Seules 54% des entreprises fran\xE7aises ont embrass\xE9 la diversit\xE9".',
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-black", children: "*" }, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 54,
            columnNumber: 79
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/values.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-evenly", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-0 flex justify-start items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "rotate-[270deg] -mr-16", children: "T\xEAtu, Nom de l\u2019enqu\xEAte." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "group people", src: Images.group, className: "rounded-[50px h-[480px] w-[395px]" }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[18px] font-normal text-justify w-[640px]", children: [
            "Au fil de ma vie et de ma carri\xE8re personnelle,  j\u2019ai pu appr\xE9hender avec clart\xE9 et d\xE9termination les bouleversements sociaux qui se jouent depuis maintenant des ann\xE9es.  Pour toutes les entreprises qui souhaitent faire parti du changement, je propose une ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "relecture inclusive" }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 62,
              columnNumber: 271
            }, this),
            " et une vision sensible de votre communication.             "
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/values.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/values.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellowHome pt-40 -mt-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueRegular text-[50px] leading-[90%] mx-16", children: "Manifesto" }, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/4 mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] mr-14", children: "01." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              "L'",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "inclusivit\xE9" }, void 0, false, {
                fileName: "app/routes/values.tsx",
                lineNumber: 70,
                columnNumber: 71
              }, this),
              " et le respect d\u2019autrui sont des valeurs fondamentales. Faisons de la diversit\xE9 un engagement quotidien."
            ] }, void 0, true, {
              fileName: "app/routes/values.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] mr-11", children: "02." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              "La ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "bienveillance" }, void 0, false, {
                fileName: "app/routes/values.tsx",
                lineNumber: 74,
                columnNumber: 72
              }, this),
              " et l'\xE9coute forment la base d'une culture d'entreprise saine et productive. Le dialogue est la cl\xE9."
            ] }, void 0, true, {
              fileName: "app/routes/values.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] mr-11", children: "03." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer leading-[100%] text-[28px]", children: [
              "Sans ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "passion" }, void 0, false, {
                fileName: "app/routes/values.tsx",
                lineNumber: 78,
                columnNumber: 74
              }, this),
              ", pas d\u2019action. Croyez en votre message, je m\u2019occupe de le partager."
            ] }, void 0, true, {
              fileName: "app/routes/values.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] mr-11", children: "04." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "Amusons nous" }, void 0, false, {
                fileName: "app/routes/values.tsx",
                lineNumber: 82,
                columnNumber: 69
              }, this),
              " \xE0 cr\xE9er, partager, designer. Partageons l\u2019amour de nos m\xE9tiers."
            ] }, void 0, true, {
              fileName: "app/routes/values.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/values.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/projects"), className: "py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto", children: "Mes projets" }, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/values.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/values.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center md:hidden gap-4 mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular", children: "partage" }, void 0, false, {
        fileName: "app/routes/values.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular", children: "cr\xE9ation" }, void 0, false, {
        fileName: "app/routes/values.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular", children: "ambition" }, void 0, false, {
        fileName: "app/routes/values.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 items-start justify-center mr-10 mt-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.manifesto, className: "rotate-[185deg] w-[20px]" }, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-justify text-[10px] w-2/3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Sp\xE9cialis\xE9e en communication et marketing digital" }, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 96,
            columnNumber: 69
          }, this),
          ", j\u2019ai toujours ressenti ce besoin de trouver du sens. Plus qu\u2019un m\xE9tier, je vois la communication comme un moyen de partager et faire grandir des projets auxquels je crois profond\xE9ment.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 96,
            columnNumber: 339
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 96,
            columnNumber: 348
          }, this),
          "Cinq ann\xE9es se sont \xE9coul\xE9es depuis mon premier poste et cette id\xE9e s\u2019est transform\xE9e en un d\xE9fi que je rel\xE8ve passionn\xE9ment chaque jour. Gr\xE2ce \xE0 d\u2019autres humain.e.s qui croyaient fort en leur convictions,   j\u2019ai eu la chance de porter d\xE9fis audacieux et des messages engag\xE9s. Peut-\xEAtre serez vous les prochain.e.s ?"
        ] }, void 0, true, {
          fileName: "app/routes/values.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/values.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "self-start ml-20 text-[8px] font-bold mb-10", children: "MON PARCOURS" }, void 0, false, {
        fileName: "app/routes/values.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-orange -mb-10 z-50 font-neueRegular text-[25px] leading-[90%]", children: [
        "\u201CSeules 54 % des",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 100,
          columnNumber: 107
        }, this),
        " entreprises fran\xE7aises",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 100,
          columnNumber: 139
        }, this),
        " ont embrass\xE9 la",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 100,
          columnNumber: 164
        }, this),
        " diversit\xE9\u201D."
      ] }, void 0, true, {
        fileName: "app/routes/values.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mx-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.group, className: "w-[160px] h-[210px]" }, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-end gap-1.5 ml-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.manifesto, className: "rotate-[185deg] w-[20px]" }, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[10px] text-justify", children: "Au fil de ma vie et de ma carri\xE8re personnelle,  j\u2019ai pu appr\xE9hender avec clart\xE9 et d\xE9termination les bouleversements sociaux qui se jouent depuis maintenant des ann\xE9es.  Pour toutes les entreprises qui souhaitent faire parti du changement, je propose une relecture inclusive et une vision sensible de votre communication. " }, void 0, false, {
            fileName: "app/routes/values.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/values.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/values.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellowHome w-full h-full pt-20 pb-10 mt-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueRegular text-[20px] leading-[90%] mx-10", children: "Manifesto" }, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-20 flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-evenly", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-footer text-[35px] leading-[90px]", children: "01." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 112,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3", children: [
              "L'",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "inclusivit\xE9" }, void 0, false, {
                fileName: "app/routes/values.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this),
              " et le respect d\u2019autrui sont des valeurs fondamentales. Faisons de la diversit\xE9 un engagement quotidien."
            ] }, void 0, true, {
              fileName: "app/routes/values.tsx",
              lineNumber: 113,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-evenly", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-footer text-[35px] leading-[90px]", children: "02." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3", children: [
              "La ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "bienveillance" }, void 0, false, {
                fileName: "app/routes/values.tsx",
                lineNumber: 120,
                columnNumber: 20
              }, this),
              " et l'\xE9coute forment la base d'une culture d'entreprise saine et productive. Le dialogue est la cl\xE9."
            ] }, void 0, true, {
              fileName: "app/routes/values.tsx",
              lineNumber: 119,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 117,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-evenly", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-footer text-[35px] leading-[90px]", children: "03." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 124,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3", children: [
              "Sans ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "passion" }, void 0, false, {
                fileName: "app/routes/values.tsx",
                lineNumber: 126,
                columnNumber: 22
              }, this),
              ", pas d\u2019action. Croyez en votre message, je me charge de le partager."
            ] }, void 0, true, {
              fileName: "app/routes/values.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-evenly", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-footer text-[35px] leading-[90px]", children: "04." }, void 0, false, {
              fileName: "app/routes/values.tsx",
              lineNumber: 130,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange", children: "Amusons nous" }, void 0, false, {
                fileName: "app/routes/values.tsx",
                lineNumber: 132,
                columnNumber: 17
              }, this),
              " \xE0 cr\xE9er, partager, designer. Partageons l\u2019amour de nos m\xE9tiers.               "
            ] }, void 0, true, {
              fileName: "app/routes/values.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/values.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/values.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/projects"), className: "py-3 px-2 transition-all duration-300 ease-in-out font-bold text-[7px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full w-[100px] mx-auto", children: "Mes projets" }, void 0, false, {
          fileName: "app/routes/values.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/values.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/values.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/values.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(Values, "aTXwj+32TYSD1Gwc45WCk1GpW2Q=", false, function() {
  return [useHeaderColor, useNavigate];
});
_c = Values;
var _c;
$RefreshReg$(_c, "Values");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Values as default
};
//# sourceMappingURL=/build/routes/values-RVNRBEQJ.js.map
