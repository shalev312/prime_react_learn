import React from "react";
import { ComponentMeta } from "@storybook/react";
import TextComponent from "./Text";
import { useText } from "../stories/hooks/useText";

export default {
  title: "UIElement/Text",
  component: TextComponent,
} as ComponentMeta<typeof TextComponent>;
export const Text = () => {
  const textProps = useText();
  return <TextComponent {...textProps}>Text Component</TextComponent>;
};
