import React from "react";
export interface ButtonProps {
  variant: "primary" | "secondary";
  content: string;
  hasIcon?: boolean;
  icon?: React.ReactNode;
}
