// src/components/Button.tsx
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: clsx(baseStyles, variantStyles[variant], className),
      onClick,
      children
    }
  );
};
var Button_default = Button;

// src/components/Card.tsx
import clsx2 from "clsx";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = ({ children, className, size = "medium" }) => {
  const baseStyles = "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 dark:text-white";
  const sizeStyles = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg"
  };
  return /* @__PURE__ */ jsx2("div", { className: clsx2(baseStyles, sizeStyles[size], className), children });
};
var Card_default = Card;

// src/components/Input.tsx
import clsx3 from "clsx";
import { jsx as jsx3 } from "react/jsx-runtime";
var Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className
}) => {
  const baseStyles = "dark:text-white px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm";
  return /* @__PURE__ */ jsx3(
    "input",
    {
      type,
      value,
      onChange: (e) => onChange(e.target.value),
      placeholder,
      className: clsx3(baseStyles, className)
    }
  );
};
var Input_default = Input;

// src/components/Container.tsx
import clsx4 from "clsx";
import { jsx as jsx4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx4("div", { className: clsx4(baseStyles, paddingStyles[padding]), children });
};
var Container_default = Container;

// src/components/Dialog.tsx
import clsx5 from "clsx";
import { Info, AlertTriangle } from "lucide-react";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
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
    info: /* @__PURE__ */ jsx5(Info, { className: "w-5 h-5" }),
    warning: /* @__PURE__ */ jsx5(AlertTriangle, { className: "w-5 h-5" })
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx5(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity",
        isOpen ? "visible bg-black/50 opacity-100" : "invisible opacity-0"
      ),
      children: [
        /* @__PURE__ */ jsx5("div", { className: "absolute inset-0", onClick: onClose }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: clsx5(
              "relative bg-white dark:text-white  dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mx-4 transform transition-all",
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
              className
            ),
            children: [
              variant !== "default" && /* @__PURE__ */ jsxs(
                "div",
                {
                  className: clsx5(
                    "absolute -top-3 -left-3 flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium shadow",
                    badgeStyles[variant]
                  ),
                  children: [
                    badgeIcons[variant],
                    /* @__PURE__ */ jsx5("span", { className: "capitalize", children: variant })
                  ]
                }
              ),
              title && /* @__PURE__ */ jsx5("h2", { className: "text-xl font-bold mb-4", children: title }),
              /* @__PURE__ */ jsx5("div", { className: "mb-4", children }),
              /* @__PURE__ */ jsx5(
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
import clsx6 from "clsx";
import { jsx as jsx6 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx6(
    "aside",
    {
      className: clsx6(
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
export {
  Button_default as Button,
  Card_default as Card,
  Container_default as Container,
  Dialog_default as Dialog,
  Input_default as Input,
  Sidebar_default as Sidebar
};
