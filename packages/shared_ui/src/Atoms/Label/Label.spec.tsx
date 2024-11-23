import { render, screen } from "@testing-library/react";
import Label from "./Label";
import "@testing-library/jest-dom";

describe("Label", () => {
  it("should render the label", () => {
    render(<Label data-testid="label">Label</Label>);
    const labelElement = screen.getByTestId("label");
    expect(labelElement).toBeInTheDocument();
  });

  it("should render the label with optional text", () => {
    render(<Label data-testid="label" isShowOptional>Label</Label>);
    const optionalTextElement = screen.getByTestId("label").querySelector(".optional-text");
    expect(optionalTextElement).toBeInTheDocument();
  });

  it("should render the label with badge", () => {
    render(<Label data-testid="label" isShowBadge>Label</Label>);
    const badgeElement = screen.getByTestId("label").querySelector(".badge");
    expect(badgeElement).toBeInTheDocument();
  });

  it("should render the label with required text", () => {
    render(<Label data-testid="label" isShowRequired>Label</Label>);
    const requiredTextElement = screen.getByTestId("label").querySelector(".required-text");
    expect(requiredTextElement).toBeInTheDocument();
  });

  it("should render the label with info icon", () => {
    render(<Label data-testid="label" isShowInfoIcon={true}>Label</Label>);
    const infoIconElement = screen.getByTestId("label").querySelector(".label-info");
    expect(infoIconElement).toBeInTheDocument();
  });

  it("should not show info text when infoText provided but isShowInfoIcon is false", () => {
    render(<Label data-testid="label" isShowInfoIcon={false} infoText="Info Text">Label</Label>);
    const infoTextElement = screen.getByTestId("label").querySelector(".label-info-text");
    expect(infoTextElement).not.toBeInTheDocument();
  });

  it("should not render the label with info text when infoText is not provided and isShowInfoIcon is true", () => {
    render(<Label data-testid="label" isShowInfoIcon={true}>Label</Label>);
    const infoTextElement = screen.getByTestId("label").querySelector(".label-info-text");
    expect(infoTextElement).not.toBeInTheDocument();
  });

  it("should render the label with info text when infoText provided and isShowInfoIcon is true", () => {
    render(<Label data-testid="label" isShowInfoIcon={true} infoText="Info Text">Label</Label>);
    const infoTextElement = screen.getByTestId("label").querySelector(".label-info-text");
    expect(infoTextElement).toBeInTheDocument();
  });
});
