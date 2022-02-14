import React from "react";
import { Space, PositionValue, Layout } from "../utils/spacingTypes";
import Base from "../Base/Base";

interface Props extends Space, PositionValue, Layout {
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
  style?: React.CSSProperties | undefined;
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
const Box = ({ children, ...rest }: Props) => {
  return <Base {...rest}>{children}</Base>;
};

export default Box;
