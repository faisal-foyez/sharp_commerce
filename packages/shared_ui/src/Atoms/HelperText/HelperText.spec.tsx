import { render, screen } from "@testing-library/react";
import HelperText from "./HelperText";
import "@testing-library/jest-dom";
describe("HelperText", () => {
  it("should render the component", () => {
    render(<HelperText data-testid="helper-text">Info that helps a user with this field.</HelperText>);
    expect(screen.getByTestId("helper-text")).toBeInTheDocument();
  });

  it("should render the component with info icon", () => {
    render(<HelperText isShowInfoIcon={true}>Info that helps a user with this field.</HelperText>);
    expect(screen.getByTestId("info-icon")).toBeInTheDocument();
  });

  it("should render the component with children", () => {
    render(<HelperText isShowInfoIcon={true}>Info</HelperText>);
    expect(screen.getByText("Info")).toBeInTheDocument();
  });
});
