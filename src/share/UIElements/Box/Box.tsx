import classNames from "classnames";
import React, { useMemo } from "react";
import { Space, PositionValue, Layout } from "../utils/spacingTypes";
import { buildSpacing } from "../utils/space";

interface Props extends Space, PositionValue, Layout {
  /**
   * HTML width attribute for custom width the div parent root element.
   * The default is 100%
   */
  width?: number | string;
  /**
   * HTML width attribute for custom height the div parent root element.
   * The default is 100%
   */
  height?: number | string;
  /**
   * HTML class attribute for custom styling the div parent root element.
   */
  className?: string;
  /**
   * In line style attribute for custom styling the div parent root element.
   */
  style?: React.CSSProperties | undefined;
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
const Box = ({
  className,
  width = "100%",
  height = "100%",
  style,
  display,
  position,
  zIndex,
  onClick,
  children,
  ...rest
}: Props) => {
  const spacing = useMemo<string>(() => buildSpacing(rest), [rest]);
  return (
    <div
      style={{ width, height, ...style }}
      onClick={onClick}
      className={classNames(className, display, position, spacing, {
        [`z-${zIndex}`]: zIndex === 0 || zIndex,
      })}
    >
      {children}
    </div>
  );
};

export default Box;
