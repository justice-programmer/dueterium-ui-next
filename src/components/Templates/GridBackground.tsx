// grid background with a customizable color and opacity
import React from "react";
import clsx from "clsx";
type GridBackgroundProps = {
  color?: "gray" | "blue" | "red" | "green"; // extendable to more colors
  className?: string;
  children?: React.ReactNode; // optional children for additional content
};

const GridBackground: React.FC<GridBackgroundProps> = ({
  color = "gray",

  className,
  children
}) => {
  const baseStyles = "absolute inset-0 bg-grid-pattern";
  const colorStyles = {
    gray: `bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path d="M 100 0 L 0 0 L 0 100" stroke="gray" stroke-width="1"/></svg>')]`,
    blue: `bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path d="M 100 0 L 0 0 L 0 100" stroke="blue" stroke-width="1"/></svg>')]`,
    red: `bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path d="M 100 0 L 0 0 L 0 100" stroke="red" stroke-width="1"/></svg>')]`,
    green: `bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><path d="M 100 0 L 0 0 L 0 100" stroke="green" stroke-width="1"/></svg>')]`,
    // add more colors as needed
  };

  return (
    <div
      className={clsx(baseStyles, colorStyles[color], className)}
    >
        {children}
    </div>
  );
};

export default GridBackground;