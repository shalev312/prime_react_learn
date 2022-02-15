import { color, text } from "@storybook/addon-knobs";

export const useBaseProps = () => {
  const width = text("width", "");
  const height = text("height", "");
  const background = color("background", "none");
  return {
    width,
    height,
    background,
  };
};
