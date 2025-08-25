import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
   bgVariant?: "light" | "dark"; // NEW: background variant
};

const Card: React.FC<CardProps> = ({ children, className, size = "medium" }) => {
  const baseStyles = "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 dark:text-white";
  const sizeStyles = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg",
  };
  return (
    <div className={clsx(baseStyles, sizeStyles[size], className)}>
      {children}
    </div>
  );
};

export default Card;