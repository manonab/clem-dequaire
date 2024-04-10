import {
  ArrowRight
} from "/build/_shared/chunk-Z7AT2O2U.js";
import {
  Add_default,
  Remove_default
} from "/build/_shared/chunk-V3TWXCM5.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  useNavigate
} from "/build/_shared/chunk-FWVAADBG.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  Images
} from "/build/_shared/chunk-HADPQMTS.js";
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

// app/routes/services.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/services.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/services.tsx"
  );
  import.meta.hot.lastModified = "1712207947164.0886";
}
function Services() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  const [isCommunicationSelected, setIsCommunicationSelected] = (0, import_react.useState)(false);
  const [isDesignSelected, setIsDesignSelected] = (0, import_react.useState)(false);
  const [isConsultingSelected, setIsConsultingSelected] = (0, import_react.useState)(false);
  const router = useNavigate();
  const scrollingTextRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    setHeaderColor("linear-services");
    const handleScroll = () => {
      if (scrollingTextRef.current) {
        const rect = scrollingTextRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setScrolled(isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderColor]);
  const handleCommunication = () => {
    setIsCommunicationSelected((isCommunicationSelected2) => !isCommunicationSelected2);
  };
  const handleDesign = () => {
    setIsDesignSelected((isDesignSelected2) => !isDesignSelected2);
  };
  const handleConsulting = () => {
    setIsConsultingSelected((isConsultingSelected2) => !isConsultingSelected2);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col flex gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellowHome", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-evenly h-full !w-auto mx-auto py-40", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col flex gap-12 w-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold  text-[50px] leading-[90%] text-gray-900", children: [
            "Communication &",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 67,
              columnNumber: 30
            }, this),
            "marketing digital"
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-end flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-gray-900 w-[300px]", children: "Informer, engager et fid\xE9liser votre audience avec une strat\xE9gie moderne et adapt\xE9e \xE0 vos probl\xE9matiques." }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 71,
                columnNumber: 17
              }, this),
              isCommunicationSelected ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: handleCommunication, className: "hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Add_default, {}, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 74,
                columnNumber: 112
              }, this) }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 74,
                columnNumber: 44
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hover:cursor-pointer", onClick: handleCommunication, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Remove_default, {}, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 74,
                columnNumber: 196
              }, this) }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 74,
                columnNumber: 128
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this),
            isCommunicationSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc ml-3 mt-3 text-gray-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "Social Media" }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 78,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "SEO" }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 79,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "Gestion de projet" }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 80,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "R\xE9daction" }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 81,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "Campagnes payantes (ads)" }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 82,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 77,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 76,
              columnNumber: 43
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col flex gap-12 w-auto h-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-[50px] leading-[90%]", children: "Design" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-end flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-gray-900 w-[300px]", children: "Donner de la puissance \xE0 vos messages avec des designs marquants et intuitifs, notamment sur les r\xE9seaux.                " }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 91,
                columnNumber: 17
              }, this),
              isDesignSelected ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: handleDesign, className: "hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Add_default, {}, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 93,
                columnNumber: 98
              }, this) }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 93,
                columnNumber: 37
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hover:cursor-pointer", onClick: handleDesign, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Remove_default, {}, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 93,
                columnNumber: 175
              }, this) }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 93,
                columnNumber: 114
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 90,
              columnNumber: 15
            }, this),
            isDesignSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc ml-3 mt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "UX/UI design (Figma)" }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 96,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "Cartes de visite, brochures... " }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 97,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "R\xE9seaux sociaux (posts, stories)." }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 98,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 95,
              columnNumber: 36
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col flex gap-12  w-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueBold text-[50px] leading-[90%]", children: "Consulting" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-gray-900 w-[300px] font-footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-end flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-gray-900 w-[300px]", children: "Vous portez vers une communication plus \xE9thique et solidaire qui r\xE9pond aux probl\xE9matiques d\u2019aujourd\u2019hui." }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 107,
                columnNumber: 19
              }, this),
              isConsultingSelected ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: handleConsulting, className: "hover:cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Add_default, {}, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 110,
                columnNumber: 108
              }, this) }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 110,
                columnNumber: 43
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hover:cursor-pointer", onClick: handleConsulting, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Remove_default, {}, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 110,
                columnNumber: 189
              }, this) }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 110,
                columnNumber: 124
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 106,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            isConsultingSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc ml-3 mt-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: "Relecture inclusive" }, void 0, false, {
                fileName: "app/routes/services.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-base font-semibold", children: [
                "Formation & sensibilisation aux questions",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 115,
                  columnNumber: 100
                }, this),
                " LGBTQ+ & f\xE9ministes"
              ] }, void 0, true, {
                fileName: "app/routes/services.tsx",
                lineNumber: 115,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/services.tsx",
              lineNumber: 113,
              columnNumber: 40
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "scrolling-text", ref: scrollingTextRef, className: `flex items-center justify-end gap-3 relative ${scrolled ? "scrolling" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-right font-neueRegular uppercase text-[160px] leading-[90%] text-orange", children: "CR\xC9ER" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Images.service, alt: "Service" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-right font-neueRegular uppercase text-[160px] leading-[90%] text-orange ${scrolled ? "text-transition" : "hidden"}`, children: "CR\xC9ER" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-mainColor h-screen my-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueRegular text-[50px] leading-[90%] mb-20 ml-20", children: "Expertise" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-evenly", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "01." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-base leading-[90%] font-bold my-6", children: "Analyser." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-base leading-[130%]", children: "Ma mission est de vous \xE9couter et de vous accompagner pas \xE0 pas dans votre parcours. Avoir compr\xE9hension approfondie de vos probl\xE9matiques pour trouver ensemble des solutions efficaces et personnalis\xE9es qui r\xE9pondent \xE0 vos d\xE9fis uniques." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 132,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "02." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 138,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-base leading-[90%] font-bold my-6", children: "Optimiser." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-base leading-[130%]", children: "Construire ensemble une image de marque solide et coh\xE9rente. En adoptant une approche centr\xE9e sur vos besoins, je vise \xE0 cr\xE9er pour vous une strat\xE9gie innovante et actuelle qui qui r\xE9sonnera avec votre audience cible et g\xE9n\xE8rera un engagement nouveau.             " }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "03." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 144,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-base leading-[90%] font-bold my-6", children: "Conseiller." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-footer text-base leading-[130%]", children: "Dans un monde o\xF9 la diversit\xE9 est devenue un \xE9l\xE9ment incontournable, je serai l\xE0 pour vous soutenir et vous fournir les outils et conseils n\xE9cessaires pour naviguer avec succ\xE8s dans cet environnement complexe et diversifi\xE9." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 146,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => router("/projects"), className: "mt-[100px] hover:cursor-pointer ml-[100px] flex gap-1.5 w-[105px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "uppercase text-	font-bold font-footer", children: "Projets" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b-black border-b-2 w-[105px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/services.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(Services, "uXX7qCanhmuQAJDBlqKsWvy3DBE=", false, function() {
  return [useHeaderColor, useNavigate];
});
_c = Services;
var _c;
$RefreshReg$(_c, "Services");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Services as default
};
//# sourceMappingURL=/build/routes/services-JLIZCOKH.js.map
