import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={`border rounded-lg p-4 shadow ${className}`}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};
