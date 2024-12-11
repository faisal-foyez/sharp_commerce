import { screen, render } from "@testing-library/react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbDivider,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbPage
} from "../index";
import '@testing-library/jest-dom';
import {vi} from 'vitest';

vi.mock('@dsc/phosphor_icons', () => ({
  CaretRight: vi.fn(() => <div data-testid="caret-right" />),
  DotsThree: vi.fn(() => <div data-testid="dots-three" />)
}));

describe("Breadcrumb", () => {
  const renderBreadcrumb = (props?: any) => {
    return render(
      <Breadcrumb data-testid="breadcrumb" {...props}>
        <BreadcrumbList data-testid="breadcrumb-list">
          <BreadcrumbItem data-testid="breadcrumb-item">
            <BreadcrumbLink data-testid="breadcrumb-link-home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbDivider data-testid="breadcrumb-divider" />
          <BreadcrumbEllipsis data-testid="breadcrumb-ellipsis" />
          <BreadcrumbPage data-testid="breadcrumb-page">
            <BreadcrumbLink data-testid="breadcrumb-link-current-page">Current Page</BreadcrumbLink>
          </BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
    );
  };

  it("renders the Breadcrumb component", () => {
    renderBreadcrumb();
    render(<Breadcrumb />);
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();
    expect(screen.getByTestId("breadcrumb-item")).toBeInTheDocument();
    expect(screen.getByTestId("breadcrumb-link-home")).toBeInTheDocument();
    expect(screen.getByTestId("breadcrumb-divider")).toBeInTheDocument();
    expect(screen.getByTestId("breadcrumb-ellipsis")).toBeInTheDocument();
    expect(screen.getByTestId("breadcrumb-page")).toBeInTheDocument();
    expect(screen.getByTestId("breadcrumb-link-current-page")).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Current Page")).toBeInTheDocument();
  });

  it("should render the divider with icon", () => {
    renderBreadcrumb();
    expect(screen.getByTestId("breadcrumb-divider")).toBeInTheDocument();
    expect(screen.getByTestId("caret-right")).toBeInTheDocument();
  });
});