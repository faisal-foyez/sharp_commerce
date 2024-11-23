import { render, screen } from "@testing-library/react";
import Badge from "./Badge";
import "@testing-library/jest-dom";
import { BadgeColor, BadgeSize, BadgeStyle } from "@dsc/foundation/lib";
import { Info } from '@dsc/phosphor_icons';

type BadgeColorType = keyof typeof BadgeColor;
type BadgeSizeType = keyof typeof BadgeSize;
type BadgeStyleType = keyof typeof BadgeStyle;

describe("Badge", () => {
  it("should render the component", () => {
    render(<Badge >Badge</Badge>);
    expect(screen.getByText("Badge")).toBeInTheDocument();
  });

  it.each([
    "blue", 
    "gray", 
    "green", 
    "yellow", 
    "red"
  ])("should render the badge with color %s", (color) => {
    render(<Badge color={color as BadgeColorType}>Badge</Badge>);
    const badgeElement = screen.getByText("Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(`badge-${color}`);
  });  

  it.each([
    "small", 
    "medium", 
    "large"
  ])("should render the badge with size %s", (size) => {
    render(<Badge size={size as BadgeSizeType}>Badge</Badge>);
    const badgeElement = screen.getByText("Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(`badge-${size}`);
  });

  it.each([
    "light",
    "outline",
    "fill"
  ])("should render the badge with style %s", (style)=>{
    render(<Badge style={style as BadgeStyleType}>Badge</Badge>)
    const badgeElement = screen.getByText("Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(`badge-${style}`);
  })

  it("should render the badge with disabled", () => {
    render(<Badge disabled={true}>Badge</Badge>);
    const badgeElement = screen.getByText("Badge");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("badge-disabled");
  });

  it("should render the badge with isShowDot", () => {
    render(<Badge isShowDot={true}>Badge</Badge>);
    const badgeElement = screen.getByText("Badge").querySelector(".badge-dot");
    expect(badgeElement).toBeInTheDocument();
  });

  it("should render the badge with leftIcon", () => {
    render(<Badge leftIcon={<Info />}>Badge</Badge>);
    const badgeElement = screen.getByText("Badge").querySelector(".badge-left-icon");
    expect(badgeElement).toBeInTheDocument();
  });

  it("should render the badge with rightIcon", () => {
    render(<Badge rightIcon={<Info />}>Badge</Badge>);
    const badgeElement = screen.getByText("Badge").querySelector(".badge-right-icon");
    expect(badgeElement).toBeInTheDocument();
  });

  it("should render the badge with badgeLogo", () => {
    render(<Badge badgeLogo={<Info />}>Badge</Badge>);
    const badgeElement = screen.getByText("Badge").querySelector(".badge-logo");
    expect(badgeElement).toBeInTheDocument();
  });
});