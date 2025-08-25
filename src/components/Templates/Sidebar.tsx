import React from "react";
import clsx from "clsx";

type SidebarProps = {
  children: React.ReactNode;
  width?: "narrow" | "medium" | "wide";
  bgVariant?: "light" | "dark";
  className?: string;
  attach?: boolean; // NEW: controls attached vs detached
};

const Sidebar: React.FC<SidebarProps> = ({
  children,
  width = "medium",
  bgVariant = "light",
  className,
  attach = true, // default: attached
}) => {
  const widthStyles = {
    narrow: "w-48",
    medium: "w-64",
    wide: "w-80",
  };

  const bgStyles = {
    light: "bg-white dark:bg-gray-100 border-gray-200",
    dark: "bg-gray-800 dark:bg-gray-900 text-white border-gray-700",
  };

  const attachedStyles =
    "fixed left-0 top-0 h-screen min-h-screen p-4 border-r-2 rounded-tr-2xl rounded-br-2xl";
  const detachedStyles =
    "fixed top-6 left-6 h-[90vh] p-4 border-2 rounded-2xl shadow-lg"; 
  // detached = floating box, inset from edges

  return (
    <aside
      className={clsx(
        attach ? attachedStyles : detachedStyles,
        widthStyles[width],
        bgStyles[bgVariant],
        className
      )}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
