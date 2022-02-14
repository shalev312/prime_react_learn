import React from "react";
import { ComponentMeta } from "@storybook/react";
import FlexComponent from "../share/Layout/Flex/Flex";
import { useSpace } from "./hooks/useSpace";
import { useLayout } from "./hooks/useLayout";
import { useBaseProps } from "./hooks/useBaseProps";
import { useFlex } from "./hooks/useFlex";

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
