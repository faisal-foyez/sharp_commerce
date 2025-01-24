import { render, screen } from "@testing-library/react";
import Badge from "./Badge";
import "@testing-library/jest-dom";
import { BadgeColor, BadgeSize, BadgeStyle } from "@dsc/foundation/lib";
import { Info } from '@dsc/phosphor_icons';

type BadgeColorType = keyof typeof BadgeColor;
type BadgeSizeType = keyof typeof BadgeSize;
type BadgeStyleType = keyof typeof BadgeStyle;

const renderBadge = (props: any) => {
  render(<Badge {...props}>Badge</Badge>);
  return screen.getByText("Badge");
};

describe("Badge", () => {
  it("should render the component", () => {
    const badgeElement = renderBadge({});
    expect(badgeElement).toBeInTheDocument();
  });

  it.each([
    "blue", 
    "gray", 
    "green", 
    "yellow", 
    "red"
  ])("should render the badge with color %s", (color) => {
    const badgeElement = renderBadge({ colorVariant: color as BadgeColorType });
    expect(badgeElement).toHaveClass(`badge-${color}`);
  });  

  it.each([
    "small", 
    "medium", 
    "large"
  ])("should render the badge with size %s", (size) => {
    const badgeElement = renderBadge({ sizeVariant: size as BadgeSizeType });
    expect(badgeElement).toHaveClass(`badge-${size}`);
  });

  it.each([
    "light",
    "outline",
    "fill"
  ])("should render the badge with style %s", (style) => {
    const badgeElement = renderBadge({ styleVariant: style as BadgeStyleType });
    expect(badgeElement).toHaveClass(`badge-${style}`);
  });

  it("should render the badge with disabled", () => {
    const badgeElement = renderBadge({ disabled: true });
    expect(badgeElement).toHaveClass("badge-disabled");
  });

  it("should render the badge with isShowDot", () => {
    renderBadge({ isShowDot: true });
    const dotElement = screen.getByText("Badge").querySelector(".badge-dot");
    expect(dotElement).toBeInTheDocument();
  });

  it("should render the badge with leftIcon", () => {
    renderBadge({ leftIcon: <Info /> });
    const iconElement = screen.getByText("Badge").querySelector(".badge-left-icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("should render the badge with rightIcon", () => {
    renderBadge({ rightIcon: <Info /> });
    const iconElement = screen.getByText("Badge").querySelector(".badge-right-icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("should render the badge with badgeLogo", () => {
    renderBadge({ badgeLogo: <Info /> });
    const logoElement = screen.getByText("Badge").querySelector(".badge-logo");
    expect(logoElement).toBeInTheDocument();
  });
});