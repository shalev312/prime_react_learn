import React from "react";
import { ComponentMeta } from "@storybook/react";
import BoxComponent from "../share/Layout/Box/Box";
import { useSpace } from "./hooks/useSpace";
import { useLayout } from "./hooks/useLayout";
import { useBaseProps } from "./hooks/useBaseProps";

export default {
  title: "Layout/Box",
  component: BoxComponent,
} as ComponentMeta<typeof BoxComponent>;

export const Box = () => {
  const spaces = useSpace();
  const layouts = useLayout();
  const baseProps = useBaseProps();
  return (
    <BoxComponent {...spaces} {...layouts} {...baseProps}>
      <h2>Box Component</h2>
    </BoxComponent>
  );
};
