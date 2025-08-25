import React from "react";
import clsx from "clsx";
import { Info, AlertTriangle } from "lucide-react"; // using lucide-react icons

type DialogVariant = "default" | "info" | "warning";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: DialogVariant; // NEW: choose badge style
  bgVariant?: "light" | "dark"; // NEW: background variant
}; 

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  variant = "default",
}) => {
  const badgeStyles = {
    default: "",
    info: "bg-blue-100 text-blue-600",
    warning: "bg-yellow-100 text-yellow-700",
  };

  const badgeIcons = {
    default: null,
    info: <Info className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity",
        isOpen ? "visible bg-black/50 opacity-100" : "invisible opacity-0"
      )}
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className={clsx(
            "relative bg-white dark:text-white  dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mx-4 transform transition-all",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
          className
        )}
      >
        {/* Badge in top-left */}
        {variant !== "default" && (
          <div
            className={clsx(
              "absolute -top-3 -left-3 flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium shadow",
              badgeStyles[variant]
            )}
          >
            {badgeIcons[variant]}
            <span className="capitalize">{variant}</span>
          </div>
        )}

        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div className="mb-4">{children}</div>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-all ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialog;
