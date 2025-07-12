import React from "react";
import "./Button.css";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary", // 'primary', 'secondary', 'outline'
  size = "md",         // 'sm', 'md', 'lg'
  disabled = false,
  className = "",
}) { 
  const classNames = `btn ${variant} ${size} ${disabled ? "disabled" : ""} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
    >
      {children}
    </button>
  );
}

export default Button;
