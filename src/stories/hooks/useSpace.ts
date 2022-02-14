import { select, color, text } from "@storybook/addon-knobs";
import { SpaceOptions } from "../../share/Layout/utils/spacingTypes";
import { spacingOptions } from "../utils/baseUtils";

export const useSpace = () => {
  const p = select<SpaceOptions | undefined>(
    "padding",
    spacingOptions,
    undefined
  );
  const pl = select<SpaceOptions | undefined>(
    "padding-left",
    spacingOptions,
    undefined
  );
  const pt = select<SpaceOptions | undefined>(
    "padding-top",
    spacingOptions,
    undefined
  );
  const pr = select<SpaceOptions | undefined>(
    "padding-right",
    spacingOptions,
    undefined
  );
  const pb = select<SpaceOptions | undefined>(
    "padding-bottom",
    spacingOptions,
    undefined
  );
  const px = select<SpaceOptions | undefined>(
    "padding-x",
    spacingOptions,
    undefined
  );
  const py = select<SpaceOptions | undefined>(
    "padding-y",
    spacingOptions,
    undefined
  );
  const m = select<SpaceOptions | undefined>(
    "margin",
    spacingOptions,
    undefined
  );
  const ml = select<SpaceOptions | undefined>(
    "margin-left",
    spacingOptions,
    undefined
  );
  const mt = select<SpaceOptions | undefined>(
    "margin-top",
    spacingOptions,
    undefined
  );
  const mr = select<SpaceOptions | undefined>(
    "margin-right",
    spacingOptions,
    undefined
  );
  const mb = select<SpaceOptions | undefined>(
    "margin-bottom",
    spacingOptions,
    undefined
  );
  const mx = select<SpaceOptions | undefined>(
    "margin-x",
    spacingOptions,
    undefined
  );
  const my = select<SpaceOptions | undefined>(
    "margin-y",
    spacingOptions,
    undefined
  );
  return {
    p,
    pl,
    pr,
    pt,
    pb,
    px,
    py,
    m,
    ml,
    mr,
    mt,
    mb,
    mx,
    my,
  };
};
