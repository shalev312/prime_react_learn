import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Checking the Text component", () => {
  it("Check Text component and children is existing in the DOM", () => {
    render(<Text>Text Component</Text>);
    const textComponent = screen.getByTestId("text-ui-element");
    const textChildren = screen.getByText(/text component/i);
    expect(textComponent).toBeInTheDocument();
    expect(textChildren).toBeInTheDocument();
  });

  it("Check Text base props behaviour", () => {
    render(
      <Text
        variant="T2-s"
        type="title"
        className="name-of-class"
        style={{ background: "#333" }}
      >
        Text Component
      </Text>
    );
    const textComponent = screen.getByTestId("text-ui-element");
    expect(textComponent).toHaveClass("name-of-class");
    expect(textComponent).toHaveStyle(
      `background: #333;
       color: #2F3564;
       font-size: 24px;
       font-weight: 600;`
    );
  });
});
