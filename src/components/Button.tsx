import React from "react";
import clsx from "clsx";


type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  className?: string;
  color?: "purple" | "blue" | "green" | "red" | "yellow" | "gray";
};


 const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none shadow-sm";
  const variantStyles = {
    primary: `bg-purple-500 text-white hover:bg-purple-600 transition-all ease-in-out`,
    secondary: `bg-gray-500 text-white hover:bg-gray-600 transition-all ease-in-out`,
    danger: `bg-red-500 text-white hover:bg-red-600 transition-all ease-in-out`,
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;