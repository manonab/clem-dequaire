import {
  home_default
} from "/build/_shared/chunk-2ZU3NIX6.js";
import "/build/_shared/chunk-HC72RTTB.js";
import "/build/_shared/chunk-P4DS5TL5.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-MHJG5VZ7.js";
import "/build/_shared/chunk-FYYCLQBT.js";
import "/build/_shared/chunk-WSSTHBAM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
import "/build/_shared/chunk-UWV35TSL.js";
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
  import.meta.hot.lastModified = "1700838133888.2397";
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(home_default, {}, void 0, false, {
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
//# sourceMappingURL=/build/routes/home-O3Q524MJ.js.map
