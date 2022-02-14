import { render, screen, fireEvent } from "@testing-library/react";
import Base from "./Base";

describe("Checking the Base component", () => {
  it("Check Base component and children is existing in the DOM", () => {
    render(
      <Base>
        <h2>Base Component</h2>
      </Base>
    );
    const baseComponent = screen.getByTestId("base-layout");
    const baseChildren = screen.getByText(/base component/i);
    expect(baseComponent).toBeInTheDocument();
    expect(baseChildren).toBeInTheDocument();
  });

  it("Check Base base props behaviour", () => {
    const mockOnClickCallBack = jest.fn();
    render(
      <Base
        className="name-of-class"
        background="#333"
        width="100%"
        height="100%"
        style={{ color: "black" }}
        onClick={mockOnClickCallBack}
      >
        <h2>Base Component</h2>
      </Base>
    );
    const baseComponent = screen.getByTestId("base-layout");
    fireEvent.click(baseComponent);
    expect(mockOnClickCallBack.mock.calls.length).toEqual(1);
    expect(baseComponent).toHaveClass("name-of-class");
    expect(baseComponent).toHaveStyle(
      `background: #333;
       width: 100%;
       height: 100%; 
       color: black`
    );
  });

  it("Check Base spacing props in the DOM", () => {
    render(
      <Base
        p={0}
        pl={1}
        pr={2}
        pt={3}
        pb={4}
        py={5}
        px={6}
        m={0}
        ml={1}
        mr={2}
        mt={3}
        mb={4}
        my={5}
        mx="auto"
      >
        <h2>Base Component</h2>
      </Base>
    );
    const baseComponent = screen.getByTestId("base-layout");
    const paddingClasses = [
      "p-0",
      "pl-1",
      "pr-2",
      "pt-3",
      "pb-4",
      "py-5",
      "px-6",
    ];
    const marginClasses = [
      "m-0",
      "ml-1",
      "mr-2",
      "mt-3",
      "mb-4",
      "my-5",
      "mx-auto",
    ];
    expect(baseComponent).toHaveClass(...paddingClasses, ...marginClasses);
  });

  it("Check Base layout props in the DOM", () => {
    render(
      <Base
        display="hidden"
        position="fixed"
        zIndex={5}
        top={100}
        right={0}
        left={50}
        bottom="auto"
        overflow="hidden"
      >
        <h2>BaseComponent</h2>
      </Base>
    );
    const baseComponent = screen.getByTestId("base-layout");
    const layoutClasses = [
      "hidden",
      "fixed",
      "z-5",
      "top-100",
      "right-0",
      "left-50",
      "bottom-auto",
      "overflow-hidden",
    ];
    expect(baseComponent).toHaveClass(...layoutClasses);
  });

  it("Check Base flex flow props in the DOM", () => {
    render(
      <Base
        display="flex"
        flexDirection="row-reverse"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="between"
        gap="30px"
      >
        <h2>BaseComponent</h2>
      </Base>
    );
    const baseComponent = screen.getByTestId("base-layout");
    const layoutClasses = [
      "flex",
      "flex-row-reverse",
      "flex-wrap",
      "align-items-center",
      "justify-content-between",
    ];
    expect(baseComponent).toHaveClass(...layoutClasses);
    expect(baseComponent).toHaveStyle("gap: 30px");
  });
});
