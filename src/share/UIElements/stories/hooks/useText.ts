import { select, boolean } from "@storybook/addon-knobs";
import { Variant, Type } from "../../Text/textTypes";
import { variantOptions, typeOptions } from "../utils/textUtils";

export const useText = () => {
  const variant = select<Variant>("variant", variantOptions, "T5");

  const type = select<Type>("type", typeOptions, "sub-title");

  const disabled = boolean("disabled", false);

  return {
    variant,
    type,
    disabled,
  };
};
