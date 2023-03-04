import React from "react";

interface TriangleProps {
  size: number;
  color: string;
  onClick?: () => void;
}

const Triangle: React.FC<TriangleProps> = ({ size, color, onClick }) => {
  const triangleStyles = {
    width: 0,
    height: 0,
    borderTop: `${size}px solid transparent`,
    borderBottom: `${size}px solid transparent`,
    borderRight: `${size}px solid ${color}`,
    cursor: onClick ? "pointer" : "auto",
  };

  return (
    <div style={triangleStyles} onClick={onClick}>
      &nbsp;
    </div>
  );
};

export default Triangle;