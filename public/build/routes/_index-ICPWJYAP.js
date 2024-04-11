import {
  home_default
} from "/build/_shared/chunk-X2OUAU7S.js";
import "/build/_shared/chunk-5T6BUAZE.js";
import "/build/_shared/chunk-Z7AT2O2U.js";
import "/build/_shared/chunk-FWVAADBG.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-OI4BMN2D.js";
import {
  motion
} from "/build/_shared/chunk-APMP54XW.js";
import {
  Images
} from "/build/_shared/chunk-YTWU66CS.js";
import "/build/_shared/chunk-O7O3W72P.js";
import "/build/_shared/chunk-JOGLTZST.js";
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
  import.meta.hot.lastModified = "1704899523547.937";
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

// app/animations/home-mobile.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/animations/home-mobile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/animations/home-mobile.tsx"
  );
  import.meta.hot.lastModified = "1712858244188.0344";
}
var MobileAnimation = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center h-full z-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(motion.img, { src: Images.newlogo, alt: "logo", initial: {
      opacity: 0,
      x: -50
    }, animate: {
      opacity: 1,
      x: 0
    }, transition: {
      duration: 0.5
    } }, void 0, false, {
      fileName: "app/animations/home-mobile.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(motion.div, { initial: {
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
        fileName: "app/animations/home-mobile.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(motion.div, { initial: {
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
        fileName: "app/animations/home-mobile.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(motion.div, { initial: {
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
        fileName: "app/animations/home-mobile.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/animations/home-mobile.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/animations/home-mobile.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c2 = MobileAnimation;
var home_mobile_default = MobileAnimation;
var _c2;
$RefreshReg$(_c2, "MobileAnimation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1712858045346.6257";
}
function Index() {
  _s2();
  const {
    state
  } = useDesktopAnimation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:hidden flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(home_mobile_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `hidden md:flex ${state.currentImage === state.images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        y: 100
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }, children: !state.animationFinished && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: state.images[state.currentImage], alt: "Image", width: 400, height: 400, className: "rounded mx-auto" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      state.showLastPart && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(background_slider_default, { isVisible: !state.animationFinished }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 36
      }, this),
      state.animationFinished && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(home_default, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s2(Index, "+caJj4ns/c4dToBrJlf0qDBZY2Q=", false, function() {
  return [useDesktopAnimation];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-ICPWJYAP.js.map
