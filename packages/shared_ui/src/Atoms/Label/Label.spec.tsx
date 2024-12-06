import { render, screen } from "@testing-library/react";
import Label from "./Label";
import "@testing-library/jest-dom";

describe("Label", () => {
  const renderLabel = (props?: any) => render(<Label data-testid="label" {...props}>Label</Label>);

  it("should render the label", () => {
    renderLabel();
    expect(screen.getByTestId("label")).toBeInTheDocument();
  });

  it("should render the label with optional text", () => {
    renderLabel({ isShowOptional: true });
    expect(screen.getByTestId("label").querySelector(".optional-text")).toBeInTheDocument();
  });

  it("should render the label with badge", () => {
    renderLabel({ isShowBadge: true });
    expect(screen.getByTestId("label").querySelector(".badge")).toBeInTheDocument();
  });

  it("should render the label with required text", () => {
    renderLabel({ isShowRequired: true });
    expect(screen.getByTestId("label").querySelector(".required-text")).toBeInTheDocument();
  });

  it("should render the label with info icon", () => {
    renderLabel({ isShowInfoIcon: true });
    expect(screen.getByTestId("label").querySelector(".label-info")).toBeInTheDocument();
  });

  it("should not show info text when infoText provided but isShowInfoIcon is false", () => {
    renderLabel({ isShowInfoIcon: false, infoText: "Info Text" });
    expect(screen.getByTestId("label").querySelector(".label-info-text")).not.toBeInTheDocument();
  });

  it("should not render the label with info text when infoText is not provided and isShowInfoIcon is true", () => {
    renderLabel({ isShowInfoIcon: true });
    expect(screen.getByTestId("label").querySelector(".label-info-text")).not.toBeInTheDocument();
  });

  it("should render the label with info text when infoText provided and isShowInfoIcon is true", () => {
    renderLabel({ isShowInfoIcon: true, infoText: "Info Text" });
    expect(screen.getByTestId("label").querySelector(".label-info-text")).toBeInTheDocument();
  });
});
