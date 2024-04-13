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

// app/animations/home-desktop.tsx
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/animations/home-desktop.tsx"
  );
  import.meta.hot.lastModified = "1712406970751.5027";
}
var useDesktopAnimation = () => {
  const { setHeaderColor } = useHeaderColor();
  const [state, setState] = (0, import_react.useState)({
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
  (0, import_react.useEffect)(() => {
    const fadeInUpAnimationTimer = setTimeout(() => {
      startSlideShow();
    }, 1200);
    return () => {
      clearTimeout(fadeInUpAnimationTimer);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    if (state.currentImage === images.length - 1) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, showLastPart: true }));
      }, 1500);
      setTimeout(() => {
        setHeaderColor("bg_slider hovered");
      }, 2400);
    }
  }, [state.currentImage, images.length]);
  (0, import_react.useEffect)(() => {
    if (state.showLastPart) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, animationFinished: true }));
      }, 4e3);
    }
  }, [state.showLastPart]);
  return { state, images };
};

// app/routes/_index.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1712993364736.3506";
}
function Index() {
  _s();
  const {
    state
  } = useDesktopAnimation();
  const redirect = useNavigate();
  (0, import_react2.useEffect)(() => {
    redirect("Home");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(Index, "DV3Mxgy0YOVG00TuKVWroCOkdns=", false, function() {
  return [useDesktopAnimation, useNavigate];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-UDLXVEHL.js.map
