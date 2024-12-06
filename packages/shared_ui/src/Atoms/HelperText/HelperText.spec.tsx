import { render, screen } from "@testing-library/react";
import HelperText from "./HelperText";
import "@testing-library/jest-dom";

const renderHelperText = (props: any) => render(<HelperText {...props}>{props.children}</HelperText>);

describe("HelperText", () => {
  it("should render the component", () => {
    renderHelperText({ 'data-testid': "helper-text" });
    expect(screen.getByTestId("helper-text")).toBeInTheDocument();
  });

  it("should render the component with info icon", () => {
    renderHelperText({ isShowInfoIcon: true });
    expect(screen.getByTestId("info-icon")).toBeInTheDocument();
  });

  it("should render the component with children", () => {
    renderHelperText({ isShowInfoIcon: true, children: "Info" });
    expect(screen.getByText("Info")).toBeInTheDocument();
  });
});
