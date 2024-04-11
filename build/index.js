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
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) ? handleBotRequest(
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
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
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
          lineNumber: 63,
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
          lineNumber: 113,
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
var tailwind_default = "/build/_assets/tailwind-LXN5PJ6P.css";

// app/components/header/index.tsx
import { useState as useState2 } from "react";
import { useNavigate, useParams } from "@remix-run/react";

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
var logo_default = "/build/_assets/logo-NRS4NM6T.png";

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

// app/assets/arrow-services.png
var arrow_services_default = "/build/_assets/arrow-services-6FEQGCQZ.png";

// app/assets/magenta.png
var magenta_default = "/build/_assets/magenta-OGWI7FUN.png";

// app/assets/mosaic_1.png
var mosaic_1_default = "/build/_assets/mosaic_1-NLI7KAJJ.png";

// app/assets/mosaic_2.png
var mosaic_2_default = "/build/_assets/mosaic_2-LET5M6VW.png";

// app/assets/newlogo.png
var newlogo_default = "/build/_assets/newlogo-5OFPU77B.png";

// app/assets/capiche-logo.png
var capiche_logo_default = "/build/_assets/capiche-logo-YY6IAX7W.png";

// app/assets/mosaic/mosaic-001.png
var mosaic_001_default = "/build/_assets/mosaic-001-EFNXJY7N.png";

// app/assets/mosaic/mosaic-002.png
var mosaic_002_default = "/build/_assets/mosaic-002-WBA3Z7A2.png";

// app/assets/mosaic/mosaic-003.png
var mosaic_003_default = "/build/_assets/mosaic-003-XEYGZW23.png";

// app/assets/mosaic/mosaic-004.png
var mosaic_004_default = "/build/_assets/mosaic-004-BTZVNX2A.png";

// app/assets/mosaic/mosaic-005.png
var mosaic_005_default = "/build/_assets/mosaic-005-6J3CHBHC.png";

// app/assets/mosaic/mosaic-006.png
var mosaic_006_default = "/build/_assets/mosaic-006-T5WXN23J.png";

// app/assets/mosaic/mosaic-007.png
var mosaic_007_default = "/build/_assets/mosaic-007-O7DV6VUR.png";

// app/assets/capiche/background-capiche.png
var background_capiche_default = "/build/_assets/background-capiche-5AI7QUDH.png";

// app/assets/home/home-mobile.png
var home_mobile_default = "/build/_assets/home-mobile-T5HUKCXK.png";

// app/assets/home/home-mobile-2.png
var home_mobile_2_default = "/build/_assets/home-mobile-2-YQZLIR3V.png";

// app/assets/home/home-line.png
var home_line_default = "/build/_assets/home-line-H7Q34GVF.png";

// app/assets/home/home-capiche.png
var home_capiche_default = "/build/_assets/home-capiche-YK7K3NLA.png";

// app/assets/home/home-portfolio.png
var home_portfolio_default = "/build/_assets/home-portfolio-VZN244DF.png";

// app/assets/home/home-mosaic.png
var home_mosaic_default = "/build/_assets/home-mosaic-D7ZOAKP6.png";

// app/assets/contact/contact-arrow.png
var contact_arrow_default = "/build/_assets/contact-arrow-KH4MVL42.png";

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
  service: arrow_services_default,
  rectangle: magenta_default,
  mosaic1: mosaic_1_default,
  mosaic2: mosaic_2_default,
  newlogo: newlogo_default,
  capichelogo: capiche_logo_default,
  mosaic001: mosaic_001_default,
  mosaic002: mosaic_002_default,
  mosaic003: mosaic_003_default,
  mosaic004: mosaic_004_default,
  mosaic005: mosaic_005_default,
  mosaic006: mosaic_006_default,
  mosaic007: mosaic_007_default,
  capicheBG: background_capiche_default,
  homeMobile: home_mobile_default,
  homeMobile2: home_mobile_2_default,
  line: home_line_default,
  homeCapiche: home_capiche_default,
  homeMosaic: home_mosaic_default,
  homePortfolio: home_portfolio_default,
  contactArrow: contact_arrow_default
};

// app/components/header/index.tsx
import { Close } from "@mui/icons-material";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Menu = () => {
  let router = useNavigate(), params = useParams(), [selected, setSelected] = useState2("/home"), [isMenuOpen, setIsMenuOpen] = useState2(!1), { headerColor } = useHeaderColor(), pathTextMapping = [
    { path: "/home", name: "accueil" },
    { path: "/values", name: "mes valeurs" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" }
  ], pathTextMappingMobile = [
    { path: "/home", name: "accueil" },
    { path: "/values", name: "\xE0 propos" },
    { path: "/services", name: "services" },
    { path: "/projects", name: "projets" },
    { path: "/contact", name: "contact" }
  ], handleChange = (route) => {
    setSelected(route), router(`${route}`);
  }, toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
        className: `${headerColor} hidden md:flex mx-auto justify-between items-center py-[30px] px-[40px]`,
        children: [
          /* @__PURE__ */ jsxDEV3("div", { onClick: () => router("/home"), className: "hover:cursor-pointer h-[70px]", children: /* @__PURE__ */ jsxDEV3("img", { src: Images.newlogo, alt: "logo", width: "50px", height: "50px" }, void 0, !1, {
            fileName: "app/components/header/index.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/header/index.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3(
            "div",
            {
              className: "flex justify-center items-center gap-9",
              children: pathTextMapping.map((route) => /* @__PURE__ */ jsxDEV3(
                "div",
                {
                  className: "w-auto",
                  onClick: () => handleChange(route.path),
                  children: /* @__PURE__ */ jsxDEV3("p", { className: `${selected === route.path ? "text-redHome font-bold" : " text-grayBlack"} hover:text-redHome hover:font-bold leading-4 hover:cursor-pointer text-[18px] font-footer text-black`, children: route.name }, void 0, !1, {
                    fileName: "app/components/header/index.tsx",
                    lineNumber: 56,
                    columnNumber: 15
                  }, this)
                },
                route.path,
                !1,
                {
                  fileName: "app/components/header/index.tsx",
                  lineNumber: 51,
                  columnNumber: 13
                },
                this
              ))
            },
            void 0,
            !1,
            {
              fileName: "app/components/header/index.tsx",
              lineNumber: 48,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            "div",
            {
              onClick: () => router("/contact"),
              className: "hover:cursor-pointer flex flex-col items-center justify-around",
              children: [
                /* @__PURE__ */ jsxDEV3("span", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxDEV3("p", { className: "text-[15px] hover:cursor-pointer font-clashSemibold uppercase", children: "Rencontrons nous" }, void 0, !1, {
                  fileName: "app/components/header/index.tsx",
                  lineNumber: 66,
                  columnNumber: 13
                }, this) }, void 0, !1, {
                  fileName: "app/components/header/index.tsx",
                  lineNumber: 65,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "border-b-black border-b-2 w-[165px] h-10 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, !1, {
                  fileName: "app/components/header/index.tsx",
                  lineNumber: 68,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/header/index.tsx",
              lineNumber: 62,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/header/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3("div", { className: "md:hidden", children: [
      /* @__PURE__ */ jsxDEV3(
        "div",
        {
          className: `${headerColor} flex justify-between items-center py-[30px] px-[30px]`,
          children: [
            /* @__PURE__ */ jsxDEV3("div", { onClick: () => router("/home"), className: "hover:cursor-pointer h-[70px]", children: /* @__PURE__ */ jsxDEV3("img", { src: Images.newlogo, alt: "logo", width: "50px", height: "50px" }, void 0, !1, {
              fileName: "app/components/header/index.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/header/index.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV3("button", { onClick: toggleMenu, className: "text-grayBlack focus:outline-none flex gap-0.5", children: [
              /* @__PURE__ */ jsxDEV3(
                motion.div,
                {
                  initial: { y: 10, opacity: 0, scale: 0.5 },
                  animate: { y: 0, opacity: 1, scale: 1 },
                  transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 150 },
                  className: "bg-orange h-2.5 w-2.5 rounded-full"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/header/index.tsx",
                  lineNumber: 80,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
                motion.div,
                {
                  initial: { y: 10, opacity: 0, scale: 0.5 },
                  animate: { y: 0, opacity: 1, scale: 1 },
                  transition: { delay: 0.6, duration: 0.8, type: "spring", stiffness: 150 },
                  className: "bg-redHome h-2.5 w-2.5 rounded-full"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/header/index.tsx",
                  lineNumber: 86,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
                motion.div,
                {
                  initial: { y: 10, opacity: 0, scale: 0.5 },
                  animate: { y: 0, opacity: 1, scale: 1 },
                  transition: { delay: 0.9, duration: 0.8, type: "spring", stiffness: 150 },
                  className: "bg-pinkVive h-2.5 w-2.5 rounded-full"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/header/index.tsx",
                  lineNumber: 92,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/header/index.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/header/index.tsx",
              lineNumber: 78,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/header/index.tsx",
          lineNumber: 72,
          columnNumber: 9
        },
        this
      ),
      isMenuOpen && /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "bg-yellowHome flex flex-col gap-12 justify-start items-end fixed top-0 left-0 w-full h-full z-50 overflow-y-auto",
          children: [
            /* @__PURE__ */ jsxDEV3("div", { onClick: toggleMenu, className: "m-5", children: /* @__PURE__ */ jsxDEV3(Close, { className: "w-8 h-8" }, void 0, !1, {
              fileName: "app/components/header/index.tsx",
              lineNumber: 109,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/header/index.tsx",
              lineNumber: 108,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center flex-col gap-6 w-full", children: pathTextMappingMobile.map((route) => /* @__PURE__ */ jsxDEV3(
              "p",
              {
                onClick: () => {
                  handleChange(route.path), toggleMenu();
                },
                className: "text-orange uppercase  hover:cursor-pointer text-titleMobile font-neueRegular",
                children: route.name
              },
              route.path,
              !1,
              {
                fileName: "app/components/header/index.tsx",
                lineNumber: 113,
                columnNumber: 17
              },
              this
            )) }, void 0, !1, {
              fileName: "app/components/header/index.tsx",
              lineNumber: 111,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/header/index.tsx",
          lineNumber: 102,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/header/index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header/index.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};

// app/common/layout/index.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Layout = ({ children }) => /* @__PURE__ */ jsxDEV4("div", { className: "h-auto bg-mainColor w-auto", children: [
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
      /* @__PURE__ */ jsxDEV5("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ),
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
          lineNumber: 36,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
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
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 43,
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

// app/routes/logofolio.tsx
var logofolio_exports = {};
__export(logofolio_exports, {
  default: () => LogoFolio
});
import { useEffect, useState as useState3, useRef } from "react";

// app/assets/big-arrow.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var BigArrow = () => /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "51", viewBox: "0 0 15 51", fill: "none", children: /* @__PURE__ */ jsxDEV6("path", { d: "M6.7929 50.7071C7.18342 51.0976 7.81658 51.0976 8.20711 50.7071L14.5711 44.3431C14.9616 43.9526 14.9616 43.3195 14.5711 42.9289C14.1805 42.5384 13.5474 42.5384 13.1569 42.9289L7.5 48.5858L1.84315 42.9289C1.45262 42.5384 0.819458 42.5384 0.428934 42.9289C0.0384097 43.3195 0.0384097 43.9526 0.428934 44.3431L6.7929 50.7071ZM6.5 4.37114e-08L6.5 50L8.5 50L8.5 -4.37114e-08L6.5 4.37114e-08Z", fill: "black" }, void 0, !1, {
  fileName: "app/assets/big-arrow.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/assets/big-arrow.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/routes/logofolio.tsx
import { motion as motion2 } from "framer-motion";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function LogoFolio() {
  let { setHeaderColor } = useHeaderColor(), [showYellowBackground, setShowYellowBackground] = useState3(!1), containerRef = useRef(null), timing2 = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  return useEffect(() => {
    setHeaderColor("mainColor");
    let handleScroll = () => {
      if (containerRef.current) {
        let containerRect = containerRef.current.getBoundingClientRect(), scrollPosition = window.scrollY || window.pageYOffset, threshold = containerRect.top + containerRect.height / 2;
        scrollPosition > threshold && setShowYellowBackground(!0);
      }
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV7("div", { className: "h-full flex-col flex", ref: containerRef, children: [
    /* @__PURE__ */ jsxDEV7("div", { children: [
      /* @__PURE__ */ jsxDEV7("p", { className: "uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40", children: "Logofolio" }, void 0, !1, {
        fileName: "app/routes/logofolio.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(
        motion2.div,
        {
          className: "mx-auto flex-col flex items-center gap-3 mb-20",
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { ...timing2, delay: 0.6 },
          children: [
            /* @__PURE__ */ jsxDEV7(BigArrow, {}, void 0, !1, {
              fileName: "app/routes/logofolio.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "DISCOVER" }, void 0, !1, {
              fileName: "app/routes/logofolio.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/logofolio.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "md:border-t-[1px] md:border-black md:w-full md:my-20 hidden" }, void 0, !1, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "w-full md:py-[250px] py-[150px] bg-saumon md:bg-mainColor", children: /* @__PURE__ */ jsxDEV7("img", { src: Images.newlogo, className: "md:w-[400px] md:h-[350px] w-[100px] mx-auto" }, void 0, !1, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: `md:py-[250px] py-[150px] w-full ${showYellowBackground && "bg-yellowHome"}`, children: /* @__PURE__ */ jsxDEV7("img", { src: Images.capichelogo, className: "mx-auto md:w-[600px] md:h-[150px] w-[250px]" }, void 0, !1, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/logofolio.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/logofolio.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/portfolio.tsx
var portfolio_exports = {};
__export(portfolio_exports, {
  default: () => PortFolio
});
import { useEffect as useEffect2 } from "react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function PortFolio() {
  let { setHeaderColor } = useHeaderColor();
  return useEffect2(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV8("div", { className: "h-full flex-col items-center justify-center mx-auto", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex-col my-20", children: [
      /* @__PURE__ */ jsxDEV8("p", { className: "font-neueRegular text-redHome text-[200px] leading-[90%] ml-20 mb-[180px]", children: "MOSAIC" }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-evenly items-center", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "w-[400px] h-[400px]", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "text-[70px] mb-10 font-footer font-semibold leading-[90%]", children: "Concept." }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer h-[150px] text-base leading-[130%]", children: "Mosaic est une association LGBTQ+ pour les jeunes de 12 \xE0 18 ans, qui propose des activit\xE9s, des programmes et des services accessibles qui visent \xE0 responsabiliser les membres de la communaut\xE9, \xE0 fournir des ressources essentielles et \xE0 d\xE9fendre les droits des jeunes LGBT+. " }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "w-[400px] h-[400px]", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "text-[70px] mb-10 font-footer font-semibold leading-[90%]", children: "Mission." }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "font-footer text-base leading-[130%] h-[150px]", children: "Mon travail pour l\u2019association The Mosaic Trust a \xE9t\xE9 de cr\xE9er enti\xE8rement un plan de communication pour leur r\xE9seaux sociaux. " }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "bg-saumon h-full pt-[150px] pb-[200px]", children: [
      /* @__PURE__ */ jsxDEV8("img", { src: Images.rectangle, className: "absolute left-[10%] z-0" }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center mt-[150px] ml-[150px] jusitfy-center", children: [
        /* @__PURE__ */ jsxDEV8("img", { src: Images.mosaic1, className: "ml-[230px] z-[10]" }, void 0, !1, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("img", { src: Images.mosaic2, className: "ml-[100px]" }, void 0, !1, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "h-screen bg-mainColor", children: [
      /* @__PURE__ */ jsxDEV8("p", { className: "w-[1000px] ml-20 mt-20 leading-[100%] text-[64px] font-neueCondensed text-orange", children: "Mosaic encourage, \xE9duque et inspire les jeune personnes LGBTQ+ et celleux \xE0 leur c\xF4t\xE9s" }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-around my-20", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "text-center mb-3 font-extrabold font-footer text-[100px] leading-[90%]", children: "+16%" }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "text-right ml-16  w-[200px] font-footer text-[25px] leading-[90%]", children: "Augmentation de l'audience en ligne." }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "text-center mb-10 font-extrabold font-footer text-[100px] leading-[90%]", children: "1" }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "text-right  w-[321px] font-footer text-[25px] leading-[90%]", children: "Nouveau concours litt\xE9raire pour les personnes Queer." }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV8("p", { className: "text-center mb-10 font-extrabold font-footer text-[100px] leading-[90%]", children: "+20" }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "text-right  w-[321px] font-footer text-[25px] leading-[90%]", children: "Workshops en ligne pour les jeunes LGBTQ+." }, void 0, !1, {
            fileName: "app/routes/portfolio.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/portfolio.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-center font-neueRegular my-[200px] font-semibold text-[80px] leading-[90%] text-orange", children: "TEMOIGNAGE" }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "w-[1062px] text-center mx-auto font-neueCondensed text-redHome text-[64px] leading-[100%]", children: "\u201CCl\xE9mence was a true pleasure to work with. In joining us she created a new role for herself leveraging her skills and abilities to build on Mosaic's online presence and grew our audience [...]\u201D." }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "w-[280px] text-center mx-auto font-neueCondensed  mt-20 text-[50px] leading-[100%]", children: "Hugh O\u2019Keeffe" }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "border-t border-black w-[108px] my-5 mx-auto" }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "w-[313px] pb-[100px] text-center mx-auto font-inter  text-[30px] leading-[100%]", children: "Assistant de direction" }, void 0, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Project
});
import { useNavigate as useNavigate2 } from "@remix-run/react";
import { useEffect as useEffect3 } from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Project() {
  let { setHeaderColor } = useHeaderColor(), router = useNavigate2();
  return useEffect3(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV9("div", { className: "h-full flex flex-col gap-6 md:gap-12 items-start mx-16 my-10 md:my-auto", children: [
    /* @__PURE__ */ jsxDEV9("div", { onClick: () => router("/mosaic"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV9("p", { className: "uppercase text-titleMobile md:text-title text-left font-neueRegular text-orange hover:text-redHome", children: "MOSAIC" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { onClick: () => router("/portfolio"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV9("p", { className: "uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome", children: "PORTEFOLIO" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { onClick: () => router("/capiche"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV9("p", { className: "uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome", children: "CAPICHE" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { onClick: () => router("/logofolio"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV9("p", { className: "uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome", children: "LOGOfolio" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { onClick: () => router("/cards"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV9("p", { className: "uppercase text-titleMobile md:text-title text-left  font-neueRegular text-orange hover:text-redHome", children: "CARTES" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 26,
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
import { useEffect as useEffect4, useRef as useRef2, useState as useState4 } from "react";

// app/assets/arrow-right.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var ArrowRight = () => /* @__PURE__ */ jsxDEV10("svg", { xmlns: "http://www.w3.org/2000/svg", width: "38", height: "16", viewBox: "0 0 38 16", fill: "none", children: /* @__PURE__ */ jsxDEV10("path", { d: "M37.7071 8.70711C38.0976 8.31658 38.0976 7.68342 37.7071 7.29289L31.3431 0.928932C30.9526 0.538408 30.3195 0.538408 29.9289 0.928932C29.5384 1.31946 29.5384 1.95262 29.9289 2.34315L35.5858 8L29.9289 13.6569C29.5384 14.0474 29.5384 14.6805 29.9289 15.0711C30.3195 15.4616 30.9526 15.4616 31.3431 15.0711L37.7071 8.70711ZM0 9L37 9V7L0 7L0 9Z", fill: "black" }, void 0, !1, {
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
import { Remove, Add } from "@mui/icons-material";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Services() {
  let { setHeaderColor } = useHeaderColor(), [scrolled, setScrolled] = useState4(!1), [isCommunicationSelected, setIsCommunicationSelected] = useState4(!1), [isDesignSelected, setIsDesignSelected] = useState4(!1), [isConsultingSelected, setIsConsultingSelected] = useState4(!1), router = useNavigate3(), scrollingTextRef = useRef2(null);
  useEffect4(() => {
    setHeaderColor("linear-services");
    let handleScroll = () => {
      if (scrollingTextRef.current) {
        let rect = scrollingTextRef.current.getBoundingClientRect(), isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setScrolled(isVisible);
      }
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderColor]);
  let handleCommunication = () => {
    setIsCommunicationSelected((isCommunicationSelected2) => !isCommunicationSelected2);
  }, handleDesign = () => {
    setIsDesignSelected((isDesignSelected2) => !isDesignSelected2);
  }, handleConsulting = () => {
    setIsConsultingSelected((isConsultingSelected2) => !isConsultingSelected2);
  };
  return /* @__PURE__ */ jsxDEV11("div", { className: "flex-col flex gap-6", children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "bg-yellowHome", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center justify-evenly h-full !w-auto mx-auto py-40", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "flex-col flex gap-12 w-auto", children: [
          /* @__PURE__ */ jsxDEV11("p", { className: "font-neueBold  text-[50px] leading-[90%] text-gray-900", children: [
            "Communication &",
            /* @__PURE__ */ jsxDEV11("br", {}, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 52,
              columnNumber: 30
            }, this),
            "marketing digital"
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "h-full", children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "items-end flex", children: [
              /* @__PURE__ */ jsxDEV11("p", { className: "text-base text-gray-900 w-[300px]", children: "Informer, engager et fid\xE9liser votre audience avec une strat\xE9gie moderne et adapt\xE9e \xE0 vos probl\xE9matiques." }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 56,
                columnNumber: 17
              }, this),
              isCommunicationSelected ? /* @__PURE__ */ jsxDEV11("div", { onClick: handleCommunication, className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV11(Add, {}, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 59,
                columnNumber: 112
              }, this) }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 59,
                columnNumber: 44
              }, this) : /* @__PURE__ */ jsxDEV11("div", { className: "hover:cursor-pointer", onClick: handleCommunication, children: /* @__PURE__ */ jsxDEV11(Remove, {}, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 59,
                columnNumber: 197
              }, this) }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 59,
                columnNumber: 128
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 55,
              columnNumber: 15
            }, this),
            isCommunicationSelected && /* @__PURE__ */ jsxDEV11("div", { children: /* @__PURE__ */ jsxDEV11("ul", { className: "list-disc ml-3 mt-3 text-gray-900", children: [
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "Social Media" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 64,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "SEO" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 65,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "Gestion de projet" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "R\xE9daction" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 67,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "Campagnes payantes (ads)" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 68,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 62,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "flex-col flex gap-12 w-auto h-auto", children: [
          /* @__PURE__ */ jsxDEV11("p", { className: "font-neueBold text-[50px] leading-[90%]", children: "Design" }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { className: "h-full", children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "items-end flex", children: [
              /* @__PURE__ */ jsxDEV11("p", { className: "text-base text-gray-900 w-[300px]", children: "Donner de la puissance \xE0 vos messages avec des designs marquants et intuitifs, notamment sur les r\xE9seaux.                " }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 78,
                columnNumber: 17
              }, this),
              isDesignSelected ? /* @__PURE__ */ jsxDEV11("div", { onClick: handleDesign, className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV11(Add, {}, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 80,
                columnNumber: 98
              }, this) }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 80,
                columnNumber: 37
              }, this) : /* @__PURE__ */ jsxDEV11("div", { className: "hover:cursor-pointer", onClick: handleDesign, children: /* @__PURE__ */ jsxDEV11(Remove, {}, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 80,
                columnNumber: 176
              }, this) }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 80,
                columnNumber: 114
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            isDesignSelected && /* @__PURE__ */ jsxDEV11("ul", { className: "list-disc ml-3 mt-3", children: [
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "UX/UI design (Figma)" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 84,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "Cartes de visite, brochures... " }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 85,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "R\xE9seaux sociaux (posts, stories)." }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 86,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "flex-col flex gap-12  w-auto", children: [
          /* @__PURE__ */ jsxDEV11("p", { className: "font-neueBold text-[50px] leading-[90%]", children: "Consulting" }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("div", { children: [
            /* @__PURE__ */ jsxDEV11("p", { className: "text-base text-gray-900 w-[300px] font-footer", children: /* @__PURE__ */ jsxDEV11("div", { className: "items-end flex", children: [
              /* @__PURE__ */ jsxDEV11("p", { className: "text-base text-gray-900 w-[300px]", children: "Vous portez vers une communication plus \xE9thique et solidaire qui r\xE9pond aux probl\xE9matiques d\u2019aujourd\u2019hui." }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 96,
                columnNumber: 19
              }, this),
              isConsultingSelected ? /* @__PURE__ */ jsxDEV11("div", { onClick: handleConsulting, className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV11(Add, {}, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 99,
                columnNumber: 108
              }, this) }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 99,
                columnNumber: 43
              }, this) : /* @__PURE__ */ jsxDEV11("div", { className: "hover:cursor-pointer", onClick: handleConsulting, children: /* @__PURE__ */ jsxDEV11(Remove, {}, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 99,
                columnNumber: 190
              }, this) }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 99,
                columnNumber: 124
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/services.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this),
            isConsultingSelected && /* @__PURE__ */ jsxDEV11("ul", { className: "list-disc ml-3 mt-3", children: [
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: "Relecture inclusive" }, void 0, !1, {
                fileName: "app/routes/services.tsx",
                lineNumber: 104,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11("li", { className: "text-base font-semibold", children: [
                "Formation & sensibilisation aux questions",
                /* @__PURE__ */ jsxDEV11("br", {}, void 0, !1, {
                  fileName: "app/routes/services.tsx",
                  lineNumber: 105,
                  columnNumber: 100
                }, this),
                " LGBTQ+ & f\xE9ministes"
              ] }, void 0, !0, {
                fileName: "app/routes/services.tsx",
                lineNumber: 105,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/services.tsx",
              lineNumber: 103,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/services.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { id: "scrolling-text", ref: scrollingTextRef, className: `flex items-center justify-end gap-3 relative ${scrolled ? "scrolling" : ""}`, children: [
        /* @__PURE__ */ jsxDEV11("p", { className: "text-right font-neueRegular uppercase text-[160px] leading-[90%] text-orange", children: "CR\xC9ER" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("img", { src: Images.service, alt: "Service" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("p", { className: `text-right font-neueRegular uppercase text-[160px] leading-[90%] text-orange ${scrolled ? "text-transition" : "hidden"}`, children: "CR\xC9ER" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "bg-mainColor h-screen my-20", children: [
      /* @__PURE__ */ jsxDEV11("p", { className: "font-neueRegular text-[50px] leading-[90%] mb-20 ml-20", children: "Expertise" }, void 0, !1, {
        fileName: "app/routes/services.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-evenly", children: [
        /* @__PURE__ */ jsxDEV11("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "01." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-base leading-[90%] font-bold my-6", children: "Analyser." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-base leading-[130%]", children: "Ma mission est de vous \xE9couter et de vous accompagner pas \xE0 pas dans votre parcours. Avoir compr\xE9hension approfondie de vos probl\xE9matiques pour trouver ensemble des solutions efficaces et personnalis\xE9es qui r\xE9pondent \xE0 vos d\xE9fis uniques." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "02." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-base leading-[90%] font-bold my-6", children: "Optimiser." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-base leading-[130%]", children: "Construire ensemble une image de marque solide et coh\xE9rente. En adoptant une approche centr\xE9e sur vos besoins, je vise \xE0 cr\xE9er pour vous une strat\xE9gie innovante et actuelle qui qui r\xE9sonnera avec votre audience cible et g\xE9n\xE8rera un engagement nouveau.             " }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "flex-col w-[330px]", children: [
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-[70px] leading-[90%] font-semibold", children: "03." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-base leading-[90%] font-bold my-6", children: "Conseiller." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11("p", { className: "font-footer text-base leading-[130%]", children: "Dans un monde o\xF9 la diversit\xE9 est devenue un \xE9l\xE9ment incontournable, je serai l\xE0 pour vous soutenir et vous fournir les outils et conseils n\xE9cessaires pour naviguer avec succ\xE8s dans cet environnement complexe et diversifi\xE9." }, void 0, !1, {
            fileName: "app/routes/services.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/services.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { onClick: () => router("/projects"), className: "mt-[100px] hover:cursor-pointer ml-[100px] flex gap-1.5 w-[105px] pb-2 items-center justify-around", children: [
        /* @__PURE__ */ jsxDEV11("p", { className: "uppercase text-	font-bold font-footer", children: "Projets" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11(ArrowRight, {}, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("div", { className: "border-b-black border-b-2 w-[105px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, !1, {
          fileName: "app/routes/services.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/services.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// app/routes/capiche.tsx
var capiche_exports = {};
__export(capiche_exports, {
  default: () => Capiche
});
import { useEffect as useEffect5 } from "react";
import { motion as motion3 } from "framer-motion";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function Capiche() {
  let { setHeaderColor } = useHeaderColor();
  useEffect5(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  let timing2 = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96]
  }, capicheContent = [
    { title: "Concept.", content: "Capiche est un site fictif de revente de jeux de soci\xE9t\xE9 de seconde main. Sa particularit\xE9 est d\u2019avoir des sections sp\xE9cialis\xE9es dans le vintage et les produits japonais, toujours d\u2019occasion. " },
    { title: "Intention", content: "L\u2019univers et le ton se veulent l\xE9ger, la palette de couleur est un rappel du logo. Le site et l\u2019application mobile sont \xE0 la fois ludiques et fond\xE9s sur les principes de L\u2019UX design pour une exp\xE9rience utilisateur optimum. " },
    { title: "R\xE9alisation", content: "Lorem ipsum dolor sit amet consectetur. Orci sed vulputate molestie et aliquet. Sem sapien eget lectus elementum vulputate. Purus congue ullamcorper id at felis et." }
  ];
  return /* @__PURE__ */ jsxDEV12("div", { className: "h-full flex-col items-center justify-center mx-auto", children: [
    /* @__PURE__ */ jsxDEV12("div", { className: "flex-col my-20", children: [
      /* @__PURE__ */ jsxDEV12("p", { className: "uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40", children: "Capiche" }, void 0, !1, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(
        motion3.div,
        {
          className: "mx-auto flex-col flex items-center gap-3 mb-20",
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { ...timing2, delay: 0.6 },
          children: [
            /* @__PURE__ */ jsxDEV12(BigArrow, {}, void 0, !1, {
              fileName: "app/routes/capiche.tsx",
              lineNumber: 34,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "DISCOVER" }, void 0, !1, {
              fileName: "app/routes/capiche.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/capiche.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "w-full h-auto my-20", children: /* @__PURE__ */ jsxDEV12("img", { src: Images.capicheBG, alt: "capiche background" }, void 0, !1, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "w-auto m-20", children: /* @__PURE__ */ jsxDEV12("p", { className: "font-neueCondensed text-left leading-[90%] text-orange text-[25px]", children: [
      "Une alternative \xE9cologique",
      /* @__PURE__ */ jsxDEV12("br", {}, void 0, !1, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 42,
        columnNumber: 117
      }, this),
      " \xE0 vos soir\xE9es endiabl\xE9es. "
    ] }, void 0, !0, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex gap-6 items-center w-full overflow-x-auto", children: capicheContent.map((content, index) => /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col items-start", children: [
      /* @__PURE__ */ jsxDEV12("p", { children: content.title }, void 0, !1, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { children: content.content }, void 0, !1, {
        fileName: "app/routes/capiche.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, index, !0, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/capiche.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/capiche.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
import { useEffect as useEffect6, useState as useState5 } from "react";
import emailjs from "emailjs-com";
import { MailOutlined } from "@mui/icons-material";

// app/assets/contact/contactArrow.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var ContactArrow = () => /* @__PURE__ */ jsxDEV13("svg", { width: "16", height: "51", viewBox: "0 0 16 51", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxDEV13("path", { d: "M7.2929 50.7071C7.68342 51.0976 8.31658 51.0976 8.70711 50.7071L15.0711 44.3431C15.4616 43.9526 15.4616 43.3195 15.0711 42.9289C14.6805 42.5384 14.0474 42.5384 13.6569 42.9289L8 48.5858L2.34315 42.9289C1.95262 42.5384 1.31946 42.5384 0.928934 42.9289C0.53841 43.3195 0.53841 43.9526 0.928934 44.3431L7.2929 50.7071ZM7 4.37114e-08L7 50L9 50L9 -4.37114e-08L7 4.37114e-08Z", fill: "#FF5C00" }, void 0, !1, {
  fileName: "app/assets/contact/contactArrow.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/assets/contact/contactArrow.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/routes/contact.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Modal({ onClose }) {
  return /* @__PURE__ */ jsxDEV14("div", { className: "fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ jsxDEV14("div", { className: "bg-white p-8 rounded-md", children: [
    /* @__PURE__ */ jsxDEV14("p", { className: "font-neueRegular text-xl text-center", children: "Votre message a bien \xE9t\xE9 envoy\xE9 !" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14("button", { onClick: onClose, className: "block mx-auto mt-4 bg-royalBlue text-white font-bold py-2 px-4 rounded", children: "Fermer" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function Contact() {
  let { setHeaderColor } = useHeaderColor(), [showModal, setShowModal] = useState5(!1), [name, setName] = useState5(""), [lastName, setLastName] = useState5(""), [email, setEmail] = useState5(""), [subject, setSubject] = useState5(""), [message, setMessage] = useState5("");
  useEffect6(() => {
    emailjs.init("IoYqcS-FyoRAsKFCH"), setHeaderColor("mainColor");
  }, [setHeaderColor]);
  let handleCloseModal = () => {
    setShowModal(!1);
  }, handleSendEmail = () => {
    emailjs.send("service_bws8nok", "template_xk52e9b", {
      user_name: name,
      message,
      user_email: email,
      user_object: subject
    }).then((response) => {
      console.log("Email envoy\xE9 avec succ\xE8s !", response), setShowModal(!0), setName(""), setLastName(""), setEmail(""), setSubject(""), setMessage("");
    }).catch((error) => {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    });
  };
  return /* @__PURE__ */ jsxDEV14("div", { children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "hidden md:flex", children: [
      /* @__PURE__ */ jsxDEV14("p", { className: "text-title text-orange  font-neueRegular", children: "Cr\xE9ons" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("p", { className: "text-title text-orange  font-neueRegular", children: "ensemble." }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    showModal && /* @__PURE__ */ jsxDEV14(Modal, { onClose: handleCloseModal }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 67,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "hidden flex-col md:flex gap-3 mx-2", children: [
      /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-around", children: [
        /* @__PURE__ */ jsxDEV14("div", { children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-1", children: "Nom" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14(
            "input",
            {
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "p-2 rounded-[20px] bg-mainColor border border-black"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 90,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-1", children: "Email" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14(
            "input",
            {
              value: lastName,
              onChange: (e) => setLastName(e.target.value),
              className: "p-2 rounded-[20px] bg-mainColor border border-black"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 97,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-around", children: [
        /* @__PURE__ */ jsxDEV14("div", { children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-1", children: "Nom" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("input", { value: subject, onChange: (e) => setSubject(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border border-black" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-1", children: "Email" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("input", { value: email, onChange: (e) => setEmail(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border border-black" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "mt-10", children: [
        /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-1 w-full", children: "Votre Message" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("textarea", { value: message, onChange: (e) => setMessage(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border border-black" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { onClick: handleSendEmail, className: "hover:cursor-pointer border-black bg-black border mt-5 mr-[10px] rounded-3xl px-5 py-3 w-[200px] mx-auto", children: /* @__PURE__ */ jsxDEV14("p", { className: "leading-[17.5px] font-bold text-sm text-center text-white uppercase", children: "Envoyez" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "md:hidden flex-col flex gap-3 mx-1", children: [
      /* @__PURE__ */ jsxDEV14("div", { className: "mx-2 flex flex-col items-start gap-4 justify-around mb-5", children: [
        /* @__PURE__ */ jsxDEV14("p", { className: "text-royalBlue text-[45px] leading-[100%] font-neueRegular", children: [
          "Rencontrons",
          /* @__PURE__ */ jsxDEV14("br", {}, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 123,
            columnNumber: 96
          }, this),
          "nous."
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14(ContactArrow, {}, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-around gap-1.5", children: [
        /* @__PURE__ */ jsxDEV14("div", { className: "flex-col flex items-start", children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-2", children: "Nom" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14(
            "input",
            {
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "p-2 rounded-[5px] bg-mainColor border border-black w-full"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 129,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "flex-col flex items-start", children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-2", children: "Pr\xE9nom" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14(
            "input",
            {
              value: lastName,
              onChange: (e) => setLastName(e.target.value),
              className: "p-2 rounded-[5px] bg-mainColor border border-black w-full"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 137,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-around gap-1.5", children: [
        /* @__PURE__ */ jsxDEV14("div", { className: "flex-col flex items-start", children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-2", children: "Email" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14(
            "input",
            {
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "p-2 rounded-[5px] bg-mainColor border border-black w-full"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 147,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "flex-col flex items-start", children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-2", children: "Object" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 154,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14(
            "input",
            {
              value: subject,
              onChange: (e) => setSubject(e.target.value),
              className: "p-2 rounded-[5px] bg-mainColor border border-black w-full"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 155,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "flex-col flex items-start", children: [
        /* @__PURE__ */ jsxDEV14("p", { className: "font-inter mb-1", children: "Votre message" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14(
          "textarea",
          {
            value: message,
            onChange: (e) => setMessage(e.target.value),
            className: "p-2 rounded-[5px] bg-mainColor border border-black w-full min-h-[200px]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 164,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center my-10 justify-between gap-3", children: [
        /* @__PURE__ */ jsxDEV14(
          "div",
          {
            className: "hover:cursor-pointer border-black border rounded-3xl p-2 mx-auto max-w-[100px] max-h-[25px]",
            onClick: handleSendEmail,
            children: /* @__PURE__ */ jsxDEV14("p", { className: "font-footer font-bold text-[6px] text-center text-grayBlack uppercase", children: "Hit me baby (one time)" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 175,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 171,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV14("div", { className: "flex flex-col items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV14("p", { className: "font-neueRegular text-[16px] leading-[90%] text-orange", children: [
            "Retrouvez moi \xE9galement sur ",
            /* @__PURE__ */ jsxDEV14("br", {}, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 178,
              columnNumber: 111
            }, this),
            "Linkedin juste ",
            /* @__PURE__ */ jsxDEV14("a", { className: "text-redHome", target: "_blank", href: "https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US", children: "ici" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 178,
              columnNumber: 132
            }, this),
            "."
          ] }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 178,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxDEV14(MailOutlined, {}, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 180,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { className: "font-neueCondensed text-grayBlack text-[10px] leading-[90%]", children: "clemence.dequaire.pro@gmail.com" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 181,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 179,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 177,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});

// app/components/home/background-slider.tsx
import { useEffect as useEffect7, useState as useState6 } from "react";
import { motion as motion4 } from "framer-motion";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var BackgroundSlider = ({ isVisible = !1 }) => {
  let [isHovered, setIsHovered] = useState6(!1), { setHeaderColor } = useHeaderColor();
  return useEffect7(() => {
    let timer = setTimeout(() => {
      setIsHovered(!0);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV15(
    motion4.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
      className: `animate__animated animate__fadeInUpBig animate__delay-1.3s ${isVisible ? "w-full md:min-h-[910px] flex justify-between items-start z-10 h-full inset-0 absolute -top-20 bg_slider" : "hidden"} ${isHovered && "hovered"}`,
      children: /* @__PURE__ */ jsxDEV15("div", { className: "flex-col", children: [
        /* @__PURE__ */ jsxDEV15("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2s" }, children: "for" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV15("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.1s" }, children: "bold" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV15("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.2s" }, children: "mind" }, void 0, !1, {
          fileName: "app/components/home/background-slider.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV15("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.3s" }, children: "only" }, void 0, !1, {
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
import { useEffect as useEffect9 } from "react";
import { Parallax as Parallax2, ParallaxProvider } from "react-scroll-parallax";
import { motion as motion5 } from "framer-motion";

// app/components/home/description.tsx
import { useEffect as useEffect8, useState as useState7 } from "react";
import { useNavigate as useNavigate4 } from "@remix-run/react";
import { Parallax } from "react-scroll-parallax";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var Description = () => {
  let router = useNavigate4(), [scrollPosition, setScrollPosition] = useState7(0), [scrolled, setScrolled] = useState7(!1), isServicesSectionVisible = scrollPosition > 1350;
  return useEffect8(() => {
    let handleScroll = () => {
      setScrollPosition(window.scrollY), window.scrollY > 1150 && setScrolled(!0);
    };
    return window.addEventListener("scroll", handleScroll), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []), /* @__PURE__ */ jsxDEV16("div", { children: [
    /* @__PURE__ */ jsxDEV16("div", { className: `hidden w-full h-auto md:flex flex-col ${isServicesSectionVisible ? "bg-mainColor" : "bg-yellowHome"}`, children: [
      /* @__PURE__ */ jsxDEV16("div", { className: "w-full h-full mx-auto flex flex-col gap-[150px] py-32", children: [
        /* @__PURE__ */ jsxDEV16("p", { className: "w-[1100px] ml-24 text-left text-orange text-[53px] leading-[57.6px] font-neueCondensed", children: [
          "Le courage de nos id\xE9es, la passion de les partager. Parce que chaque histoire m\xE9rite qu\u2019on la raconte, ",
          /* @__PURE__ */ jsxDEV16("span", { className: "text-redHome font-bold", children: "qu\u2019attendons nous pour commencer ?" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 34,
            columnNumber: 217
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "w-[1100px] ml-48 text-right text-orange text-[53px] leading-[57.6px] font-neueCondensed", children: "Consultante en communication et cr\xE9ative passionn\xE9e, je m\u2019efforce d\u2019aider votre projet \xE0 grandir gr\xE2ce au design et au marketing digital." }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16(
          "div",
          {
            onClick: () => router("/about"),
            className: "hover:cursor-pointer ml-24 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around",
            children: [
              /* @__PURE__ */ jsxDEV16("span", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV16("p", { className: "uppercase text-xs	font-footer", children: "En savoir plus" }, void 0, !1, {
                  fileName: "app/components/home/description.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV16(ArrowRight, {}, void 0, !1, {
                  fileName: "app/components/home/description.tsx",
                  lineNumber: 41,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 39,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, !1, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/home/description.tsx",
            lineNumber: 36,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "w-auto h-full relative", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center justify-end pr-10 gap-3 relative w-full", children: [
          /* @__PURE__ */ jsxDEV16("img", { src: Images.service, alt: "Service" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "text-right font-neueRegular uppercase text-bannerTitile text-redHome", children: "SERVICES" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center justify-around my-36 mx-20", children: [
          /* @__PURE__ */ jsxDEV16("div", { className: "flex-col items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV16("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Communication" }, void 0, !1, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxDEV16("p", { className: "font-neueBold text-orange text-serviceTitle mr-4", children: "&" }, void 0, !1, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 55,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV16("p", { className: "font-neueBold text-orange text-serviceTitle", children: "marketing" }, void 0, !1, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 56,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("p", { className: "font-neueBold text-orange text-serviceTitle ml-20", children: "digital." }, void 0, !1, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Design" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "font-neueBold text-orange text-serviceTitle", children: "Consulting" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16(
          "div",
          {
            onClick: () => router("/services"),
            className: "mb-[250px] hover:cursor-pointer ml-24 flex flex-col mb-2 w-[150px] pb-2 items-center justify-around",
            children: [
              /* @__PURE__ */ jsxDEV16("span", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV16("p", { className: "uppercase text-xs	font-footer", children: "En savoir plus" }, void 0, !1, {
                  fileName: "app/components/home/description.tsx",
                  lineNumber: 67,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV16(ArrowRight, {}, void 0, !1, {
                  fileName: "app/components/home/description.tsx",
                  lineNumber: 68,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("div", { className: "border-b-black border-b-2 w-[150px] h-12 absolute transition-transform duration-300 transform origin-left hover:scale-x-0" }, void 0, !1, {
                fileName: "app/components/home/description.tsx",
                lineNumber: 70,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/home/description.tsx",
            lineNumber: 63,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16(Parallax, { speed: -15, className: "min-h-[450px]", children: /* @__PURE__ */ jsxDEV16("div", { className: "w-full h-screen bg-saumon relative pt-20", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxDEV16("p", { className: "flex justify-center mt-44 items-baseline text-[100px] leading-[100px] text-royalBlue font-neueSemiBold", children: [
            "Like what you s",
            /* @__PURE__ */ jsxDEV16("span", { children: /* @__PURE__ */ jsxDEV16("img", { src: Images?.rabbit, className: "w-[130px] bg-center rounded-2xl mx-2" }, void 0, !1, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 76,
              columnNumber: 154
            }, this) }, void 0, !1, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 76,
              columnNumber: 148
            }, this),
            "?"
          ] }, void 0, !0, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "text-black font-footer font-medium leading-[100px] text-center text-[80px]", children: "Restons en contact" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { onClick: () => router("/contact"), className: "py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto", children: "Me contacter" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col md:hidden h-full w-full gap-12 mt-16", children: [
      /* @__PURE__ */ jsxDEV16("div", { children: [
        /* @__PURE__ */ jsxDEV16("img", { src: Images.homeMobile, width: "200px" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "text-homeMobileTitle text-redHome font-neueRegular -mt-[100px] ml-8", children: [
          "Tout",
          /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 88,
            columnNumber: 98
          }, this),
          " commence",
          /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 88,
            columnNumber: 116
          }, this),
          " par une",
          /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 88,
            columnNumber: 133
          }, this),
          " id\xE9e. "
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "mx-4 my-10", children: /* @__PURE__ */ jsxDEV16("p", { className: "text-condensed text-orange text-homeMobileContent max-w-[300px]", children: "Consultante en communication et cr\xE9ative passionn\xE9e, je m\u2019efforce d\u2019aider votre marque \xE0 grandir gr\xE2ce au design et au marketing digital." }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center justify-end", children: [
          /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV16(BigArrow, {}, void 0, !1, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV16("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "SCROLL & ROLL" }, void 0, !1, {
              fileName: "app/components/home/description.tsx",
              lineNumber: 95,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("img", { src: Images.homeMobile2, width: "160px" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "bg-yellowHome w-full pb-24", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "mt-20 mb-10 m-4", children: /* @__PURE__ */ jsxDEV16("p", { className: "text-condensed text-orange text-homeMobileContent max-w-[300px]", children: [
          "Le courage de nos id\xE9es, la passion de les partager. Parce que vous avez quelque chose \xE0 raconter, ",
          /* @__PURE__ */ jsxDEV16("span", { className: "text-redHome font-bold", children: "qu\u2019attendons nous pour commencer ?" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 102,
            columnNumber: 191
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "mx-4 mb-5 font-neueBold text-redHome text-homeMobileServices", children: "services" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col gap-3 items-start mx-4 my-5", children: [
          /* @__PURE__ */ jsxDEV16("p", { className: "text-grayBlack font-footer font-bold", children: "Communication" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("img", { src: Images.line, className: "-mt-3" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "text-grayBlack font-footer font-bold", children: "Marketing digital" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("img", { src: Images.line, className: "-mt-3" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "text-grayBlack font-footer font-bold", children: "Design" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("img", { src: Images.line, className: "-mt-3" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "text-grayBlack font-footer font-bold", children: "Consulting" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("img", { src: Images.line, className: "-mt-3" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "uppercase font-footer text-grayBlack text-[8px] mx-4 my-5", children: "EN SAVOIR PLUS" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "m-4 my-5 font-neueBold text-redHome text-homeMobileServices", children: "projets" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "overflow-auto whitespace-nowrap ml-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200", children: /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center justify-evenly space-x-6 py-5 px-10", children: [
          /* @__PURE__ */ jsxDEV16(
            "img",
            {
              onClick: () => router("/capiche"),
              src: Images.homeCapiche,
              alt: "Image 1",
              className: "w-[130px] mx-5"
            },
            void 0,
            !1,
            {
              fileName: "app/components/home/description.tsx",
              lineNumber: 119,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV16("img", { onClick: () => router("/mosaic"), src: Images.homeMosaic, alt: "Image 2", className: "w-[130px] mx-5" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV16("img", { onClick: () => router("/portfolio"), src: Images.homePortfolio, alt: "Image 3", className: "w-[130px] mx-5" }, void 0, !1, {
            fileName: "app/components/home/description.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16("p", { className: "uppercase font-footer text-grayBlack text-[8px] mx-4 my-5", children: "EN SAVOIR PLUS" }, void 0, !1, {
          fileName: "app/components/home/description.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "bg-mainColor w-full pb-18", children: /* @__PURE__ */ jsxDEV16(Contact, {}, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/home/description.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/home/description.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/description.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}, description_default = Description;

// app/components/home/index.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96]
}, HomeComponent = () => {
  let { setHeaderColor } = useHeaderColor();
  return useEffect9(() => {
    setHeaderColor("#FCF6EF");
  }, []), /* @__PURE__ */ jsxDEV17(ParallaxProvider, { children: [
    /* @__PURE__ */ jsxDEV17(Parallax2, { speed: -30, className: "hidden md:flex flex-col justify-around items-center gap-4", children: /* @__PURE__ */ jsxDEV17(
      motion5.div,
      {
        transition: { ...timing, delay: 2 },
        className: "flex flex-col items-center justify-evenly h-screen",
        children: [
          /* @__PURE__ */ jsxDEV17("p", { className: "font-neueRegular text-redHome text-welcome text-center", children: "Bienvenue" }, void 0, !1, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col items-center gap-3 mb-20", children: [
            /* @__PURE__ */ jsxDEV17(BigArrow, {}, void 0, !1, {
              fileName: "app/components/home/index.tsx",
              lineNumber: 29,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV17("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "SCROLL & ROLL" }, void 0, !1, {
              fileName: "app/components/home/index.tsx",
              lineNumber: 30,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/home/index.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/home/index.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(Parallax2, { speed: -15, children: /* @__PURE__ */ jsxDEV17(description_default, {}, void 0, !1, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/home/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}, home_default = HomeComponent;

// app/routes/_index.tsx
import { motion as motion7 } from "framer-motion";

// app/animations/home-desktop.tsx
import { useEffect as useEffect10, useState as useState9 } from "react";
var useDesktopAnimation = () => {
  let { setHeaderColor } = useHeaderColor(), [state, setState] = useState9({
    currentImage: 0,
    showLastPart: !1,
    animationFinished: !1,
    images: [
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
    ]
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
  return useEffect10(() => {
    let fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);
    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []), useEffect10(() => {
    state.currentImage === images.length - 1 && (setTimeout(() => {
      setState((prev) => ({ ...prev, showLastPart: !0 }));
    }, 1500), setTimeout(() => {
      setHeaderColor("bg_slider hovered");
    }, 2400));
  }, [state.currentImage, images.length]), useEffect10(() => {
    state.showLastPart && setTimeout(() => {
      setState((prev) => ({ ...prev, animationFinished: !0 }));
    }, 4e3);
  }, [state.showLastPart]), { state, images };
};

// app/animations/home-mobile.tsx
import { motion as motion6 } from "framer-motion";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var MobileAnimation = () => /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center justify-center h-full z-50", children: [
  /* @__PURE__ */ jsxDEV18(
    motion6.img,
    {
      src: Images.newlogo,
      alt: "logo",
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    void 0,
    !1,
    {
      fileName: "app/animations/home-mobile.tsx",
      lineNumber: 9,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ jsxDEV18("div", { className: "flex gap-1.5", children: [
    /* @__PURE__ */ jsxDEV18(
      motion6.div,
      {
        initial: { y: 10, opacity: 0, scale: 0.5 },
        animate: { y: 0, opacity: 1, scale: 1 },
        transition: { delay: 0.3, duration: 0.8, type: "spring", stiffness: 150 },
        className: "bg-orange h-2.5 w-2.5 rounded-full"
      },
      void 0,
      !1,
      {
        fileName: "app/animations/home-mobile.tsx",
        lineNumber: 19,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV18(
      motion6.div,
      {
        initial: { y: 10, opacity: 0, scale: 0.5 },
        animate: { y: 0, opacity: 1, scale: 1 },
        transition: { delay: 0.6, duration: 0.8, type: "spring", stiffness: 150 },
        className: "bg-redHome h-2.5 w-2.5 rounded-full"
      },
      void 0,
      !1,
      {
        fileName: "app/animations/home-mobile.tsx",
        lineNumber: 25,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV18(
      motion6.div,
      {
        initial: { y: 10, opacity: 0, scale: 0.5 },
        animate: { y: 0, opacity: 1, scale: 1 },
        transition: { delay: 0.9, duration: 0.8, type: "spring", stiffness: 150 },
        className: "bg-pinkVive h-2.5 w-2.5 rounded-full"
      },
      void 0,
      !1,
      {
        fileName: "app/animations/home-mobile.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/animations/home-mobile.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/animations/home-mobile.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), home_mobile_default2 = MobileAnimation;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function Index() {
  let { state } = useDesktopAnimation();
  return /* @__PURE__ */ jsxDEV19("div", { children: [
    /* @__PURE__ */ jsxDEV19("div", { className: "md:hidden flex", children: /* @__PURE__ */ jsxDEV19(home_mobile_default2, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: `hidden md:flex ${state.currentImage === state.images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`, children: [
      /* @__PURE__ */ jsxDEV19(
        motion7.div,
        {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
          children: !state.animationFinished && /* @__PURE__ */ jsxDEV19(
            "img",
            {
              src: state.images[state.currentImage],
              alt: "Image",
              width: 400,
              height: 400,
              className: "rounded mx-auto"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 22,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ),
      state.showLastPart && /* @__PURE__ */ jsxDEV19(background_slider_default, { isVisible: !state.animationFinished }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 31,
        columnNumber: 36
      }, this),
      state.animationFinished && /* @__PURE__ */ jsxDEV19(home_default, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 32,
        columnNumber: 37
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/mosaic.tsx
var mosaic_exports = {};
__export(mosaic_exports, {
  default: () => Mosaic
});
import { useEffect as useEffect11 } from "react";
import { motion as motion8 } from "framer-motion";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function Mosaic() {
  let { setHeaderColor } = useHeaderColor();
  useEffect11(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  let timing2 = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  return /* @__PURE__ */ jsxDEV20("div", { className: "h-full flex-col items-center justify-center mx-auto", children: /* @__PURE__ */ jsxDEV20("div", { className: "flex-col my-20", children: [
    /* @__PURE__ */ jsxDEV20("p", { className: "uppercase font-neueRegular md:text-title text-titleMobile text-redHome text-center my-40", children: "Mosaic" }, void 0, !1, {
      fileName: "app/routes/mosaic.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20(
      motion8.div,
      {
        className: "mx-auto flex-col flex items-center gap-3 mb-20",
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        transition: { ...timing2, delay: 0.6 },
        children: [
          /* @__PURE__ */ jsxDEV20(BigArrow, {}, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV20("p", { className: "font-footer uppercase font-bold leading-[20px]", children: "DISCOVER" }, void 0, !1, {
            fileName: "app/routes/mosaic.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/mosaic.tsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/mosaic.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/mosaic.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/values.tsx
var values_exports = {};
__export(values_exports, {
  default: () => Values
});
import { useNavigate as useNavigate5 } from "@remix-run/react";
import { useEffect as useEffect12 } from "react";
import { isMobile } from "react-device-detect";
import { ParallaxProvider as ParallaxProvider2 } from "react-scroll-parallax";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function Values() {
  let { setHeaderColor } = useHeaderColor(), router = useNavigate5();
  return useEffect12(() => {
    isMobile || setHeaderColor("linear-values");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV21(ParallaxProvider2, { children: [
    /* @__PURE__ */ jsxDEV21("div", { className: "flex-col md:flex w-full h-auto hidden", children: [
      /* @__PURE__ */ jsxDEV21("div", { className: "!w-full bg-saumon pb-20", children: /* @__PURE__ */ jsxDEV21("p", { className: "ml-10 font-neueRegular text-title text-orange font-medium", children: [
        "Tout commen\xE7a par une ",
        /* @__PURE__ */ jsxDEV21("br", {}, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 22,
          columnNumber: 106
        }, this),
        /* @__PURE__ */ jsxDEV21("span", { className: "text-redHome", children: "id\xE9e" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 22,
          columnNumber: 115
        }, this),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/values.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/values.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "bg-mainColor h-full flex-col flex", children: [
        /* @__PURE__ */ jsxDEV21("div", { className: "flex gap-12 justify-evenly items-center", children: [
          /* @__PURE__ */ jsxDEV21("div", { className: "w-[659px] ml-10", children: /* @__PURE__ */ jsxDEV21("p", { className: "text-[18px] text-justify", children: [
            /* @__PURE__ */ jsxDEV21("span", { className: "font-semibold", children: "Sp\xE9cialis\xE9e en communication et marketing digital" }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 27,
              columnNumber: 55
            }, this),
            ", j\u2019ai toujours ressenti ce besoin de trouver du sens. Plus qu\u2019un m\xE9tier, je vois la communication comme un moyen de partager et faire grandir des projets auxquels je crois profond\xE9ment. Cinq ann\xE9es se sont \xE9coul\xE9es depuis mon premier poste et cette id\xE9e s\u2019est transform\xE9e en un d\xE9fi que je rel\xE8ve passionn\xE9ment chaque jour. Gr\xE2ce \xE0 d\u2019autres humain.e.s qui croyaient fort en leur convictions,   j\u2019ai eu la chance de porter d\xE9fis audacieux et des messages engag\xE9s. Peut-\xEAtre serez vous les prochain.e.s ?"
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("div", { className: "!w-fit bg-white h-[480px] rounded-[50px] -mt-16", children: /* @__PURE__ */ jsxDEV21("img", { alt: "men with pride flag", src: Images.pride }, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/values.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV21("p", { className: "z-[10] -mb-32 w-[741px] ml-[300px] leading-[72px] text-royalBlue text-[60px] font-neueRegular", children: [
          '"Seules 54% des entreprises fran\xE7aises ont embrass\xE9 la diversit\xE9".',
          /* @__PURE__ */ jsxDEV21("span", { className: "text-black", children: "*" }, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 34,
            columnNumber: 79
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/values.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center justify-evenly", children: [
          /* @__PURE__ */ jsxDEV21("div", { className: "z-0 flex justify-start items-center", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "rotate-[270deg] -mr-16", children: "T\xEAtu, Nom de l\u2019enqu\xEAte." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 38,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("img", { alt: "group people", src: Images.group, className: "rounded-[50px h-[480px] w-[395px]" }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 39,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("p", { className: "text-[18px] font-normal text-justify w-[640px]", children: [
            "Au fil de ma vie et de ma carri\xE8re personnelle,  j\u2019ai pu appr\xE9hender avec clart\xE9 et d\xE9termination les bouleversements sociaux qui se jouent depuis maintenant des ann\xE9es.  Pour toutes les entreprises qui souhaitent faire parti du changement, je propose une ",
            /* @__PURE__ */ jsxDEV21("span", { className: "font-semibold", children: "relecture inclusive" }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 42,
              columnNumber: 271
            }, this),
            " et une vision sensible de votre communication.             "
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/values.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/values.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "bg-yellowHome pt-40 -mt-16", children: [
        /* @__PURE__ */ jsxDEV21("p", { className: "font-neueRegular text-[50px] leading-[90%] mx-16", children: "Manifesto" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV21("div", { className: "w-3/4 mx-auto", children: [
          /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "font-footer text-[70px] mr-14", children: "01." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 49,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              "L'",
              /* @__PURE__ */ jsxDEV21("span", { className: "text-orange", children: "inclusivit\xE9" }, void 0, !1, {
                fileName: "app/routes/values.tsx",
                lineNumber: 50,
                columnNumber: 71
              }, this),
              " et le respect d\u2019autrui sont des valeurs fondamentales. Faisons de la diversit\xE9 un engagement quotidien."
            ] }, void 0, !0, {
              fileName: "app/routes/values.tsx",
              lineNumber: 50,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "font-footer text-[70px] mr-11", children: "02." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              "La ",
              /* @__PURE__ */ jsxDEV21("span", { className: "text-orange", children: "bienveillance" }, void 0, !1, {
                fileName: "app/routes/values.tsx",
                lineNumber: 54,
                columnNumber: 72
              }, this),
              " et l'\xE9coute forment la base d'une culture d'entreprise saine et productive. Le dialogue est la cl\xE9."
            ] }, void 0, !0, {
              fileName: "app/routes/values.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "font-footer text-[70px] mr-11", children: "03." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { className: "font-footer leading-[100%] text-[28px]", children: [
              "Sans ",
              /* @__PURE__ */ jsxDEV21("span", { className: "text-orange", children: "passion" }, void 0, !1, {
                fileName: "app/routes/values.tsx",
                lineNumber: 58,
                columnNumber: 74
              }, this),
              ", pas d\u2019action. Croyez en votre message, je m\u2019occupe de le partager."
            ] }, void 0, !0, {
              fileName: "app/routes/values.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "font-footer text-[70px] mr-11", children: "04." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              /* @__PURE__ */ jsxDEV21("span", { className: "text-orange", children: "Amusons nous" }, void 0, !1, {
                fileName: "app/routes/values.tsx",
                lineNumber: 62,
                columnNumber: 69
              }, this),
              " \xE0 cr\xE9er, partager, designer. Partageons l\u2019amour de nos m\xE9tiers."
            ] }, void 0, !0, {
              fileName: "app/routes/values.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/values.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV21("div", { onClick: () => router("/projects"), className: "py-5 px-10 transition-all duration-300 ease-in-out leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border my-20 rounded-full w-[200px] mx-auto", children: "Mes projets" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/values.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/values.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "flex flex-col items-center md:hidden gap-4 mt-10", children: [
      /* @__PURE__ */ jsxDEV21("p", { className: "text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular", children: "partage" }, void 0, !1, {
        fileName: "app/routes/values.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("p", { className: "text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular", children: "cr\xE9ation" }, void 0, !1, {
        fileName: "app/routes/values.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("p", { className: "text-redHome uppercase hover:cursor-pointer text-[60px] leading-[90%] font-neueRegular", children: "ambition" }, void 0, !1, {
        fileName: "app/routes/values.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "flex gap-3 items-start justify-center mr-16 mt-20", children: [
        /* @__PURE__ */ jsxDEV21("img", { src: Images.manifesto, className: "rotate-[185deg] w-[20px]" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV21("p", { className: "font-footer text-justify text-[7px] w-2/3", children: [
          /* @__PURE__ */ jsxDEV21("span", { className: "font-bold", children: "Sp\xE9cialis\xE9e en communication et marketing digital" }, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 76,
            columnNumber: 68
          }, this),
          ", j\u2019ai toujours ressenti ce besoin de trouver du sens. Plus qu\u2019un m\xE9tier, je vois la communication comme un moyen de partager et faire grandir des projets auxquels je crois profond\xE9ment.",
          /* @__PURE__ */ jsxDEV21("br", {}, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 76,
            columnNumber: 338
          }, this),
          /* @__PURE__ */ jsxDEV21("br", {}, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 76,
            columnNumber: 347
          }, this),
          "Cinq ann\xE9es se sont \xE9coul\xE9es depuis mon premier poste et cette id\xE9e s\u2019est transform\xE9e en un d\xE9fi que je rel\xE8ve passionn\xE9ment chaque jour. Gr\xE2ce \xE0 d\u2019autres humain.e.s qui croyaient fort en leur convictions,   j\u2019ai eu la chance de porter d\xE9fis audacieux et des messages engag\xE9s. Peut-\xEAtre serez vous les prochain.e.s ?"
        ] }, void 0, !0, {
          fileName: "app/routes/values.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/values.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("p", { className: "self-start ml-20 text-[6px] font-bold mb-10", children: "MON PARCOURS" }, void 0, !1, {
        fileName: "app/routes/values.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("p", { className: "text-orange w-1/2 -mb-10 z-50", children: "\u201CSeules 54 % des entreprises fran\xE7aises ont embrass\xE9 la diversit\xE9\u201D." }, void 0, !1, {
        fileName: "app/routes/values.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center mx-10", children: [
        /* @__PURE__ */ jsxDEV21("img", { src: Images.group, className: "w-[130px]" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV21("div", { className: "flex items-start justify-end gap-1.5 ml-5", children: [
          /* @__PURE__ */ jsxDEV21("img", { src: Images.manifesto, className: "rotate-[185deg] w-[20px]" }, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("p", { className: "text-[7px] text-justify", children: "Au fil de ma vie et de ma carri\xE8re personnelle,  j\u2019ai pu appr\xE9hender avec clart\xE9 et d\xE9termination les bouleversements sociaux qui se jouent depuis maintenant des ann\xE9es.  Pour toutes les entreprises qui souhaitent faire parti du changement, je propose une relecture inclusive et une vision sensible de votre communication. " }, void 0, !1, {
            fileName: "app/routes/values.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/values.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/values.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "bg-yellowHome w-full h-full py-20 mt-10", children: [
        /* @__PURE__ */ jsxDEV21("p", { className: "font-neueRegular text-[20px] leading-[90%] mx-10", children: "Manifesto" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV21("div", { className: "my-20 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center justify-evenly", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "font-semibold text-footer text-[35px] leading-[90px]", children: "01." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 92,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { className: "font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3", children: [
              "L'",
              /* @__PURE__ */ jsxDEV21("span", { className: "text-orange", children: "inclusivit\xE9" }, void 0, !1, {
                fileName: "app/routes/values.tsx",
                lineNumber: 94,
                columnNumber: 19
              }, this),
              " et le respect d\u2019autrui sont des valeurs fondamentales. Faisons de la diversit\xE9 un engagement quotidien."
            ] }, void 0, !0, {
              fileName: "app/routes/values.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center justify-evenly", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "font-semibold text-footer text-[35px] leading-[90px]", children: "02." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 98,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { className: "font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3", children: [
              "La ",
              /* @__PURE__ */ jsxDEV21("span", { className: "text-orange", children: "bienveillance" }, void 0, !1, {
                fileName: "app/routes/values.tsx",
                lineNumber: 100,
                columnNumber: 20
              }, this),
              " et l'\xE9coute forment la base d'une culture d'entreprise saine et productive. Le dialogue est la cl\xE9."
            ] }, void 0, !0, {
              fileName: "app/routes/values.tsx",
              lineNumber: 99,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center justify-evenly", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "font-semibold text-footer text-[35px] leading-[90px]", children: "03." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 104,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { className: "font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3", children: [
              "Sans ",
              /* @__PURE__ */ jsxDEV21("span", { className: "text-orange", children: "passion" }, void 0, !1, {
                fileName: "app/routes/values.tsx",
                lineNumber: 106,
                columnNumber: 22
              }, this),
              ", pas d\u2019action. Croyez en votre message, je me charge de le partager."
            ] }, void 0, !0, {
              fileName: "app/routes/values.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("div", { className: "flex items-center justify-evenly", children: [
            /* @__PURE__ */ jsxDEV21("p", { className: "font-semibold text-footer text-[35px] leading-[90px]", children: "04." }, void 0, !1, {
              fileName: "app/routes/values.tsx",
              lineNumber: 110,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV21("p", { className: "font-semibold text-footer text-[12px] leading-[120%] text-justify tracking-[02%] w-2/3", children: [
              /* @__PURE__ */ jsxDEV21("span", { className: "text-orange", children: "Amusons nous" }, void 0, !1, {
                fileName: "app/routes/values.tsx",
                lineNumber: 112,
                columnNumber: 17
              }, this),
              " \xE0 cr\xE9er, partager, designer. Partageons l\u2019amour de nos m\xE9tiers.               "
            ] }, void 0, !0, {
              fileName: "app/routes/values.tsx",
              lineNumber: 111,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/values.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/values.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV21("div", { onClick: () => router("/projects"), className: "py-3 px-2 transition-all duration-300 ease-in-out font-bold text-[7px] text-center text-grayBlack uppercase hover:text-white hover:bg-grayBlack translate hover:cursor-pointer border-black border rounded-full w-[100px] mx-auto", children: "Mes projets" }, void 0, !1, {
          fileName: "app/routes/values.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/values.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/values.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/values.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { useNavigate as useNavigate6 } from "@remix-run/react";
import { useEffect as useEffect13 } from "react";
import { ParallaxProvider as ParallaxProvider3 } from "react-scroll-parallax";

// app/assets/big-down-arrow.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var BigDownArrow = () => /* @__PURE__ */ jsxDEV22("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "148", viewBox: "0 0 16 148", fill: "none", children: /* @__PURE__ */ jsxDEV22("path", { d: "M7.29289 147.707C7.68341 148.098 8.31658 148.098 8.7071 147.707L15.0711 141.343C15.4616 140.953 15.4616 140.319 15.0711 139.929C14.6805 139.538 14.0474 139.538 13.6568 139.929L7.99999 145.586L2.34314 139.929C1.95262 139.538 1.31945 139.538 0.928926 139.929C0.538402 140.319 0.538402 140.953 0.928926 141.343L7.29289 147.707ZM7 -4.37114e-08L6.99999 147L8.99999 147L9 4.37114e-08L7 -4.37114e-08Z", fill: "black" }, void 0, !1, {
  fileName: "app/assets/big-down-arrow.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/assets/big-down-arrow.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this);

// app/routes/about.tsx
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function About() {
  let { setHeaderColor } = useHeaderColor(), router = useNavigate6();
  return useEffect13(() => {
    setHeaderColor("linear-background");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV23(ParallaxProvider3, { children: [
    /* @__PURE__ */ jsxDEV23("div", { className: "flex-col md:flex gap-12 w-screen h-auto hidden", children: [
      /* @__PURE__ */ jsxDEV23("div", { className: "flex items-end justify-between w-auto", children: [
        /* @__PURE__ */ jsxDEV23("div", { className: "min-w-[950px] flex-col flex", children: [
          /* @__PURE__ */ jsxDEV23("div", { className: "w-[1259px] ml-10", children: /* @__PURE__ */ jsxDEV23("p", { className: "font-neueRegular text-title uppercase  text-orange font-medium", children: "Tout commen\xE7a par une id\xE9e" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 21,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "w-[637px] ml-12 my-16", children: /* @__PURE__ */ jsxDEV23("p", { className: "leading-[31.2px] text-justify text-2xl font-normal font-footer", children: "Sp\xE9cialiste en communication/marketing et passionn\xE9e de design, j\u2019aide les entreprises \xE0 valoriser leur image de marque en leur proposant une strat\xE9gie digitale adapt\xE9e. J\u2019aime relever de nouveaux d\xE9fis et m\xE9thodiquement mener les projets jusqu'\xE0 leur pleine r\xE9ussite.                  " }, void 0, !1, {
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
        /* @__PURE__ */ jsxDEV23("div", { className: "w-auto", children: /* @__PURE__ */ jsxDEV23("p", { className: "mx-10 uppercase text-redHome text-[100px] font-medium font-neueRegular leading-[90px]", children: "Scroll" }, void 0, !1, {
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
      /* @__PURE__ */ jsxDEV23("div", { className: "self-end mr-[220px] -mb-[130px] z-[10]", children: /* @__PURE__ */ jsxDEV23(BigDownArrow, {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV23("div", { className: "bg-saumon h-full w-full flex-col flex", children: [
        /* @__PURE__ */ jsxDEV23("div", { className: "flex items-end justify-around", children: [
          /* @__PURE__ */ jsxDEV23("div", { className: "w-[395px] h-[480px] rounded-[50px] -mt-10 ml-12", children: /* @__PURE__ */ jsxDEV23("img", { alt: "men with pride flag", src: Images.pride }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("p", { className: "-mb-40 z-[10] w-[802px] leading-[72px] text-royalBlue text-right text-[80px] font-neueRegular", children: '"Seules 54% des entreprises fran\xE7aises ont embrass\xE9 la diversit\xE9"*.' }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV23("div", { className: "flex items-center justify-around mb-10 mt-28 mx-20", children: [
          /* @__PURE__ */ jsxDEV23("p", { className: "text-[25px] leading-[32px] font-normal font-footer text-justify w-[640px]", children: "Dans un monde o\xF9 l'\xE9quit\xE9 n'est plus simplement une option mais une n\xE9cessit\xE9, j'ai un grand int\xE9r\xEAt \xE0 utiliser mon expertise pour aider les marques \xE0 \xE9voluer. Mon objectif est de les guider vers une approche plus inclusive. Cela implique de comprendre et de respecter la diversit\xE9 de leur public et de s'assurer que tous se sentent repr\xE9sent\xE9s et valoris\xE9s. Ensemble, faisons bouger les choses !              " }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "z-0 w-[395px] h-[480px] rounded-[50px]", children: /* @__PURE__ */ jsxDEV23("img", { alt: "group people", src: Images.group }, void 0, !1, {
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
      /* @__PURE__ */ jsxDEV23("div", { className: "bg-mainColor h-full w-full flex-col flex gap-12", children: [
        /* @__PURE__ */ jsxDEV23("div", { className: "flex items-center justify-center", children: [
          /* @__PURE__ */ jsxDEV23("p", { className: "text-[250px] text-redHome font-neueRegular uppercase mr-10", children: "Militer" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("img", { alt: "arrow pink", src: Images.manifesto, width: 100, height: 100 }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV23("p", { className: "font-neueRegular italic text-[50px] leading-[90%] mx-16", children: "Manifesto" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV23("div", { className: "w-3/4 mx-auto", children: [
          /* @__PURE__ */ jsxDEV23("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV23("p", { className: "font-footer text-[70px] mr-14", children: "01." }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              "L'",
              /* @__PURE__ */ jsxDEV23("span", { className: "text-orange", children: "inclusivit\xE9" }, void 0, !1, {
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
          /* @__PURE__ */ jsxDEV23("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV23("p", { className: "font-footer text-[70px] mr-11", children: "02." }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              "La ",
              /* @__PURE__ */ jsxDEV23("span", { className: "text-orange", children: "bienveillance" }, void 0, !1, {
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
          /* @__PURE__ */ jsxDEV23("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV23("p", { className: "font-footer text-[70px] mr-11", children: "03." }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("p", { className: "font-footer leading-[100%] text-[28px]", children: [
              "Sans ",
              /* @__PURE__ */ jsxDEV23("span", { className: "text-orange", children: "passion" }, void 0, !1, {
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
          /* @__PURE__ */ jsxDEV23("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV23("p", { className: "font-footer text-[70px] mr-11", children: "04." }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("p", { className: "leading-[100%] text-[28px] font-footer", children: [
              /* @__PURE__ */ jsxDEV23("span", { className: "text-orange", children: "Amusons nous" }, void 0, !1, {
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
        /* @__PURE__ */ jsxDEV23("div", { onClick: () => router("/services"), className: "hover:cursor-pointer border-black border mb-20 rounded-3xl p-[10px] w-[200px] mx-auto", children: /* @__PURE__ */ jsxDEV23("p", { className: "leading-[17.5px] font-bold text-sm text-center text-grayBlack uppercase", children: "Services" }, void 0, !1, {
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
    }, this),
    /* @__PURE__ */ jsxDEV23("div", { className: "md:hidden flex flex-col", children: [
      /* @__PURE__ */ jsxDEV23("p", { className: "text-redHome uppercase  hover:cursor-pointer text-titleMobile font-neueRegular", children: "Partage" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV23("p", { className: "text-redHome uppercase  hover:cursor-pointer text-titleMobile font-neueRegular", children: "Cr\xE9ation" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV23("p", { className: "text-redHome uppercase  hover:cursor-pointer text-titleMobile font-neueRegular", children: "Ambition" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/cards.tsx
var cards_exports = {};
__export(cards_exports, {
  default: () => Cards
});
import { useEffect as useEffect14 } from "react";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function Cards() {
  let { setHeaderColor } = useHeaderColor();
  return useEffect14(() => {
    setHeaderColor("mainColor");
  }, [setHeaderColor]), /* @__PURE__ */ jsxDEV24("div", { className: "h-full flex-col items-center justify-center mx-auto", children: [
    /* @__PURE__ */ jsxDEV24("div", { className: "flex-col my-20", children: [
      /* @__PURE__ */ jsxDEV24("p", { className: "font-neueRegular text-redHome text-[200px] leading-[90%] ml-20 mb-[180px]", children: "MOSAIC" }, void 0, !1, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("div", { className: "flex justify-evenly items-center", children: [
        /* @__PURE__ */ jsxDEV24("div", { className: "w-[400px] h-[400px]", children: [
          /* @__PURE__ */ jsxDEV24("p", { className: "text-[70px] mb-10 font-footer font-semibold leading-[90%]", children: "Concept." }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV24("p", { className: "font-footer h-[150px] text-base leading-[130%]", children: "Mosaic est une association LGBTQ+ pour les jeunes de 12 \xE0 18 ans, qui propose des activit\xE9s, des programmes et des services accessibles qui visent \xE0 responsabiliser les membres de la communaut\xE9, \xE0 fournir des ressources essentielles et \xE0 d\xE9fendre les droits des jeunes LGBT+. " }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cards.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV24("div", { className: "w-[400px] h-[400px]", children: [
          /* @__PURE__ */ jsxDEV24("p", { className: "text-[70px] mb-10 font-footer font-semibold leading-[90%]", children: "Mission." }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV24("p", { className: "font-footer text-base leading-[130%] h-[150px]", children: "Mon travail pour l\u2019association The Mosaic Trust a \xE9t\xE9 de cr\xE9er enti\xE8rement un plan de communication pour leur r\xE9seaux sociaux. " }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cards.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cards.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24("div", { className: "bg-saumon h-full pt-[150px] pb-[200px]", children: [
      /* @__PURE__ */ jsxDEV24("img", { src: Images.rectangle, className: "absolute left-[10%] z-0" }, void 0, !1, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("div", { className: "flex items-center mt-[150px] ml-[150px] jusitfy-center", children: [
        /* @__PURE__ */ jsxDEV24("img", { src: Images.mosaic1, className: "ml-[230px] z-[10]" }, void 0, !1, {
          fileName: "app/routes/cards.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV24("img", { src: Images.mosaic2, className: "ml-[100px]" }, void 0, !1, {
          fileName: "app/routes/cards.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cards.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24("div", { className: "h-screen bg-mainColor", children: [
      /* @__PURE__ */ jsxDEV24("p", { className: "w-[1000px] ml-20 mt-20 leading-[100%] text-[64px] font-neueCondensed text-orange", children: "Mosaic encourage, \xE9duque et inspire les jeune personnes LGBTQ+ et celleux \xE0 leur c\xF4t\xE9s" }, void 0, !1, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("div", { className: "flex items-center justify-around my-20", children: [
        /* @__PURE__ */ jsxDEV24("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV24("p", { className: "text-center mb-3 font-extrabold font-footer text-[100px] leading-[90%]", children: "+16%" }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV24("p", { className: "text-right ml-16  w-[200px] font-footer text-[25px] leading-[90%]", children: "Augmentation de l'audience en ligne." }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cards.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV24("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV24("p", { className: "text-center mb-10 font-extrabold font-footer text-[100px] leading-[90%]", children: "1" }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV24("p", { className: "text-right  w-[321px] font-footer text-[25px] leading-[90%]", children: "Nouveau concours litt\xE9raire pour les personnes Queer." }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cards.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV24("div", { className: "flex-col", children: [
          /* @__PURE__ */ jsxDEV24("p", { className: "text-center mb-10 font-extrabold font-footer text-[100px] leading-[90%]", children: "+20" }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV24("p", { className: "text-right  w-[321px] font-footer text-[25px] leading-[90%]", children: "Workshops en ligne pour les jeunes LGBTQ+." }, void 0, !1, {
            fileName: "app/routes/cards.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cards.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("p", { className: "text-center font-neueRegular my-[200px] font-semibold text-[80px] leading-[90%] text-orange", children: "TEMOIGNAGE" }, void 0, !1, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("p", { className: "w-[1062px] text-center mx-auto font-neueCondensed text-redHome text-[64px] leading-[100%]", children: "\u201CCl\xE9mence was a true pleasure to work with. In joining us she created a new role for herself leveraging her skills and abilities to build on Mosaic's online presence and grew our audience [...]\u201D." }, void 0, !1, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("p", { className: "w-[280px] text-center mx-auto font-neueCondensed  mt-20 text-[50px] leading-[100%]", children: "Hugh O\u2019Keeffe" }, void 0, !1, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("div", { className: "border-t border-black w-[108px] my-5 mx-auto" }, void 0, !1, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("p", { className: "w-[313px] pb-[100px] text-center mx-auto font-inter  text-[30px] leading-[100%]", children: "Assistant de direction" }, void 0, !1, {
        fileName: "app/routes/cards.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cards.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cards.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function Home() {
  return /* @__PURE__ */ jsxDEV25("div", { className: "md:my-20", children: /* @__PURE__ */ jsxDEV25(home_default, {}, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-75X5CYH4.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-FWVAADBG.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-43WGSL2O.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FBTKSGOF.js", imports: ["/build/_shared/chunk-APMP54XW.js", "/build/_shared/chunk-YTWU66CS.js", "/build/_shared/chunk-JOGLTZST.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-DIGSRBO4.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-C5VWSE2Q.js", imports: ["/build/_shared/chunk-KCNGSYT6.js", "/build/_shared/chunk-5T6BUAZE.js", "/build/_shared/chunk-Z7AT2O2U.js", "/build/_shared/chunk-OI4BMN2D.js", "/build/_shared/chunk-O7O3W72P.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-DE2RUPGG.js", imports: ["/build/_shared/chunk-5T6BUAZE.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/capiche": { id: "routes/capiche", parentId: "root", path: "capiche", index: void 0, caseSensitive: void 0, module: "/build/routes/capiche-GHITOHR3.js", imports: ["/build/_shared/chunk-OI4BMN2D.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cards": { id: "routes/cards", parentId: "root", path: "cards", index: void 0, caseSensitive: void 0, module: "/build/routes/cards-W4X4WYIB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-C4RRCPVE.js", imports: ["/build/_shared/chunk-O7O3W72P.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-APNREJ7O.js", imports: ["/build/_shared/chunk-KCNGSYT6.js", "/build/_shared/chunk-5T6BUAZE.js", "/build/_shared/chunk-Z7AT2O2U.js", "/build/_shared/chunk-OI4BMN2D.js", "/build/_shared/chunk-O7O3W72P.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logofolio": { id: "routes/logofolio", parentId: "root", path: "logofolio", index: void 0, caseSensitive: void 0, module: "/build/routes/logofolio-PL6JJT4Q.js", imports: ["/build/_shared/chunk-OI4BMN2D.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/mosaic": { id: "routes/mosaic", parentId: "root", path: "mosaic", index: void 0, caseSensitive: void 0, module: "/build/routes/mosaic-I67JMF2Y.js", imports: ["/build/_shared/chunk-OI4BMN2D.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/portfolio": { id: "routes/portfolio", parentId: "root", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/portfolio-VPMZWTI6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-JK3AXN3C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-SMC42HMX.js", imports: ["/build/_shared/chunk-Z7AT2O2U.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/values": { id: "routes/values", parentId: "root", path: "values", index: void 0, caseSensitive: void 0, module: "/build/routes/values-47PCYOY2.js", imports: ["/build/_shared/chunk-5T6BUAZE.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "019c7d3d", hmr: { runtime: "/build/_shared/chunk-43WGSL2O.js", timestamp: 1712860596160 }, url: "/build/manifest-019C7D3D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/logofolio": {
    id: "routes/logofolio",
    parentId: "root",
    path: "logofolio",
    index: void 0,
    caseSensitive: void 0,
    module: logofolio_exports
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports
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
  "routes/capiche": {
    id: "routes/capiche",
    parentId: "root",
    path: "capiche",
    index: void 0,
    caseSensitive: void 0,
    module: capiche_exports
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
  "routes/cards": {
    id: "routes/cards",
    parentId: "root",
    path: "cards",
    index: void 0,
    caseSensitive: void 0,
    module: cards_exports
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
