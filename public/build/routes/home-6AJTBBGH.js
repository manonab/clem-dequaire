import {
  home_default
} from "/build/_shared/chunk-QAIRQCHO.js";
import "/build/_shared/chunk-5T6BUAZE.js";
import "/build/_shared/chunk-Z7AT2O2U.js";
import "/build/_shared/chunk-OI4BMN2D.js";
import "/build/_shared/chunk-APMP54XW.js";
import "/build/_shared/chunk-T5TQ65FD.js";
import "/build/_shared/chunk-FWVAADBG.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-O7O3W72P.js";
import "/build/_shared/chunk-JOGLTZST.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-DIGSRBO4.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/home.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/home.tsx"
  );
  import.meta.hot.lastModified = "1712401919715.1497";
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(home_default, {}, void 0, false, {
    fileName: "app/routes/home.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Home as default
};
//# sourceMappingURL=/build/routes/home-6AJTBBGH.js.map
