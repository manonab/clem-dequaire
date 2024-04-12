import {
  home_default
} from "/build/_shared/chunk-DXGGGQML.js";
import "/build/_shared/chunk-5T6BUAZE.js";
import {
  require_lib
} from "/build/_shared/chunk-IR7NE7RZ.js";
import "/build/_shared/chunk-Z7AT2O2U.js";
import "/build/_shared/chunk-OI4BMN2D.js";
import {
  motion
} from "/build/_shared/chunk-GX2C7XOP.js";
import {
  Images
} from "/build/_shared/chunk-EQTILSID.js";
import {
  useNavigate
} from "/build/_shared/chunk-FWVAADBG.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-SYSBVIL5.js";
import "/build/_shared/chunk-ZF5TFIOV.js";
import "/build/_shared/chunk-NMZL6IDN.js";
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

// app/components/home/background-slider.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/background-slider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/background-slider.tsx"
  );
  import.meta.hot.lastModified = "1712932714689.6191";
}
var BackgroundSlider = ({
  isVisible = false
}) => {
  _s();
  const [isHovered, setIsHovered] = (0, import_react.useState)(false);
  const {
    setHeaderColor
  } = useHeaderColor();
  (0, import_react.useEffect)(() => {
    const timer = setTimeout(() => {
      setIsHovered(true);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setHeaderColor]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  }, className: `animate__animated animate__fadeInUpBig animate__delay-1.3s ${!isVisible ? "hidden" : "w-full md:min-h-[910px] flex justify-between items-start z-10 h-full inset-0 absolute -top-20 bg_slider"} ${isHovered && "hovered"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra`, style: {
      animationDelay: "2s"
    }, children: "for" }, void 0, false, {
      fileName: "app/components/home/background-slider.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: {
      animationDelay: "2.1s"
    }, children: "bold" }, void 0, false, {
      fileName: "app/components/home/background-slider.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: {
      animationDelay: "2.2s"
    }, children: "mind" }, void 0, false, {
      fileName: "app/components/home/background-slider.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "move-left-to-right uppercase text-[245px] leading-[200px] font-neueExtra", style: {
      animationDelay: "2.3s"
    }, children: "only" }, void 0, false, {
      fileName: "app/components/home/background-slider.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/background-slider.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/background-slider.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s(BackgroundSlider, "ZFFOR4CtX3pjpWhHzGyiq7CX1B8=", false, function() {
  return [useHeaderColor];
});
_c = BackgroundSlider;
var background_slider_default = BackgroundSlider;
var _c;
$RefreshReg$(_c, "BackgroundSlider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/animations/home-desktop.tsx
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/animations/home-desktop.tsx"
  );
  import.meta.hot.lastModified = "1712406970751.5027";
}
var useDesktopAnimation = () => {
  const { setHeaderColor } = useHeaderColor();
  const [state, setState] = (0, import_react2.useState)({
    currentImage: 0,
    showLastPart: false,
    animationFinished: false,
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
  });
  const images = [
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
  ];
  const startSlideShow = () => {
    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        currentImage: prev.currentImage < images.length - 1 ? prev.currentImage + 1 : prev.currentImage
      }));
    }, 150);
    return () => clearInterval(interval);
  };
  (0, import_react2.useEffect)(() => {
    const fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);
    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    if (state.currentImage === images.length - 1) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, showLastPart: true }));
      }, 1500);
      setTimeout(() => {
        setHeaderColor("bg_slider hovered");
      }, 2400);
    }
  }, [state.currentImage, images.length]);
  (0, import_react2.useEffect)(() => {
    if (state.showLastPart) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, animationFinished: true }));
      }, 4e3);
    }
  }, [state.showLastPart]);
  return { state, images };
};

// app/routes/_index.tsx
var import_react3 = __toESM(require_react(), 1);
var import_react_device_detect = __toESM(require_lib(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1712932777116.4236";
}
function Index() {
  _s2();
  const {
    state
  } = useDesktopAnimation();
  const redirect = useNavigate();
  (0, import_react3.useEffect)(() => {
    if (import_react_device_detect.isMobile) {
      redirect("Home");
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `hidden md:flex ${state.currentImage === state.images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 100
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }, children: !state.animationFinished && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: state.images[state.currentImage], alt: "Image", width: 400, height: 400, className: "rounded mx-auto" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 42
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    state.showLastPart && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(background_slider_default, { isVisible: !state.animationFinished }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 32
    }, this),
    state.animationFinished && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(home_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 55,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s2(Index, "DV3Mxgy0YOVG00TuKVWroCOkdns=", false, function() {
  return [useDesktopAnimation, useNavigate];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-QEUHH6JL.js.map
