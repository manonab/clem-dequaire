var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WUIVI2IG.css";

// app/components/header/index.tsx
import { useNavigate } from "@remix-run/react";

// app/context/index.tsx
import { createContext, useContext, useState } from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var HeaderColorContext = createContext({
  headerColor: "",
  setHeaderColor: () => {
  }
}), useHeaderColor = () => useContext(HeaderColorContext), HeaderColorProvider = ({ children }) => {
  let [headerColor, setHeaderColor] = useState("");
  return console.log("headerColor from context:", headerColor), /* @__PURE__ */ jsxDEV2(HeaderColorContext.Provider, { value: { headerColor, setHeaderColor }, children }, void 0, !1, {
    fileName: "app/context/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// app/components/header/index.tsx
import { motion } from "framer-motion";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Menu = () => {
  let router = useNavigate(), { headerColor } = useHeaderColor(), pathTextMapping = [
    { path: "/about", name: "\xC0 propos" },
    // { path: "/values", name: "Mes valeurs" },
    { path: "/services", name: "Services" },
    { path: "/projects", name: "Projets" }
  ];
  return /* @__PURE__ */ jsxDEV3(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
      className: `${headerColor} flex mx-auto justify-between py-[30px] px-[40px]`,
      children: [
        /* @__PURE__ */ jsxDEV3("div", { onClick: () => router("/home"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV3("p", { className: "text-grayBlack font-kateMedium text-3xl leading-8", children: "C." }, void 0, !1, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV3(
          "div",
          {
            className: "flex justify-center items-center",
            children: pathTextMapping.map((route) => /* @__PURE__ */ jsxDEV3(
              "div",
              {
                className: "px-5 w-auto",
                onClick: () => router(`${route.path}`),
                children: /* @__PURE__ */ jsxDEV3("p", { className: "leading-4 text-grayBlack hover:cursor-pointer text-xs font-clash text-black", children: route.name }, void 0, !1, {
                  fileName: "app/components/header/index.tsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this)
              },
              route.path,
              !1,
              {
                fileName: "app/components/header/index.tsx",
                lineNumber: 29,
                columnNumber: 11
              },
              this
            ))
          },
          void 0,
          !1,
          {
            fileName: "app/components/header/index.tsx",
            lineNumber: 26,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3("div", { onClick: () => router("/contact"), children: /* @__PURE__ */ jsxDEV3("p", { className: "text-xs hover:cursor-pointer font-clashSemibold underline", children: "Let\u2019s work together" }, void 0, !1, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/header/index.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/header/index.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
};

// app/common/layout/index.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Layout = ({ children }) => /* @__PURE__ */ jsxDEV4("div", { className: "h-screen bg-mainColor w-screen", children: [
  /* @__PURE__ */ jsxDEV4(Menu, {}, void 0, !1, {
    fileName: "app/common/layout/index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV4("main", { children }, void 0, !1, {
    fileName: "app/common/layout/index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/common/layout/index.tsx",
  lineNumber: 12,
  columnNumber: 5
}, this);

// app/root.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV5(HeaderColorProvider, { children: /* @__PURE__ */ jsxDEV5("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(
        "link",
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { children: /* @__PURE__ */ jsxDEV5(Layout, { children: [
      /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Project
});
import { useNavigate as useNavigate2 } from "@remix-run/react";
import { useEffect } from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Project() {
  let { setHeaderColor } = useHeaderColor(), router = useNavigate2();
  return useEffect(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV6("div", { className: "h-full", children: [
    /* @__PURE__ */ jsxDEV6("div", { onClick: () => console.log("nothing from now"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV6("p", { className: "text-[180px] my-20 text-center  font-neueRegular text-orange leading-[90%]", children: "PORTEFOLIO" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { onClick: () => router("/mosaic"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV6("p", { className: "text-[180px] my-20 text-left ml-28 font-neueRegular text-redHome leading-[90%]", children: "MOSAIC" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Services
});
import { useEffect as useEffect2 } from "react";

// app/assets/eye.png
var eye_default = "/build/_assets/eye-CKRM674F.png";

// app/assets/image1.png
var image1_default = "/build/_assets/image1-CTTH335I.png";

// app/assets/image2.png
var image2_default = "/build/_assets/image2-EVRSEZIK.png";

// app/assets/image3.png
var image3_default = "/build/_assets/image3-Z4SPUBSX.png";

// app/assets/image4.png
var image4_default = "/build/_assets/image4-TNG7FKDR.png";

// app/assets/image5.png
var image5_default = "/build/_assets/image5-SNRTZSIU.png";

// app/assets/image6.png
var image6_default = "/build/_assets/image6-W5356ZSH.png";

// app/assets/image7.png
var image7_default = "/build/_assets/image7-G4CFWDGH.png";

// app/assets/image8.png
var image8_default = "/build/_assets/image8-344HZ4MV.png";

// app/assets/image9.png
var image9_default = "/build/_assets/image9-DNNGWOFO.png";

// app/assets/image10.png
var image10_default = "/build/_assets/image10-PE62ZTPI.png";

// app/assets/logo.png
var logo_default = "/build/_assets/logo-JRSPZ2IB.png";

// app/assets/mosaic.png
var mosaic_default = "/build/_assets/mosaic-7QDG5ZMK.png";

// app/assets/bear.png
var bear_default = "/build/_assets/bear-XFIOM2CT.png";

// app/assets/book.png
var book_default = "/build/_assets/book-6VUXS4TA.png";

// app/assets/hastag.png
var hastag_default = "/build/_assets/hastag-DSSIYVVF.png";

// app/assets/capiche.png
var capiche_default = "/build/_assets/capiche-ET66KVMZ.png";

// app/assets/becks.png
var becks_default = "/build/_assets/becks-PBRWWEAP.png";

// app/assets/rabbit.png
var rabbit_default = "/build/_assets/rabbit-IAV27EE5.png";

// app/assets/group.png
var group_default = "/build/_assets/group-AITVSKRB.png";

// app/assets/pride.png
var pride_default = "/build/_assets/pride-X3QV64FO.png";

// app/assets/arrow-manifesto.png
var arrow_manifesto_default = "/build/_assets/arrow-manifesto-FW3SFXBL.png";

// app/assets/arrow-service.png
var arrow_service_default = "/build/_assets/arrow-service-7UH3J7S3.png";

// app/assets/magenta.png
var magenta_default = "/build/_assets/magenta-OGWI7FUN.png";

// app/assets/mosaic_1.png
var mosaic_1_default = "/build/_assets/mosaic_1-NLI7KAJJ.png";

// app/assets/mosaic_2.png
var mosaic_2_default = "/build/_assets/mosaic_2-LET5M6VW.png";

// app/common/images/index.tsx
var Images = {
  eye: eye_default,
  image1: image1_default,
  image2: image2_default,
  image3: image3_default,
  image4: image4_default,
  image5: image5_default,
  image6: image6_default,
  image7: image7_default,
  image8: image8_default,
  image9: image9_default,
  image10: image10_default,
  logo: logo_default,
  mosaic: mosaic_default,
  bear: bear_default,
  capiche: capiche_default,
  becks: becks_default,
  rabbit: rabbit_default,
  has: hastag_default,
  book: book_default,
  group: group_default,
  pride: pride_default,
  manifesto: arrow_manifesto_default,
  service: arrow_service_default,
  rectangle: magenta_default,
  mosaic1: mosaic_1_default,
  mosaic2: mosaic_2_default
};

// app/assets/arrow-right.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var ArrowRight = () => /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", width: "38", height: "16", viewBox: "0 0 38 16", fill: "none", children: /* @__PURE__ */ jsxDEV7("path", { d: "M37.7071 8.70711C38.0976 8.31658 38.0976 7.68342 37.7071 7.29289L31.3431 0.928932C30.9526 0.538408 30.3195 0.538408 29.9289 0.928932C29.5384 1.31946 29.5384 1.95262 29.9289 2.34315L35.5858 8L29.9289 13.6569C29.5384 14.0474 29.5384 14.6805 29.9289 15.0711C30.3195 15.4616 30.9526 15.4616 31.3431 15.0711L37.7071 8.70711ZM0 9L37 9V7L0 7L0 9Z", fill: "black" }, void 0, !1, {
  fileName: "app/assets/arrow-right.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/assets/arrow-right.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/routes/services.tsx
import { useNavigate as useNavigate3 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Services() {
  let { setHeaderColor } = useHeaderColor(), router = useNavigate3();
  return useEffect2(() => {
    setHeaderColor("linear-services");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV8("div", { className: "w-full h-full flex-col", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "bg-yellowHome pt-20", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center mb-32", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col mx-auto h-[400px] justify-around", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "h-1/2 mb-3", children: [
            /* @__PURE__ */ jsxDEV8("p", { className: "font-neueBold  text-[50px] leading-[90%]", children: "Communication" }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 21,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxDEV8("p", { className: "font-neueBold  text-[50px] leading-[90%] mr-10", children: "&" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 25,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV8("p", { className: "font-neueBold  text-[50px] leading-[90%]", children: "marketing" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 26,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 24,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "font-neueBold  text-[50px] leading-[90%] ml-20", children: "digital." }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 28,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "h-1/2", children: [
            /* @__PURE__ */ jsxDEV8("p", { className: "w-[328px]  text-[16px]", children: "Informer, engager et persuader votre public avec des technologies actuelles et adapt\xE9es \xE0 vos probl\xE9matiques." }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 31,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("ul", { className: "list-disc ml-3 mt-3", children: [
              /* @__PURE__ */ jsxDEV8("li", { className: "text-[16px] font-semibold", children: "Social Media" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 35,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV8("li", { className: "text-[16px] font-semibold", children: "SEO" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 36,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV8("li", { className: "text-[16px] font-semibold", children: "Corporate writing" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 37,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 34,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col mx-auto h-[400px]", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "font-neueBold text-[50px] leading-[90%] mt-20", children: "Design" }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "mt-[85px]", children: [
            /* @__PURE__ */ jsxDEV8("p", { className: "w-[328px] text-[16px]", children: "Donner de la puissance \xE0 vos messages avec des designs marquants et intuitifs, notamment sur les r\xE9seaux." }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 44,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("ul", { className: "list-disc ml-3 mt-3", children: [
              /* @__PURE__ */ jsxDEV8("li", { className: "text-[16px] font-semibold", children: "UX/UI design" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 46,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV8("li", { className: "text-[16px] font-semibold", children: "Supports de communication" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 47,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV8("li", { className: "text-[16px] font-semibold", children: "Posts r\xE9seaux sociaux" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col mx-auto h-[400px]", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "font-neueBold text-[50px] leading-[90%] mt-20", children: "Consulting" }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "mt-[85px]", children: [
            /* @__PURE__ */ jsxDEV8("p", { className: "w-[328px] text-[16px]", children: "Vous portez vers une communication plus \xE9thique et solidaire qui r\xE9pond aux probl\xE9matiques d\u2019aujourd\u2019hui." }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 56,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("ul", { className: "list-disc ml-3 mt-3", children: /* @__PURE__ */ jsxDEV8("li", { className: "text-[16px] font-semibold", children: "Consulting \xE9thique" }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 58,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-end pb-20", children: [
        /* @__PURE__ */ jsxDEV8("img", { src: Images.service, className: "mr-10" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "text-right font-neueRegular uppercase text-[160px] leading-[90%] text-orange", children: "MES SERVICES" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "bg-mainColor h-screen my-20", children: [
      /* @__PURE__ */ jsxDEV8("p", { className: "font-neueRegular text-[50px] leading-[90%] mb-20 ml-20", children: "Expertise" }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-evenly", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "01." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[16px] leading-[90%] font-bold my-6", children: "Analyser." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[16px] leading-[130%]", children: "Ma mission est de vous \xE9couter et de vous accompagner pas \xE0 pas dans votre parcours. Avoir compr\xE9hension approfondie de vos probl\xE9matiques pour trouver ensemble des solutions efficaces et personnalis\xE9es qui r\xE9pondent \xE0 vos d\xE9fis uniques." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "02." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[16px] leading-[90%] font-bold my-6", children: "Optimiser." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[16px] leading-[130%]", children: "Construire ensemble une image de marque solide et coh\xE9rente. En adoptant une approche centr\xE9e sur vos besoins, je vise \xE0 cr\xE9er pour vous une strat\xE9gie innovante et actuelle qui qui r\xE9sonnera avec votre audience cible et g\xE9n\xE8rera un engagement nouveau." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "03." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[16px] leading-[90%] font-bold my-6", children: "Conseiller." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-[16px] leading-[130%]", children: "Dans un monde o\xF9 la diversit\xE9 est devenue un \xE9l\xE9ment incontournable, je serai l\xE0 pour vous soutenir et vous fournir les outils et conseils n\xE9cessaires pour naviguer avec succ\xE8s dans cet environnement complexe et diversifi\xE9." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { onClick: () => router("/projects"), className: "mt-[100px] hover:cursor-pointer ml-[100px] flex border-b-black border-b-2 w-[150px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ jsxDEV8("p", { className: "uppercase text-xl	font-footer", children: "Projets" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8(ArrowRight, {}, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/services.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
import { useEffect as useEffect3, useState as useState2 } from "react";
import emailjs from "emailjs-com";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Modal({ onClose }) {
  return /* @__PURE__ */ jsxDEV9("div", { className: "fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ jsxDEV9("div", { className: "bg-white p-8 rounded-md", children: [
    /* @__PURE__ */ jsxDEV9("p", { className: "font-neueRegular text-xl text-center", children: "Votre message a bien \xE9t\xE9 envoy\xE9 !" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("button", { onClick: onClose, className: "block mx-auto mt-4 bg-royalBlue text-white font-bold py-2 px-4 rounded", children: "Fermer" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function Contact() {
  let { setHeaderColor } = useHeaderColor(), [showModal, setShowModal] = useState2(!1), [name, setName] = useState2(""), [email, setEmail] = useState2(""), [subject, setSubject] = useState2(""), [message, setMessage] = useState2("");
  return useEffect3(() => {
    emailjs.init("IoYqcS-FyoRAsKFCH"), setHeaderColor("mainColor");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV9("div", { className: "w-screen h-screen flex mt-20 mb-10", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex-col ml-10 ", children: [
      /* @__PURE__ */ jsxDEV9("p", { className: "text-[200px] leading-[90%] text-royalBlue uppercase font-neueRegular", children: "Con" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("p", { className: "text-[200px] leading-[90%] text-royalBlue uppercase font-neueRegular", children: "tact." }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    showModal && /* @__PURE__ */ jsxDEV9(Modal, { onClose: () => {
      setShowModal(!1);
    } }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 64,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "flex-col mx-auto", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-around", children: [
        /* @__PURE__ */ jsxDEV9("div", { children: [
          /* @__PURE__ */ jsxDEV9("p", { className: "font-inter mb-1", children: "Nom" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV9("input", { value: name, onChange: (e) => setName(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { children: [
          /* @__PURE__ */ jsxDEV9("p", { className: "font-inter mb-1", children: "Email" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV9("input", { value: email, onChange: (e) => setEmail(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "my-10", children: [
        /* @__PURE__ */ jsxDEV9("p", { className: "font-inter mb-1", children: "Object" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV9("input", { value: subject, onChange: (e) => setSubject(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: " mt-10", children: [
        /* @__PURE__ */ jsxDEV9("p", { className: "font-inter mb-1", children: "Message" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV9("textarea", { value: message, onChange: (e) => setMessage(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[635px] h-[190px]" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { onClick: () => {
        emailjs.send("service_bws8nok", "template_xk52e9b", {
          user_name: name,
          message,
          user_email: email,
          user_object: subject
        }).then((response) => {
          console.log("Email envoy\xE9 avec succ\xE8s !", response), setShowModal(!0), setName(""), setEmail(""), setSubject(""), setMessage("");
        }).catch((error) => {
          console.error("Erreur lors de l'envoi de l'e-mail :", error);
        });
      }, className: "hover:cursor-pointer border-black bg-black border mt-5 mr-[10px] rounded-3xl px-5 py-3 w-[200px] mx-auto", children: /* @__PURE__ */ jsxDEV9("p", { className: "leading-[17.5px] font-bold text-sm text-center text-white uppercase", children: "Envoyez" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useEffect as useEffect7, useState as useState6 } from "react";
import { motion as motion4 } from "framer-motion";

// app/components/home/background-slider.tsx
import { useEffect as useEffect4, useState as useState3 } from "react";
import { motion as motion2 } from "framer-motion";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var BackgroundSlider = ({ isVisible = !1 }) => {
  let [isHovered, setIsHovered] = useState3(!1), { setHeaderColor } = useHeaderColor();
  return useEffect4(() => {
    let timer = setTimeout(() => {
      setIsHovered(!0);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV10(
    motion2.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
      className: `animate__animated animate__fadeInUpBig animate__delay-1.3s ${isVisible ? "w-full md:min-h-[910px] flex justify-between items-start z-10 h-full inset-0 absolute -top-20 bg_slider" : "hidden"} ${isHovered && "hovered"}`,
      children: /* @__PURE__ */ jsxDEV10("div", { className: "flex-col", children: [
        /* @__PURE__ */ jsxDEV10("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2s" }, children: "for" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.1s" }, children: "bold" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.2s" }, children: "mind" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.3s" }, children: "only" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/background-slider.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/home/background-slider.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}, background_slider_default = BackgroundSlider;

// app/components/home/index.tsx
import { useEffect as useEffect6 } from "react";
import { motion as motion3 } from "framer-motion";

// app/assets/big-arrow.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var BigArrow = () => /* @__PURE__ */ jsxDEV11("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "51", viewBox: "0 0 15 51", fill: "none", children: /* @__PURE__ */ jsxDEV11("path", { d: "M6.7929 50.7071C7.18342 51.0976 7.81658 51.0976 8.20711 50.7071L14.5711 44.3431C14.9616 43.9526 14.9616 43.3195 14.5711 42.9289C14.1805 42.5384 13.5474 42.5384 13.1569 42.9289L7.5 48.5858L1.84315 42.9289C1.45262 42.5384 0.819458 42.5384 0.428934 42.9289C0.0384097 43.3195 0.0384097 43.9526 0.428934 44.3431L6.7929 50.7071ZM6.5 4.37114e-08L6.5 50L8.5 50L8.5 -4.37114e-08L6.5 4.37114e-08Z", fill: "black" }, void 0, !1, {
  fileName: "app/assets/big-arrow.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/assets/big-arrow.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/components/home/index.tsx
import { Parallax as Parallax2, ParallaxProvider } from "react-scroll-parallax";

// app/components/home/description.tsx
import { useEffect as useEffect5, useState as useState4 } from "react";
import { useNavigate as useNavigate4 } from "@remix-run/react";
import { Parallax } from "react-scroll-parallax";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Description = () => {
  let router = useNavigate4(), [scrollPosition, setScrollPosition] = useState4(0);
  useEffect5(() => {
    let handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let isServicesSectionVisible = scrollPosition > 2e3;
  return /* @__PURE__ */ jsxDEV12("div", { className: `w-full h-auto flex flex-col ${isServicesSectionVisible ? "bg-saumon" : "bg-yellowHome"}`, children: [
    /* @__PURE__ */ jsxDEV12("div", { className: "w-full h-full mx-auto flex flex-col gap-[150px] py-32", children: [
      /* @__PURE__ */ jsxDEV12("p", { className: "w-[1100px] ml-24 text-left text-orange text-[64px] leading-[57.6px] font-neueMedium", children: "Aux grands mots les grands designs. Parce que votre message m\xE9ritent d\u2019\xEAtre entendu, travaillons ensemble." }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "w-[1100px] ml-48 text-right text-orange text-[64px] leading-[57.6px] font-neueMedium", children: "Cr\xE9ative passionn\xE9e, je m\u2019efforce d\u2019aider votre marque \xE0 grandir gr\xE2ce au design et au marketing digital." }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { onClick: () => router("/about"), className: "mb-20 hover:cursor-pointer ml-28 flex border-b-black border-b-2 w-[220px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ jsxDEV12("p", { className: "uppercase text-xl	font-footer", children: "En savoir plus" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12(ArrowRight, {}, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "w-screen h-full relative", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: "flex items-start w-full -mt-24", children: /* @__PURE__ */ jsxDEV12("div", { className: "w-[800px] ml-20", children: /* @__PURE__ */ jsxDEV12("p", { className: "text-[250px] text-redHome text-center font-neueRegular uppercase leading-[225px]", children: "Services" }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "flex items-center justify-around my-36 mx-20", children: [
        /* @__PURE__ */ jsxDEV12("div", { className: "flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "Communication" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV12("p", { className: "font-neueBold  text-[75px] leading-[75px] mr-10", children: "&" }, void 0, !1, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "marketing" }, void 0, !1, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV12("p", { className: "font-neueBold  text-[75px] leading-[75px] ml-20", children: "digital." }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "Design" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "font-neueBold  text-[75px] leading-[75px]", children: "Consulting" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { onClick: () => router("/projects"), className: "mb-[250px] hover:cursor-pointer ml-20 flex border-b-black border-b-2 w-[184px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ jsxDEV12("p", { className: "uppercase text-xl	font-footer", children: "VOIR PLUS" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12(ArrowRight, {}, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(Parallax, { speed: -15, className: "min-h-[450px]", children: /* @__PURE__ */ jsxDEV12("div", { className: "w-full h-screen bg-mainColor relative pt-20", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: "flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxDEV12("p", { className: "flex justify-center mt-44 items-center text-[100px] leading-[100px] text-royalBlue font-neueSemiBold", children: [
          "Like what you s",
          /* @__PURE__ */ jsxDEV12("span", { children: /* @__PURE__ */ jsxDEV12("img", { src: Images?.rabbit, className: "w-[130px] bg-center rounded-2xl mx-2" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 58,
            columnNumber: 150
          }, this) }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 58,
            columnNumber: 144
          }, this),
          "?"
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "text-black font-footer font-medium leading-[100px] text-center text-[90px]", children: "Restons en contact" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { onClick: () => router("/contact"), className: "hover:cursor-pointer border-black border my-20 rounded-3xl px-5 py-3 w-[200px] mx-auto", children: /* @__PURE__ */ jsxDEV12("p", { className: "leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase", children: "Contactez-moi" }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/description.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}, description_default = Description;

// app/components/home/index.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}, timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96]
}, HomeComponent = () => {
  let { setHeaderColor } = useHeaderColor();
  return useEffect6(() => {
    setHeaderColor("#FCF6EF");
  }, []), /* @__PURE__ */ jsxDEV13(ParallaxProvider, { children: [
    /* @__PURE__ */ jsxDEV13(Parallax2, { speed: -30, children: [
      /* @__PURE__ */ jsxDEV13(
        motion3.div,
        {
          className: "w-screen h-screen z-10 flex justify-between items-start",
          initial: "hidden",
          animate: "visible",
          variants: sectionVariants,
          transition: { ...timing },
          children: [
            /* @__PURE__ */ jsxDEV13(
              motion3.img,
              {
                src: Images.has,
                alt: "ha image",
                className: "w-[310px] h-[425px]",
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0 },
                transition: { ...timing, delay: 0.2 }
              },
              void 0,
              !1,
              {
                fileName: "app/components/home/index.tsx",
                lineNumber: 36,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV13(
              motion3.div,
              {
                className: "relative",
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0 },
                transition: { ...timing, delay: 0.5 },
                children: [
                  /* @__PURE__ */ jsxDEV13(
                    motion3.img,
                    {
                      src: Images.bear,
                      alt: "bear image",
                      className: "w-[550px] h-[600px] mt-[80px]",
                      initial: { opacity: 0, y: 50 },
                      animate: { opacity: 1, y: 0 },
                      transition: { ...timing, delay: 0.5 }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/home/index.tsx",
                      lineNumber: 50,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV13(
                    motion3.p,
                    {
                      className: "text-center text-mainColor absolute top-[50%] left-[30%] font-neueMedium text-[50px]",
                      initial: { opacity: 0, y: 50 },
                      animate: { opacity: 1, y: 0 },
                      transition: { ...timing, delay: 0.7 },
                      children: "Bienvenue."
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/home/index.tsx",
                      lineNumber: 58,
                      columnNumber: 13
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/home/index.tsx",
                lineNumber: 44,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV13(
              motion3.img,
              {
                src: Images.book,
                alt: "book image",
                className: "w-[300px] h-[380px] opacity-[0.9] mt-[300px]",
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0 },
                transition: { ...timing, delay: 0.8 }
              },
              void 0,
              !1,
              {
                fileName: "app/components/home/index.tsx",
                lineNumber: 67,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/home/index.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13(
        motion3.div,
        {
          className: "mx-auto mb-[450px] pl-40 mt-[50px]  flex-col flex items-center gap-3",
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { ...timing, delay: 2 },
          children: [
            /* @__PURE__ */ jsxDEV13(BigArrow, {}, void 0, !1, {
              fileName: "app/components/home/index.tsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "SCROLL & ROLL" }, void 0, !1, {
              fileName: "app/components/home/index.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/home/index.tsx",
          lineNumber: 76,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(Parallax2, { speed: -15, children: /* @__PURE__ */ jsxDEV13(description_default, {}, void 0, !1, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}, home_default = HomeComponent;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Index() {
  let { setHeaderColor } = useHeaderColor(), [state, setState] = useState6({
    currentImage: 0,
    showLastPart: !1,
    animationFinished: !1
  }), images = [
    Images.eye,
    Images.image1,
    Images.image2,
    Images.image3,
    Images.image5,
    Images.image4,
    Images.image6,
    Images.image7,
    Images.image8,
    Images.image9,
    Images.image10,
    Images.logo
  ], startSlideShow = () => {
    let interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        currentImage: prev.currentImage < images.length - 1 ? prev.currentImage + 1 : prev.currentImage
      }));
    }, 150);
    return () => clearInterval(interval);
  };
  return useEffect7(() => {
    let fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);
    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []), useEffect7(() => {
    state.currentImage === images.length - 1 && (setTimeout(() => {
      setState((prev) => ({ ...prev, showLastPart: !0 }));
    }, 1500), setTimeout(() => {
      setHeaderColor("bg_slider hovered");
    }, 2400));
  }, [state.currentImage, images.length]), useEffect7(() => {
    state.showLastPart && setTimeout(() => {
      setState((prev) => ({ ...prev, animationFinished: !0 }));
    }, 4e3);
  }, [state.showLastPart]), /* @__PURE__ */ jsxDEV14(
    "div",
    {
      className: `${state.currentImage === images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`,
      children: [
        /* @__PURE__ */ jsxDEV14(
          motion4.div,
          {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            children: !state.animationFinished && /* @__PURE__ */ jsxDEV14(
              "img",
              {
                src: images[state.currentImage],
                alt: "Image",
                width: 400,
                height: 400,
                className: "rounded mx-auto"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 87,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 81,
            columnNumber: 7
          },
          this
        ),
        state.showLastPart && /* @__PURE__ */ jsxDEV14(background_slider_default, { isVisible: !state.animationFinished }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 97,
          columnNumber: 30
        }, this),
        state.animationFinished && /* @__PURE__ */ jsxDEV14(home_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 98,
          columnNumber: 35
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 5
    },
    this
  );
}

// app/routes/mosaic.tsx
var mosaic_exports = {};
__export(mosaic_exports, {
  default: () => Project2
});
import { useEffect as useEffect8 } from "react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function Project2() {
  let { setHeaderColor } = useHeaderColor();
  return useEffect8(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV15("div", { className: "h-full flex-col items-center justify-center mx-auto", children: [
    /* @__PURE__ */ jsxDEV15("div", { className: "flex-col my-20", children: [
      /* @__PURE__ */ jsxDEV15("p", { className: "font-neueRegular text-redHome text-[200px] leading-[90%] ml-20 mb-[180px]", children: "MOSAIC" }, void 0, !1, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "flex justify-evenly items-center", children: [
        /* @__PURE__ */ jsxDEV15("div", { className: "w-[400px] h-[400px]", children: [
          /* @__PURE__ */ jsxDEV15("p", { className: "text-[70px] mb-10 font-footer font-semibold leading-[90%]", children: "Concept." }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "font-footer h-[150px] text-[16px] leading-[130%]", children: "Mosaic est une association LGBTQ+ pour les jeunes de 12 \xE0 18 ans, qui propose des activit\xE9s, des programmes et des services accessibles qui visent \xE0 responsabiliser les membres de la communaut\xE9, \xE0 fournir des ressources essentielles et \xE0 d\xE9fendre les droits des jeunes LGBT+. " }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "w-[400px] h-[400px]", children: [
          /* @__PURE__ */ jsxDEV15("p", { className: "text-[70px] mb-10 font-footer font-semibold leading-[90%]", children: "Mission." }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "font-footer text-[16px] leading-[130%] h-[150px]", children: "Mon travail pour l\u2019association The Mosaic Trust a \xE9t\xE9 de cr\xE9er enti\xE8rement un plan de communication pour leur r\xE9seaux sociaux. " }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: "bg-saumon h-full pt-[150px] pb-[200px]", children: [
      /* @__PURE__ */ jsxDEV15("img", { src: Images.rectangle, className: "absolute left-[10%] z-0" }, void 0, !1, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "flex items-center mt-[150px] ml-[150px] jusitfy-center", children: [
        /* @__PURE__ */ jsxDEV15("img", { src: Images.mosaic1, className: "ml-[230px] z-[10]" }, void 0, !1, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("img", { src: Images.mosaic2, className: "ml-[100px]" }, void 0, !1, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: "h-screen bg-mainColor", children: [
      /* @__PURE__ */ jsxDEV15("p", { className: "w-[1000px] ml-20 mt-20 leading-[100%] text-[64px] font-neueCondensed text-orange", children: "Mosaic encourage, \xE9duque et inspire les jeune personnes LGBTQ+ et celleux \xE0 leur c\xF4t\xE9s" }, void 0, !1, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "flex items-center justify-around my-20", children: [
        /* @__PURE__ */ jsxDEV15("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV15("p", { className: "text-center mb-3 font-extrabold font-footer text-[100px] leading-[90%]", children: "+16%" }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-right ml-16  w-[200px] font-footer text-[25px] leading-[90%]", children: "Augmentation de l'audience en ligne." }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV15("p", { className: "text-center mb-10 font-extrabold font-footer text-[100px] leading-[90%]", children: "1" }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-right  w-[321px] font-footer text-[25px] leading-[90%]", children: "Nouveau concours litt\xE9raire pour les personnes Queer." }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV15("p", { className: "text-center mb-10 font-extrabold font-footer text-[100px] leading-[90%]", children: "+20" }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-right  w-[321px] font-footer text-[25px] leading-[90%]", children: "Workshops en ligne pour les jeunes LGBTQ+." }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mosaic.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "text-center font-neueRegular my-[200px] font-semibold text-[80px] leading-[90%] text-orange", children: "TEMOIGNAGE" }, void 0, !1, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "w-[1062px] text-center mx-auto font-neueCondensed text-redHome text-[64px] leading-[100%]", children: "\u201CCl\xE9mence was a true pleasure to work with. In joining us she created a new role for herself leveraging her skills and abilities to build on Mosaic's online presence and grew our audience [...]\u201D." }, void 0, !1, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "w-[280px] text-center mx-auto font-neueCondensed  mt-20 text-[50px] leading-[100%]", children: "Hugh O\u2019Keeffe" }, void 0, !1, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "border-t border-black w-[108px] my-5 mx-auto" }, void 0, !1, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "w-[313px] pb-[100px] text-center mx-auto font-inter  text-[30px] leading-[100%]", children: "Assistant de direction" }, void 0, !1, {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/mosaic.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/values.tsx
var values_exports = {};
__export(values_exports, {
  default: () => Values
});
import { useEffect as useEffect9 } from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function Values() {
  let { setHeaderColor } = useHeaderColor();
  return useEffect9(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV16(
    "div",
    {
      className: "rounded-[20px] mx-auto container w-[875px] h-[559px] z-10",
      children: /* @__PURE__ */ jsxDEV16("div", { className: "flex bg-mainColor justify-around flex-col gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV16("p", { className: "text-[80px] text-redHome font-neueSemiBold leading-[70px]", children: "Hello you," }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "w-[526px] text-xl text-center leading-6", children: "if you really really want to see this webiste, please keep in mind that it\u2019s still a work in progress !" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV16(
          "img",
          {
            src: Images.becks,
            alt: "victoria beckham image",
            className: "w-full h-[372px]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/values.tsx",
            lineNumber: 17,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/values.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/values.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { useNavigate as useNavigate5 } from "@remix-run/react";
import { useEffect as useEffect10 } from "react";
import { ParallaxProvider as ParallaxProvider2 } from "react-scroll-parallax";

// app/assets/big-down-arrow.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var BigDownArrow = () => /* @__PURE__ */ jsxDEV17("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "148", viewBox: "0 0 16 148", fill: "none", children: /* @__PURE__ */ jsxDEV17("path", { d: "M7.29289 147.707C7.68341 148.098 8.31658 148.098 8.7071 147.707L15.0711 141.343C15.4616 140.953 15.4616 140.319 15.0711 139.929C14.6805 139.538 14.0474 139.538 13.6568 139.929L7.99999 145.586L2.34314 139.929C1.95262 139.538 1.31945 139.538 0.928926 139.929C0.538402 140.319 0.538402 140.953 0.928926 141.343L7.29289 147.707ZM7 -4.37114e-08L6.99999 147L8.99999 147L9 4.37114e-08L7 -4.37114e-08Z", fill: "black" }, void 0, !1, {
  fileName: "app/assets/big-down-arrow.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/assets/big-down-arrow.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/routes/about.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function About() {
  let { setHeaderColor } = useHeaderColor(), router = useNavigate5();
  return useEffect10(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV18(ParallaxProvider2, { children: /* @__PURE__ */ jsxDEV18("div", { className: "flex-col flex gap-12 w-screen h-auto", children: [
    /* @__PURE__ */ jsxDEV18("div", { className: "flex items-end justify-between w-auto", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "min-w-[950px] flex-col flex", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "w-[1259px] ml-10", children: /* @__PURE__ */ jsxDEV18("p", { className: "font-neueRegular text-[200px] uppercase leading-[180px] text-orange font-medium", children: "IT\u2019S ALL ABOUT PASSION." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "w-[637px] ml-12 my-16", children: /* @__PURE__ */ jsxDEV18("p", { className: "leading-[31.2px] text-justify text-2xl font-normal font-footer", children: "Sp\xE9cialiste en communication/marketing et passionn\xE9e de design, j\u2019aide les entreprises \xE0 valoriser leur image de marque en leur proposant une strat\xE9gie digitale adapt\xE9e. J\u2019aime relever de nouveaux d\xE9fis et m\xE9thodiquement mener les projets jusqu'\xE0 leur pleine r\xE9ussite.                  " }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "w-auto", children: /* @__PURE__ */ jsxDEV18("p", { className: "mx-10 uppercase text-redHome text-[100px] font-medium font-neueRegular leading-[90px]", children: "Scroll" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "self-end mr-[220px] -mb-[130px] z-[10]", children: /* @__PURE__ */ jsxDEV18(BigDownArrow, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "bg-saumon h-full w-full flex-col flex", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "flex items-end justify-around", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "w-[395px] h-[480px] rounded-[50px] -mt-10 ml-12", children: /* @__PURE__ */ jsxDEV18("img", { alt: "men with pride flag", src: Images.pride }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("p", { className: "-mb-40 z-[10] w-[802px] leading-[72px] text-royalBlue text-right text-[80px] font-neueRegular", children: '"Seules 54% des entreprises fran\xE7aises ont embrass\xE9 la diversit\xE9"*.' }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center justify-around mb-10 mt-28 mx-20", children: [
        /* @__PURE__ */ jsxDEV18("p", { className: "text-[25px] leading-[32px] font-normal font-footer text-justify w-[640px]", children: "Dans un monde o\xF9 l'\xE9quit\xE9 n'est plus simplement une option mais une n\xE9cessit\xE9, j'ai un grand int\xE9r\xEAt \xE0 utiliser mon expertise pour aider les marques \xE0 \xE9voluer. Mon objectif est de les guider vers une approche plus inclusive. Cela implique de comprendre et de respecter la diversit\xE9 de leur public et de s'assurer que tous se sentent repr\xE9sent\xE9s et valoris\xE9s. Ensemble, faisons bouger les choses !              " }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "z-0 w-[395px] h-[480px] rounded-[50px]", children: /* @__PURE__ */ jsxDEV18("img", { alt: "group people", src: Images.group }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "bg-mainColor h-full w-full flex-col flex gap-12", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center justify-center", children: [
        /* @__PURE__ */ jsxDEV18("p", { className: "text-[250px] text-redHome font-neueRegular uppercase mr-10", children: "Militer" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("img", { alt: "arrow pink", src: Images.manifesto, width: 100, height: 100 }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("p", { className: "font-neueRegular italic text-[50px] leading-[90%] mx-16", children: "Manifesto" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "w-3/4 mx-auto", children: [
        /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV18("p", { className: "font-footer text-[70px] mr-14", children: "01." }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "leading-[100%] text-[28px] font-footer", children: [
            "L'",
            /* @__PURE__ */ jsxDEV18("span", { className: "text-orange", children: "inclusivit\xE9" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 64,
              columnNumber: 71
            }, this),
            " et le respect d\u2019autrui sont des valeurs fondamentales. Faisons de la diversit\xE9 un engagement quotidien."
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV18("p", { className: "font-footer text-[70px] mr-11", children: "02." }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "leading-[100%] text-[28px] font-footer", children: [
            "La ",
            /* @__PURE__ */ jsxDEV18("span", { className: "text-orange", children: "bienveillance" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 68,
              columnNumber: 72
            }, this),
            " et l'\xE9coute forment la base d'une culture d'entreprise saine et productive. Le dialogue est la cl\xE9."
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV18("p", { className: "font-footer text-[70px] mr-11", children: "03." }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "font-footer leading-[100%] text-[28px]", children: [
            "Sans ",
            /* @__PURE__ */ jsxDEV18("span", { className: "text-orange", children: "passion" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 72,
              columnNumber: 74
            }, this),
            ", pas d\u2019action. Croyez en votre message, je m\u2019occupe de le partager."
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV18("p", { className: "font-footer text-[70px] mr-11", children: "04." }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("p", { className: "leading-[100%] text-[28px] font-footer", children: [
            /* @__PURE__ */ jsxDEV18("span", { className: "text-orange", children: "Amusons nous" }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 76,
              columnNumber: 69
            }, this),
            " \xE0 cr\xE9er, partager, designer. Partageons l\u2019amour de nos m\xE9tiers."
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { onClick: () => router("/services"), className: "hover:cursor-pointer border-black border mb-20 rounded-3xl p-[10px] w-[200px] mx-auto", children: /* @__PURE__ */ jsxDEV18("p", { className: "leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase", children: "Services" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function Home() {
  return /* @__PURE__ */ jsxDEV19("div", { className: "my-20", children: /* @__PURE__ */ jsxDEV19(home_default, {}, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WSXQMMVQ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-P4DS5TL5.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-43WGSL2O.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GRQKCMS6.js", imports: ["/build/_shared/chunk-HC72RTTB.js", "/build/_shared/chunk-WSSTHBAM.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-IZ4SFPG7.js", imports: ["/build/_shared/chunk-2I4OTFRJ.js", "/build/_shared/chunk-FYYCLQBT.js", "/build/_shared/chunk-4XKXEAD2.js", "/build/_shared/chunk-ZYGGPWYC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-CRBWYHP5.js", imports: ["/build/_shared/chunk-FYYCLQBT.js", "/build/_shared/chunk-ZYGGPWYC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-45WLSZL4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-5NA5T2AP.js", imports: ["/build/_shared/chunk-2I4OTFRJ.js", "/build/_shared/chunk-FYYCLQBT.js", "/build/_shared/chunk-4XKXEAD2.js", "/build/_shared/chunk-ZYGGPWYC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/mosaic": { id: "routes/mosaic", parentId: "root", path: "mosaic", index: void 0, caseSensitive: void 0, module: "/build/routes/mosaic-ESJ56PGD.js", imports: ["/build/_shared/chunk-ZYGGPWYC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-2KJO3SFW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-F6WIVDTS.js", imports: ["/build/_shared/chunk-4XKXEAD2.js", "/build/_shared/chunk-ZYGGPWYC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/values": { id: "routes/values", parentId: "root", path: "values", index: void 0, caseSensitive: void 0, module: "/build/routes/values-7IXAD4UV.js", imports: ["/build/_shared/chunk-ZYGGPWYC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "76d33a58", hmr: { runtime: "/build/_shared/chunk-43WGSL2O.js", timestamp: 1707815991098 }, url: "/build/manifest-76D33A58.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/mosaic": {
    id: "routes/mosaic",
    parentId: "root",
    path: "mosaic",
    index: void 0,
    caseSensitive: void 0,
    module: mosaic_exports
  },
  "routes/values": {
    id: "routes/values",
    parentId: "root",
    path: "values",
    index: void 0,
    caseSensitive: void 0,
    module: values_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
