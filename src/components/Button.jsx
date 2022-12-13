import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, className}) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
