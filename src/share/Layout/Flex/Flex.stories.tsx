import React from "react";
import { ComponentMeta } from "@storybook/react";
import FlexComponent from "./Flex";
import { useSpace } from "../stories/hooks/useSpace";
import { useLayout } from "../stories/hooks/useLayout";
import { useBaseProps } from "../stories/hooks/useBaseProps";
import { useFlex } from "../stories/hooks/useFlex";

export default {
  title: "Layout/Flex",
  component: FlexComponent,
} as ComponentMeta<typeof FlexComponent>;

export const Flex = () => {
  const spaces = useSpace();
  const layouts = useLayout();
  const baseProps = useBaseProps();
  const flex = useFlex();
  return (
    <FlexComponent {...spaces} {...layouts} {...baseProps} {...flex}>
      <h2>Flex Component</h2>
    </FlexComponent>
  );
};
