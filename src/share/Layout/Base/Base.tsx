import classNames from "classnames";
import React, { useMemo } from "react";
import { Space, PositionValue, Layout, Flex } from "../utils/spacingTypes";
import { buildSpacing } from "../utils/space";

interface Props extends Space, PositionValue, Layout, Flex {
  /**
   * The regular CSS backgroud attribute for custom the background the div parent root element.
   */
  background?: string;
  /**
   * HTML width attribute for custom width the div parent root element.
   */
  width?: number | string;
  /**
   * HTML width attribute for custom height the div parent root element.
   */
  height?: number | string;
  /**
   * HTML class attribute for custom styling the div parent root element.
   */
  className?: string;
  /**
   * In line style attribute for custom styling the div parent root element.
   */
  style?: React.CSSProperties;
  /**
   * The regular React children prop.
   */
  children?: React.ReactNode;
  /**
   * The regular HTML element onClick function.
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * Wrapper component for apply spacing and layout.
 * 1. display
 * 2. overflow
 * 3. position
 * 4. z-index
 */
const Base = ({
  className,
  background,
  width,
  height,
  style,
  display,
  position,
  zIndex,
  onClick,
  children,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  gap,
  ...rest
}: Props) => {
  const spacing = useMemo<string>(
    () =>
      buildSpacing({
        "align-items": alignItems,
        "justify-content": justifyContent,
        ...rest,
      }),
    [rest, justifyContent, alignItems]
  );
  return (
    <div
      data-testid="base-layout"
      style={{ width, height, gap, background, ...style }}
      onClick={onClick}
      className={classNames(className, display, position, spacing, {
        [`flex-${flexWrap}`]: flexWrap,
        [`flex-${flexDirection}`]: flexDirection,
        [`z-${zIndex}`]: zIndex === 0 || zIndex,
      })}
    >
      {children}
    </div>
  );
};

export default Base;
