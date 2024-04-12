import {
  MailOutlined_default
} from "/build/_shared/chunk-JOGLTZST.js";
import {
  useHeaderColor
} from "/build/_shared/chunk-DIGSRBO4.js";
import {
  createHotContext
} from "/build/_shared/chunk-43WGSL2O.js";
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

// app/assets/contact/contactArrow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/assets/contact/contactArrow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/assets/contact/contactArrow.tsx"
  );
  import.meta.hot.lastModified = "1712855742923.6926";
}
var ContactArrow = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { width: "16", height: "51", viewBox: "0 0 16 51", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7.2929 50.7071C7.68342 51.0976 8.31658 51.0976 8.70711 50.7071L15.0711 44.3431C15.4616 43.9526 15.4616 43.3195 15.0711 42.9289C14.6805 42.5384 14.0474 42.5384 13.6569 42.9289L8 48.5858L2.34315 42.9289C1.95262 42.5384 1.31946 42.5384 0.928934 42.9289C0.53841 43.3195 0.53841 43.9526 0.928934 44.3431L7.2929 50.7071ZM7 4.37114e-08L7 50L9 50L9 -4.37114e-08L7 4.37114e-08Z", fill: "#FF5C00" }, void 0, false, {
    fileName: "app/assets/contact/contactArrow.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/assets/contact/contactArrow.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_c = ContactArrow;
var _c;
$RefreshReg$(_c, "ContactArrow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/contact.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1712935741005.8833";
}
function Modal({
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white p-8 rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueRegular text-xl text-center", children: "Votre message a bien \xE9t\xE9 envoy\xE9 !" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: onClose, className: "block mx-auto mt-4 bg-royalBlue text-white font-bold py-2 px-4 rounded", children: "Fermer" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c2 = Modal;
function Contact() {
  _s();
  const {
    setHeaderColor
  } = useHeaderColor();
  const [showModal, setShowModal] = (0, import_react.useState)(false);
  const [name, setName] = (0, import_react.useState)("");
  const [lastName, setLastName] = (0, import_react.useState)("");
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
      user_lastName: lastName,
      message,
      user_email: email,
      user_object: subject
    }).then((response) => {
      console.log("Email envoy\xE9 avec succ\xE8s !", response);
      setShowModal(true);
      setName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }).catch((error) => {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-title text-orange  font-neueRegular", children: "Cr\xE9ons" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-title text-orange  font-neueRegular", children: "ensemble." }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    showModal && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal, { onClose: handleCloseModal }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 82,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden flex-col md:flex gap-3 mx-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-1", children: "Nom" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: name, onChange: (e) => setLastName(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border border-black" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-1", children: "Email" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: lastName, onChange: (e) => setEmail(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border border-black" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-1", children: "Nom" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: subject, onChange: (e) => setSubject(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border border-black" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-1", children: "Email" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: email, onChange: (e) => setEmail(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border border-black" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-1 w-full", children: "Votre Message" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { value: message, onChange: (e) => setMessage(e.target.value), className: "p-2 rounded-[20px] bg-mainColor border border-black" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { onClick: handleSendEmail, className: "hover:cursor-pointer border-black bg-black border mt-5 mr-[10px] rounded-3xl px-5 py-3 w-[200px] mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "leading-[17.5px] font-bold text-sm text-center text-white uppercase", children: "Envoyez" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:hidden flex-col flex gap-3 mx-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-2 flex flex-col items-start gap-4 justify-around mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-royalBlue text-[45px] leading-[100%] font-neueRegular", children: [
          "Rencontrons",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 132,
            columnNumber: 96
          }, this),
          "nous."
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContactArrow, {}, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-around gap-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col flex items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-2", children: "Nom" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: lastName, onChange: (e) => setLastName(e.target.value), className: "p-2 max-w-[164px] max-h-[55px] rounded-[5px] bg-mainColor border border-black w-full" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 138,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col flex items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-2", children: "Pr\xE9nom" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: name, onChange: (e) => setName(e.target.value), className: "px-2 py-1 max-w-[164px] max-h-[55px] rounded-[5px] bg-mainColor border border-black w-full" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-around gap-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col flex items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-2", children: "Email" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 147,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: email, onChange: (e) => setEmail(e.target.value), className: "px-2 py-1 max-w-[164px] max-h-[55px] rounded-[5px] bg-mainColor border border-black w-full" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col flex items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter mb-2", children: "Object" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 151,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { value: subject, onChange: (e) => setSubject(e.target.value), className: "px-2 py-1 max-w-[164px] max-h-[55px] rounded-[5px] bg-mainColor border border-black w-full" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col flex items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-inter ml-5 my-1", children: "Votre message" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { value: message, onChange: (e) => setMessage(e.target.value), className: "px-2 py-1 min-w-[370px] rounded-[5px] bg-mainColor border border-black mx-auto min-h-[200px] " }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center my-10 justify-around w-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hover:cursor-pointer border-black border rounded-3xl p-2 mx-auto max-w-[100px] max-h-[25px]", onClick: handleSendEmail, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-footer font-bold text-[6px] text-center text-grayBlack uppercase", children: "Hit me baby (one time)" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 161,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 160,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueCondensed text-[16px] leading-[90%] text-orange mr-1", children: [
            "Retrouvez moi \xE9galement sur ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 164,
              columnNumber: 118
            }, this),
            "Linkedin juste ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "text-redHome", target: "_blank", href: "https://www.linkedin.com/in/cl%C3%A9mence-dequaire/?locale=en_US", children: "ici" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 164,
              columnNumber: 139
            }, this),
            "."
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MailOutlined_default, {}, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-neueCondensed text-grayBlack text-[10px] leading-[90%]", children: "clemence.dequaire.pro@gmail.com" }, void 0, false, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 167,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 165,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(Contact, "dHuN7LQ9GGVcczK4hNQxQDQ3AX8=", false, function() {
  return [useHeaderColor];
});
_c22 = Contact;
var _c2;
var _c22;
$RefreshReg$(_c2, "Modal");
$RefreshReg$(_c22, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Contact
};
//# sourceMappingURL=/build/_shared/chunk-SQXQJDN5.js.map
