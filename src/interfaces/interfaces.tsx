import React from "react";
export interface ButtonProps {
  variant: "primary" | "secondary";
  content: string;
  size?: "sm" | "md";
  hasIcon?: boolean;
  icon?: React.ReactNode;
  as?: "button" | "link";
  linkTo?: string;
  target?: "_blank" | "_self";
  isCV?: boolean;
}
export interface CardProps {
  title: string;
  courseType: string;
  description: string;
  place: string;
  date: string;
}
export interface projectCardProps {
  title: string;
  description: string;
  icons: React.ReactNode;
  imagePath: string;
  deploy: string;
  repository: string;
}
