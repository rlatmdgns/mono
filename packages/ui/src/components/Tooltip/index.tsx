"use client";

import { createPortal } from "react-dom";
import { ReactNode, useRef, useState } from "react";
import { iconStyle, tooltipStyle } from "./styles.css";
import { getContentSize, getTooltipDirection } from "./Tooltip.function";

interface TooltipProps {
  children: ReactNode;
  icon?: ReactNode;
  text?: string;
  direction?: "top" | "bottom" | "left" | "right";
  disabled?: boolean;
  isOverflow?: boolean;
  isLineThrough?: boolean;
}

/**
 * 툴팁 컴포넌트
 * React Portal : HTML id 가 tooltip인 요소가 있어야 정상 동작합니다.
 *
 * isOverflow : isOverflow : true일 경우, TooltipWrapper가 display:flex, width:95%로 설정됩니다. 이 때 tooltip이 정상적으로 동작하지 않을 경우, Tooltip의 부모 요소가 overflow:hidden이 있어야 합니다.
 */
export const Tooltip = ({
                          children,
                          icon,
                          text,
                          disabled,
                          direction = "top",
                          isOverflow = false,
                          isLineThrough = false,
                        }: TooltipProps) => {
  let tooltipDocument;
  if (typeof document !== "undefined") {
    tooltipDocument = document;
  }

  const element = tooltipDocument?.getElementById("tooltip") as HTMLElement;

  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  if (!text) {
    return null;
  }

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleOverflowMouseEnter = () => {
    if (!containerRef.current) return null;

    if (containerRef.current.parentElement) {
      setIsVisible(
        containerRef.current.clientWidth >=
        containerRef.current.parentElement?.clientWidth,
      );
    }
  };

  const handleMouseLeave = () => setIsVisible(false);

  const renderTooltip = () => {
    if (disabled) return null;
    if (!isVisible) return null;

    const size = getContentSize(text);
    const position = getTooltipDirection(containerRef.current, size, direction);

    const tooltipElement = (
      <div
        className={tooltipStyle({
          direction,
        })}
        ref={tooltipRef}
        style={{
          transform: `translateX(${position.left}px) translateY(${position.top}px)`,
          textDecoration: isLineThrough ? "line-through" : "normal",
        }}
      >
        {icon && <span className={iconStyle}>{icon}</span>}
        {text}
      </div>
    );
    return createPortal(tooltipElement, element);
  };

  return (
    <div>
      <div
        style={{
          display: isOverflow ? "flex" : "block",
          overflow: isOverflow ? "hidden" : "visible",
          whiteSpace: isOverflow ? "nowrap" : "normal",
          textOverflow: isOverflow ? "ellipsis" : "initial",
          width: isOverflow ? "95%" : "auto",
        }}
        ref={containerRef}
        onMouseEnter={isOverflow ? handleOverflowMouseEnter : handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {renderTooltip()}
      </div>
    </div>
  );
};
