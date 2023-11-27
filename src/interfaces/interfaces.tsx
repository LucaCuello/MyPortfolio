import React from "react";
export interface ButtonProps {
  variant: "primary" | "secondary";
  content: string;
  size?: "sm" | "md";
  hasIcon?: boolean;
  icon?: React.ReactNode;
}
export interface CardProps {
  title: string;
  courseType: string;
  description: string;
  place: string;
  date: string;
}
