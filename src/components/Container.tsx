import React from "react";
import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  padding?: "none" | "small" | "medium" | "large";
};

const Container: React.FC<ContainerProps> = ({
  children,
  padding = "medium",
}) => {
    // horizontal centering with auto margins and equal spacing  
    const baseStyles = "mx-auto max-w-7xl space-y-4 space-x-4 flex flex-col flex-row";
  const paddingStyles = {
    none: "p-0",
    small: "p-2",
    medium: "p-4",
    large: "p-8",
  };
  return (
    <div className={clsx(baseStyles, paddingStyles[padding])}>
      {children}
    </div>
  );
};

export default Container;