import React from "react";
import clsx from "clsx";
type InputProps = {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "password" | "email";
  className?: string;
};

const Input : React.FC<InputProps> = ({
  value,
    onChange,
    placeholder = "",
    type = "text",
    className,
}) => {
  const baseStyles = "dark:text-white px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm";
  
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={clsx(baseStyles, className)}
    />
  );
}

export default Input;