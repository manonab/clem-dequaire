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
var tailwind_default = "/build/_assets/tailwind-VJCIKJTX.css";

// app/  components/header/index.tsx
import { useNavigate } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Menu = () => {
  let router = useNavigate();
  return /* @__PURE__ */ jsxDEV2("div", { className: "flex mx-auto justify-between py-[30px] px-[40px] linear-background", children: [
    /* @__PURE__ */ jsxDEV2("div", { onClick: () => router("/"), className: "hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV2("p", { className: "text-grayBlack font-kateMedium text-3xl leading-8", children: "C." }, void 0, !1, {
      fileName: "app/  components/header/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/  components/header/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2(
      "div",
      {
        className: "flex justify-center items-center",
        children: [
          { path: "/", name: "Home" },
          { path: "/about", name: "About" },
          { path: "/values", name: "My Values" },
          { path: "/projects", name: "Projects" }
        ].map((route) => /* @__PURE__ */ jsxDEV2(
          "div",
          {
            className: "px-5 w-auto",
            onClick: () => router(`${route.path}`),
            children: /* @__PURE__ */ jsxDEV2("p", { className: "leading-4 text-grayBlack hover:cursor-pointer text-xs font-clash text-black", children: route.name }, void 0, !1, {
              fileName: "app/  components/header/index.tsx",
              lineNumber: 27,
              columnNumber: 13
            }, this)
          },
          route.path,
          !1,
          {
            fileName: "app/  components/header/index.tsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/  components/header/index.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV2("div", { onClick: () => router("/contact"), children: /* @__PURE__ */ jsxDEV2("p", { className: "text-xs hover:cursor-pointer font-clashSemibold underline", children: "Let\u2019s work together" }, void 0, !1, {
      fileName: "app/  components/header/index.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/  components/header/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/  components/header/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/common/layout/index.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Layout = ({ children }) => /* @__PURE__ */ jsxDEV3("div", { className: "h-screen bg-mainColor w-screen", children: [
  /* @__PURE__ */ jsxDEV3(Menu, {}, void 0, !1, {
    fileName: "app/common/layout/index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("main", { children }, void 0, !1, {
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
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: /* @__PURE__ */ jsxDEV4(Layout, { children: [
      /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Project
});
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Project() {
  return /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5("p", { children: "coucou from projet" }, void 0, !1, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Contact() {
  return /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6("p", { className: "text-3xl font-bold", children: "coucou from contact" }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useEffect as useEffect2, useState as useState2 } from "react";

// app/  components/home/index.tsx
import { motion } from "framer-motion";

// app/styles/assets/eye.png
var eye_default = "/build/_assets/eye-CKRM674F.png";

// app/styles/assets/image1.png
var image1_default = "/build/_assets/image1-CTTH335I.png";

// app/styles/assets/image2.png
var image2_default = "/build/_assets/image2-EVRSEZIK.png";

// app/styles/assets/image3.png
var image3_default = "/build/_assets/image3-Z4SPUBSX.png";

// app/styles/assets/image4.png
var image4_default = "/build/_assets/image4-TNG7FKDR.png";

// app/styles/assets/image5.png
var image5_default = "/build/_assets/image5-SNRTZSIU.png";

// app/styles/assets/image6.png
var image6_default = "/build/_assets/image6-W5356ZSH.png";

// app/styles/assets/image7.png
var image7_default = "/build/_assets/image7-G4CFWDGH.png";

// app/styles/assets/image8.png
var image8_default = "/build/_assets/image8-344HZ4MV.png";

// app/styles/assets/image9.png
var image9_default = "/build/_assets/image9-DNNGWOFO.png";

// app/styles/assets/image10.png
var image10_default = "/build/_assets/image10-PE62ZTPI.png";

// app/styles/assets/logo.png
var logo_default = "/build/_assets/logo-JRSPZ2IB.png";

// app/styles/assets/mosaic.png
var mosaic_default = "/build/_assets/mosaic-7QDG5ZMK.png";

// app/styles/assets/bear.png
var bear_default = "/build/_assets/bear-XFIOM2CT.png";

// app/styles/assets/capiche.png
var capiche_default = "/build/_assets/capiche-ET66KVMZ.png";

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
  capiche: capiche_default
};

// app/  components/home/index.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}, timing = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96]
}, HomeComponent = () => /* @__PURE__ */ jsxDEV7(
  motion.div,
  {
    className: "z-10 flex justify-between items-start h-auto",
    initial: "hidden",
    animate: "visible",
    variants: sectionVariants,
    transition: { ...timing },
    children: [
      /* @__PURE__ */ jsxDEV7(
        motion.img,
        {
          src: Images.mosaic,
          alt: "mosaic image",
          className: "w-[310px] h-[425px]",
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { ...timing, delay: 0.2 }
        },
        void 0,
        !1,
        {
          fileName: "app/  components/home/index.tsx",
          lineNumber: 24,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(
        motion.div,
        {
          className: "relative",
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { ...timing, delay: 1.3 },
          children: [
            /* @__PURE__ */ jsxDEV7(
              motion.img,
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
                fileName: "app/  components/home/index.tsx",
                lineNumber: 38,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              motion.p,
              {
                className: "text-center text-mainColor absolute top-[50%]  transform translate(-50%, -50%) font-neueMedium text-[50px]",
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                transition: { ...timing, delay: 0.7 },
                children: "Welcome to my portfolio."
              },
              void 0,
              !1,
              {
                fileName: "app/  components/home/index.tsx",
                lineNumber: 46,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              motion.button,
              {
                className: "bg-grayBlack mx-auto self-center absolute top-[75%] py-2.5 px-10 w-[163px] font-inter text-xs uppercase text-white font-bold rounded-[50px] left-[40%] transform translate(-50%, -50%)",
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                transition: { ...timing, delay: 0.9 },
                children: "See more"
              },
              void 0,
              !1,
              {
                fileName: "app/  components/home/index.tsx",
                lineNumber: 54,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/  components/home/index.tsx",
          lineNumber: 32,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7(
        motion.img,
        {
          src: Images.capiche,
          alt: "capiche image",
          className: "w-[300px] h-[380px] opacity-[0.9] mt-[300px]",
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          transition: { ...timing, delay: 1.5 }
        },
        void 0,
        !1,
        {
          fileName: "app/  components/home/index.tsx",
          lineNumber: 63,
          columnNumber: 7
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/  components/home/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  },
  this
), home_default = HomeComponent;

// app/  components/home/background-slider.tsx
import { useEffect, useState } from "react";
import { motion as motion2 } from "framer-motion";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var BackgroundSlider = ({ isVisible = !1 }) => {
  let [isHovered, setIsHovered] = useState(!1);
  return useEffect(() => {
    let timer = setTimeout(() => {
      setIsHovered(!0);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []), /* @__PURE__ */ jsxDEV8(
    motion2.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
      className: `${isVisible ? "w-full md:min-h-[910px] flex justify-between items-start z-10 h-full inset-0 absolute -top-20 bg_slider " : "hidden"} ${isHovered && "hovered"}`,
      children: /* @__PURE__ */ jsxDEV8("div", { className: "flex-col", children: [
        /* @__PURE__ */ jsxDEV8("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2s" }, children: "for" }, void 0, !1, {
          fileName: "app/  components/home/background-slider.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.1s" }, children: "bold" }, void 0, !1, {
          fileName: "app/  components/home/background-slider.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.2s" }, children: "mind" }, void 0, !1, {
          fileName: "app/  components/home/background-slider.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: { animationDelay: "2.3s" }, children: "only" }, void 0, !1, {
          fileName: "app/  components/home/background-slider.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/  components/home/background-slider.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/  components/home/background-slider.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}, background_slider_default = BackgroundSlider;

// app/routes/_index.tsx
import { motion as motion3 } from "framer-motion";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Index() {
  let [state, setState] = useState2({
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
  return useEffect2(() => {
    let fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);
    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []), useEffect2(() => {
    state.currentImage === images.length - 1 && setTimeout(() => {
      setState((prev) => ({ ...prev, showLastPart: !0 }));
    }, 1500);
  }, [state.currentImage, images.length]), useEffect2(() => {
    state.showLastPart && setTimeout(() => {
      setState((prev) => ({ ...prev, animationFinished: !0 }));
    }, 4e3);
  }, [state.showLastPart]), /* @__PURE__ */ jsxDEV9(
    "div",
    {
      className: `${state.currentImage === images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`,
      children: [
        /* @__PURE__ */ jsxDEV9(
          motion3.div,
          {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            children: !state.animationFinished && /* @__PURE__ */ jsxDEV9(
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
                lineNumber: 81,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 75,
            columnNumber: 7
          },
          this
        ),
        state.showLastPart && /* @__PURE__ */ jsxDEV9(background_slider_default, { isVisible: !state.animationFinished }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 91,
          columnNumber: 30
        }, this),
        state.animationFinished && /* @__PURE__ */ jsxDEV9(home_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 35
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 71,
      columnNumber: 5
    },
    this
  );
}

// app/routes/values.tsx
var values_exports = {};
__export(values_exports, {
  default: () => Values
});
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function Values() {
  return /* @__PURE__ */ jsxDEV10("div", { children: /* @__PURE__ */ jsxDEV10("p", { children: "coucou from values" }, void 0, !1, {
    fileName: "app/routes/values.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/values.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV11("div", { children: /* @__PURE__ */ jsxDEV11("p", { className: "font-clash", children: "coucou from about" }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6PCYKVL5.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-P4DS5TL5.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-43WGSL2O.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7TSX7PI6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DIOX2LI5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-YMCOFHIJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-OJ7OZ7ZF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-ZGH2VTP3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/values": { id: "routes/values", parentId: "root", path: "values", index: void 0, caseSensitive: void 0, module: "/build/routes/values-UDFTMFFS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "87f37089", hmr: { runtime: "/build/_shared/chunk-43WGSL2O.js", timestamp: 1700655275412 }, url: "/build/manifest-87F37089.js" };

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
