import React from "react";
import {
  Flex as FlexType,
  Layout,
  PositionValue,
  Space,
} from "../../UIElements/utils/spacingTypes";
import Base from "../Base/Base";

interface Props extends Space, PositionValue, Layout, FlexType {
  /**
   * The regular CSS backgroud attribute for custom the background the div parent root element.
   */
  background?: string;
  /**
   * The regular CSS layout display, the default set to flex.
   */
  display?: "flex" | "inline-flex";
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
 * Wrapper component for apply spacing and layout base on the flex/inline-flex flow.
 * 1. layout base on flex flow
 * 2. overflow
 * 3. position
 * 4. z-index
 */
const Flex = ({ display = "flex", children, ...rest }: Props) => {
  return (
    <Base display={display} {...rest}>
      {children}
    </Base>
  );
};

export default Flex;
