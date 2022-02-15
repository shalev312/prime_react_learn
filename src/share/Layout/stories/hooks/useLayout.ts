import { select } from "@storybook/addon-knobs";
import {
  Display,
  Overflow,
  Position,
  PositionValueOptions,
  ZIndex,
} from "../../../Layout/utils/spacingTypes";
import {
  displayOptions,
  overflowOptions,
  positionOptions,
  positionValueOptions,
  zIndexOption,
} from "../utils/baseUtils";

export const useLayout = () => {
  const position = select<Position | undefined>(
    "position",
    positionOptions,
    undefined
  );

  const top = select<PositionValueOptions | undefined>(
    "top",
    positionValueOptions,
    undefined
  );

  const bottom = select<PositionValueOptions | undefined>(
    "bottom",
    positionValueOptions,
    undefined
  );

  const left = select<PositionValueOptions | undefined>(
    "left",
    positionValueOptions,
    undefined
  );

  const right = select<PositionValueOptions | undefined>(
    "right",
    positionValueOptions,
    undefined
  );

  const overflow = select<Overflow | undefined>(
    "right",
    overflowOptions,
    undefined
  );

  const zIndex = select<ZIndex | undefined>("z-index", zIndexOption, undefined);

  const display = select<Display | undefined>(
    "display",
    displayOptions,
    undefined
  );
  return {
    position,
    top,
    bottom,
    right,
    left,
    overflow,
    zIndex,
    display,
  };
};
