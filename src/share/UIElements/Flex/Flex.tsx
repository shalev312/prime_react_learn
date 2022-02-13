import React from "react";
import classNames from "classnames";
import Box from "../Box/Box";
import { buildSpacing } from "../utils/space";
import {
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Layout,
  PositionValue,
  Space,
} from "../utils/spacingTypes";

interface Props extends Space, PositionValue, Layout {
  /**
   * The regular CSS flex-direction attribute.
   * Choose one of the following inputs: 'row' | 'row-reverse' | 'column' | 'column-reverse'.
   */
  flexDirection?: FlexDirection;
  /**
   * The regular CSS flex-wrap attribute.
   * Choose one of the following inputs: 'wrap' | 'wrap-reverse' | 'nowrap'.
   */
  flexWrap?: FlexWrap;
  /**
   * The regular CSS align-items attribute.
   * Choose one of the following inputs: 'stretch' | 'start' | 'center' | 'end' | 'baseline'.
   */
  alignItems?: AlignItems;
  /**
   * The regular CSS justify-content attribute.
   * Choose one of the following inputs: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'.
   */
  justifyContent?: JustifyContent;
  /**
   * Choose one of the following inputs: 'flex' | 'inline-flex'.
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
const Flex = ({
  className,
  style,
  display = "flex",
  children,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  ...rest
}: Props) => {
  return (
    <Box {...rest}>
      <div
        style={{ width: "100%", height: "100%", ...style }}
        className={classNames(
          className,
          display,
          {
            [`flex-${flexWrap}`]: flexWrap,
            [`flex-${flexDirection}`]: flexDirection,
          },
          buildSpacing({
            "align-items": alignItems,
            "justify-content": justifyContent,
          })
        )}
      >
        {children}
      </div>
    </Box>
  );
};

export default Flex;
