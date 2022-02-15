import { select, text } from "@storybook/addon-knobs";
import {
  FlexDirection,
  FlexWrap,
  AlignItems,
  JustifyContent,
  FlexDisplay,
} from "../../../Layout/utils/spacingTypes";
import {
  flexDirectionOptions,
  flexWrapOptions,
  flexOptions,
  alignItemsOptions,
  justifyContentOptions,
} from "../utils/baseUtils";

export const useFlex = () => {
  const flexDirection = select<FlexDirection | undefined>(
    "flex-direction",
    flexDirectionOptions,
    undefined
  );

  const flexWrap = select<FlexWrap | undefined>(
    "flex-wrap",
    flexWrapOptions,
    undefined
  );

  const alignItems = select<AlignItems | undefined>(
    "align-items",
    alignItemsOptions,
    undefined
  );

  const justifyContent = select<JustifyContent | undefined>(
    "justify-content",
    justifyContentOptions,
    undefined
  );

  const display = select<FlexDisplay | undefined>(
    "display",
    flexOptions,
    undefined
  );

  const gap = text("gap", "");

  return {
    display,
    flexDirection,
    flexWrap,
    alignItems,
    justifyContent,
    gap,
  };
};
