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

// app/routes/contact.tsx
var import_react = __toESM(require_react(), 1);

// node_modules/emailjs-com/es/store/store.js
var store = {
  _origin: "https://api.emailjs.com"
};

// node_modules/emailjs-com/es/methods/init/init.js
var init = (userID, origin = "https://api.emailjs.com") => {
  store._userID = userID;
  store._origin = origin;
};

// node_modules/emailjs-com/es/utils/validateParams.js
var validateParams = (userID, serviceID, templateID) => {
  if (!userID) {
    throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
  }
  if (!serviceID) {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID) {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
  return true;
};

// node_modules/emailjs-com/es/models/EmailJSResponseStatus.js
var EmailJSResponseStatus = class {
  constructor(httpResponse) {
    this.status = httpResponse.status;
    this.text = httpResponse.responseText;
  }
};

// node_modules/emailjs-com/es/api/sendPost.js
var sendPost = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", ({ target }) => {
      const responseStatus = new EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === "OK") {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener("error", ({ target }) => {
      reject(new EmailJSResponseStatus(target));
    });
    xhr.open("POST", store._origin + url, true);
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};

// node_modules/emailjs-com/es/methods/send/send.js
var send = (serviceID, templateID, templatePrams, userID) => {
  const uID = userID || store._userID;
  validateParams(uID, serviceID, templateID);
  const params = {
    lib_version: "3.2.0",
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};

// node_modules/emailjs-com/es/methods/sendForm/sendForm.js
var findHTMLForm = (form) => {
  let currentForm;
  if (typeof form === "string") {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
  }
  return currentForm;
};
var sendForm = (serviceID, templateID, form, userID) => {
  const uID = userID || store._userID;
  const currentForm = findHTMLForm(form);
  validateParams(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append("lib_version", "3.2.0");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", uID);
  return sendPost("/api/v1.0/email/send-form", formData);
};

// node_modules/emailjs-com/es/index.js
var es_default = {
  init,
  send,
  sendForm
};

// app/routes/contact.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contact.tsx"
  );
  import.meta.hot.lastModified = "1712505137216.1829";
}
function Modal({
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-8 rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-neueRegular text-xl text-center", children: "Votre message a bien \xE9t\xE9 envoy\xE9 !" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, className: "block mx-auto mt-4 bg-royalBlue text-white font-bold py-2 px-4 rounded", children: "Fermer" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Modal;
function Contact() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const [showModal, setShowModal] = (0, import_react.useState)(false);
  const [name, setName] = (0, import_react.useState)("");
  const [email, setEmail] = (0, import_react.useState)("");
  const [subject, setSubject] = (0, import_react.useState)("");
  const [message, setMessage] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    es_default.init("IoYqcS-FyoRAsKFCH");
    setHeaderColor("mainColor");
  }, [setHeaderColor]);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSendEmail = () => {
    es_default.send("service_bws8nok", "template_xk52e9b", {
      user_name: name,
      message,
      user_email: email,
      user_object: subject
    }).then((response) => {
      console.log("Email envoy\xE9 avec succ\xE8s !", response);
      setShowModal(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }).catch((error) => {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-col flex gap-20 mx-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-title text-orange  font-neueRegular", children: "Cr\xE9ons" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-title text-orange  font-neueRegular", children: "ensemble." }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { onClose: handleCloseModal }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 78,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex-col flex gap-1 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-inter mb-1", children: "Nom" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: name, onChange: (e) => setName(e.target.value), className: "w-fit p-2 rounded-[10px] bg-mainColor border border-black min-w-[530px] min-h-[65px]" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex-col flex gap-1 items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-inter mb-1", children: "Pr\xE9nom" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: email, onChange: (e) => setEmail(e.target.value), className: "w-fit p-2 rounded-[10px] bg-mainColor border border-black min-w-[530px] min-h-[65px]" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(Contact, "TkMJYq6SWTaNXLcDkudg2vWTn/I=", false, function() {
  return [useHeaderColor];
});
_c2 = Contact;
var _c;
var _c2;
$RefreshReg$(_c, "Modal");
$RefreshReg$(_c2, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contact-MEOCRQLA.js.map
