"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button_default,
  Card: () => Card_default,
  Container: () => Container_default,
  Dialog: () => Dialog_default,
  Input: () => Input_default,
  Sidebar: () => Sidebar_default
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_clsx = __toESM(require("clsx"));
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  children,
  variant = "primary",
  onClick,
  className
}) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none shadow-sm";
  const variantStyles = {
    primary: `bg-purple-500 text-white hover:bg-purple-600 transition-all ease-in-out`,
    secondary: `bg-gray-500 text-white hover:bg-gray-600 transition-all ease-in-out`,
    danger: `bg-red-500 text-white hover:bg-red-600 transition-all ease-in-out`
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      className: (0, import_clsx.default)(baseStyles, variantStyles[variant], className),
      onClick,
      children
    }
  );
};
var Button_default = Button;

// src/components/Card.tsx
var import_clsx2 = __toESM(require("clsx"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = ({ children, className, size = "medium" }) => {
  const baseStyles = "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 dark:text-white";
  const sizeStyles = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: (0, import_clsx2.default)(baseStyles, sizeStyles[size], className), children });
};
var Card_default = Card;

// src/components/Input.tsx
var import_clsx3 = __toESM(require("clsx"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className
}) => {
  const baseStyles = "dark:text-white px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "input",
    {
      type,
      value,
      onChange: (e) => onChange(e.target.value),
      placeholder,
      className: (0, import_clsx3.default)(baseStyles, className)
    }
  );
};
var Input_default = Input;

// src/components/Container.tsx
var import_clsx4 = __toESM(require("clsx"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Container = ({
  children,
  padding = "medium"
}) => {
  const baseStyles = "mx-auto max-w-7xl space-y-4 space-x-4 flex flex-col flex-row";
  const paddingStyles = {
    none: "p-0",
    small: "p-2",
    medium: "p-4",
    large: "p-8"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: (0, import_clsx4.default)(baseStyles, paddingStyles[padding]), children });
};
var Container_default = Container;

// src/components/Dialog.tsx
var import_clsx5 = __toESM(require("clsx"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  variant = "default"
}) => {
  const badgeStyles = {
    default: "",
    info: "bg-blue-100 text-blue-600",
    warning: "bg-yellow-100 text-yellow-700"
  };
  const badgeIcons = {
    default: null,
    info: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.Info, { className: "w-5 h-5" }),
    warning: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.AlertTriangle, { className: "w-5 h-5" })
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: (0, import_clsx5.default)(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity",
        isOpen ? "visible bg-black/50 opacity-100" : "invisible opacity-0"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "absolute inset-0", onClick: onClose }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "div",
          {
            className: (0, import_clsx5.default)(
              "relative bg-white dark:text-white  dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mx-4 transform transition-all",
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
              className
            ),
            children: [
              variant !== "default" && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                "div",
                {
                  className: (0, import_clsx5.default)(
                    "absolute -top-3 -left-3 flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium shadow",
                    badgeStyles[variant]
                  ),
                  children: [
                    badgeIcons[variant],
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "capitalize", children: variant })
                  ]
                }
              ),
              title && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-xl font-bold mb-4", children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mb-4", children }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "button",
                {
                  className: "px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-all ease-in-out",
                  onClick: onClose,
                  children: "Close"
                }
              )
            ]
          }
        )
      ]
    }
  );
};
var Dialog_default = Dialog;

// src/components/Templates/Sidebar.tsx
var import_clsx6 = __toESM(require("clsx"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var Sidebar = ({
  children,
  width = "medium",
  bgVariant = "light",
  className,
  attach = true
  // default: attached
}) => {
  const widthStyles = {
    narrow: "w-48",
    medium: "w-64",
    wide: "w-80"
  };
  const bgStyles = {
    light: "bg-white dark:bg-gray-100 border-gray-200",
    dark: "bg-gray-800 dark:bg-gray-900 text-white border-gray-700"
  };
  const attachedStyles = "fixed left-0 top-0 h-screen min-h-screen p-4 border-r-2 rounded-tr-2xl rounded-br-2xl";
  const detachedStyles = "fixed top-6 left-6 h-[90vh] p-4 border-2 rounded-2xl shadow-lg";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "aside",
    {
      className: (0, import_clsx6.default)(
        attach ? attachedStyles : detachedStyles,
        widthStyles[width],
        bgStyles[bgVariant],
        className
      ),
      children
    }
  );
};
var Sidebar_default = Sidebar;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  Container,
  Dialog,
  Input,
  Sidebar
});
