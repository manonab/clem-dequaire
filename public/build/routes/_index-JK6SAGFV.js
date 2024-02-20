import {
  home_default
} from "/build/_shared/chunk-VGYKPBCS.js";
import "/build/_shared/chunk-FYYCLQBT.js";
import {
  motion
} from "/build/_shared/chunk-HC72RTTB.js";
import "/build/_shared/chunk-4XKXEAD2.js";
import "/build/_shared/chunk-P4DS5TL5.js";
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

// app/routes/_index.tsx
var import_react2 = __toESM(require_react(), 1);

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

// app/routes/_index.tsx
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
  import.meta.hot.lastModified = "1707759513579.1414";
}
function Index() {
  _s2();
  const {
    setHeaderColor
  } = useHeaderColor();
  const [state, setState] = (0, import_react2.useState)({
    currentImage: 0,
    showLastPart: false,
    animationFinished: false
  });
  const images = [Images.eye, Images.image1, Images.image2, Images.image3, Images.image5, Images.image4, Images.image6, Images.image7, Images.image8, Images.image9, Images.image10, Images.logo];
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
        setState((prev) => ({
          ...prev,
          showLastPart: true
        }));
      }, 1500);
      setTimeout(() => {
        setHeaderColor("bg_slider hovered");
      }, 2400);
    }
  }, [state.currentImage, images.length]);
  (0, import_react2.useEffect)(() => {
    if (state.showLastPart) {
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          animationFinished: true
        }));
      }, 4e3);
    }
  }, [state.showLastPart]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${state.currentImage === images.length - 1 ? "top-0" : "top-[80px]"} mx-auto top-[80px] relative h-full`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 100
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }, children: !state.animationFinished && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: images[state.currentImage], alt: "Image", width: 400, height: 400, className: "rounded mx-auto" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 90,
      columnNumber: 38
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    state.showLastPart && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(background_slider_default, { isVisible: !state.animationFinished }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 93,
      columnNumber: 30
    }, this),
    state.animationFinished && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(home_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 94,
      columnNumber: 35
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_s2(Index, "B+nUhpNXnpDG+ptlQ2TwGV3xdUk=", false, function() {
  return [useHeaderColor];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-JK6SAGFV.js.map
