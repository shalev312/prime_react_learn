import { Range } from '../../utils/types';
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
export type Display = 'hidden' | 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex';
/**
 * The regular CSS overflow attribute.
 * Choose one of the following inputs: 'auto' | 'hidden' | 'visible' | 'scroll' | 'x-auto' | 'x-hidden' | 'x-visible' | 'x-scroll' | 'y-auto'.
 */
export type Overflow = 'auto' | 'hidden' | 'visible' | 'scroll' | 'x-auto' | 'x-hidden' | 'x-visible' | 'x-scroll' | 'y-auto';
/**
 * The regular CSS z-index attribute.
 * Choose one of the following inputs: number | 'auto'.
 */
export type Position = 'static' | 'fixed' | 'relative' | 'absolute' | 'sticky';
export interface PositionValue {
    top?: PositionValueOptions | 'auto';
    right?: PositionValueOptions | 'auto';
    left?: PositionValueOptions | 'auto';
    bottom?: PositionValueOptions | 'auto';
}
/**
 * The regular CSS z-index attribute.
 * Choose one of the following inputs: number | 'auto'.
 */
export type ZIndex = Range<6> | 'auto';

type SpaceOptions = Range<9> | 'auto'
type PositionValueOptions = 0 | 50 | 100 | 'auto'

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
   export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
     /**
      * The regular CSS flex-wrap attribute.
   * Choose one of the following inputs: 'wrap' | 'wrap-reverse' | 'nowrap'.
   */
   export type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap'
     /**
      * The regular CSS justify-content attribute.
   * Choose one of the following inputs: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'.
   */
   export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
     /**
      * The regular CSS align-items attribute.
   * Choose one of the following inputs: 'stretch' | 'start' | 'center' | 'end' | 'baseline'.
   */
   export type AlignItems = 'stretch' | 'start' | 'center' | 'end' | 'baseline';