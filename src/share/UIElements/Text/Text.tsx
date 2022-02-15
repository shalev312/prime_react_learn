import classNames from "classnames";
import React from "react";
import styled from "styled-components";
import { Type, Variant } from "./textTypes";
import { VARIANT } from "./textUtils";
import { COLORS } from "../../utils/colors";

interface Props {
  /**
   * The regular React children prop.
   */
  children: React.ReactNode;
  /**
   * The 'variant' prop effect at the CSS font-size and font-weight attribute.
   */
  variant?: Variant;
  /**
   * HTML class attribute for custom styling the root element.
   */
  className?: string;
  /**
   * The 'type' prop effect at the CSS color attribute.
   */
  type?: Type;
  /**
   * The 'disabled' prop effect at the CSS color attribute for the disabled configuration.
   */
  disabled?: boolean;
  /**
   * In line style attribute for custom styling the root element.
   */
  style?: React.CSSProperties;
}

const Root = styled.span<Props>`
  font-size: ${({ variant }) => variant && VARIANT[variant].fontSize};
  font-weight: ${({ variant }) => variant && VARIANT[variant].fontWeight};
  color: ${({ disabled, type }) =>
    !disabled && type ? COLORS.text[type] : COLORS.text.disabled};
`;

/**
 * Typography component for the text purposes.
 */
const Text = ({
  children,
  variant = "T5",
  type = "sub-title",
  ...rest
}: Props) => {
  return (
    <Root data-testid="text-ui-element" variant={variant} type={type} {...rest}>
      {children}
    </Root>
  );
};

export default Text;
