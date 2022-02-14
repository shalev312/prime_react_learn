import { Range } from "../../utils/types";
export interface Space {
  p?: SpaceOptions;
  pl?: SpaceOptions;
  pr?: SpaceOptions;
  pt?: SpaceOptions;
  pb?: SpaceOptions;
  py?: SpaceOptions;
  px?: SpaceOptions;
  m?: SpaceOptions;
  ml?: SpaceOptions;
  mr?: SpaceOptions;
  mt?: SpaceOptions;
  mb?: SpaceOptions;
  my?: SpaceOptions;
  mx?: SpaceOptions;
}
/**
 * The regular CSS display attribute.
 * Choose one of the following inputs: 'hidden' | 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex'.
 */
export type Display =
  | "hidden"
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex";
/**
 * The regular CSS display attribute limited to flex flow display.
 * Choose one of the following inputs: 'hidden' | 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex'.
 */
export type FlexDisplay = "flex" | "inline-flex";
/**
 * The regular CSS overflow attribute.
 * Choose one of the following inputs: 'auto' | 'hidden' | 'visible' | 'scroll' | 'x-auto' | 'x-hidden' | 'x-visible' | 'x-scroll' | 'y-auto'.
 */
export type Overflow =
  | "auto"
  | "hidden"
  | "visible"
  | "scroll"
  | "x-auto"
  | "x-hidden"
  | "x-visible"
  | "x-scroll"
  | "y-auto";
/**
 * The regular CSS z-index attribute.
 * Choose one of the following inputs: number | 'auto'.
 */
export type Position = "static" | "fixed" | "relative" | "absolute" | "sticky";
export interface PositionValue {
  /**
   * The regular CSS top attribute.
   * Choose one of the following inputs: 0 | 50 | 100 | "auto"
   */
  top?: PositionValueOptions | "auto";
  /**
   * The regular CSS right attribute.
   * Choose one of the following inputs: 0 | 50 | 100 | "auto"
   */
  right?: PositionValueOptions | "auto";
  /**
   * The regular CSS left attribute.
   * Choose one of the following inputs: 0 | 50 | 100 | "auto"
   */
  left?: PositionValueOptions | "auto";
  /**
   * The regular CSS bottom attribute.
   * Choose one of the following inputs: 0 | 50 | 100 | "auto"
   */
  bottom?: PositionValueOptions | "auto";
}
/**
 * The regular CSS z-index attribute.
 * Choose one of the following inputs: number | 'auto'.
 */
export type ZIndex = Range<6> | "auto";

export type SpaceOptions = Range<9> | "auto";
export type PositionValueOptions = 0 | 50 | 100 | "auto";

export interface Layout {
  /**
   * The regular CSS display attribute.
   * Choose one of the following inputs: 'hidden' | 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex'.
   */
  display?: Display;
  /**
   * The regular CSS overflow attribute.
   * Choose one of the following inputs: 'auto' | 'hidden' | 'visible' | 'scroll' | 'x-auto' | 'x-hidden' | 'x-visible' | 'x-scroll' | 'y-auto'.
   */
  overflow?: Overflow;
  /**
   * The regular CSS position attribute.
   * Choose one of the following inputs: 'static' | 'fixed' | 'relative' | 'absolute' | 'sticky'.
   */
  position?: Position;
  /**
   * The regular CSS z-index attribute.
   * Choose one of the following inputs: number | 'auto'.
   */
  zIndex?: ZIndex;
}
/**
 * The regular CSS flex-direction attribute.
 * Choose one of the following inputs: 'row' | 'row-reverse' | 'column' | 'column-reverse'.
 */
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
/**
 * The regular CSS flex-wrap attribute.
 * Choose one of the following inputs: 'wrap' | 'wrap-reverse' | 'nowrap'.
 */
export type FlexWrap = "wrap" | "wrap-reverse" | "nowrap";
/**
 * The regular CSS justify-content attribute.
 * Choose one of the following inputs: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'.
 */
export type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";
/**
 * The regular CSS align-items attribute.
 * Choose one of the following inputs: 'stretch' | 'start' | 'center' | 'end' | 'baseline'.
 */
export type AlignItems = "stretch" | "start" | "center" | "end" | "baseline";

export interface Flex {
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
   * The regular CSS gap attribute.
   */
  gap?: string;
}
