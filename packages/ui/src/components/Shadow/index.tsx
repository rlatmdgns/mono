import React from "react";
import { ShadowType } from "./Shadow.interface";
import { shadow } from "./styles.css";

interface ShadowProps {
  type?: ShadowType;
  children: React.ReactNode;
}

export const Shadow = ({ type = "shadowInner", children }: ShadowProps) => {
  return <div className={shadow({ type })}>{children}</div>;
};
