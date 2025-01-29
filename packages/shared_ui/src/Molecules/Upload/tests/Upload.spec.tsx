import { render, screen } from "@testing-library/react";
import { Upload } from "../Upload";
import '@testing-library/jest-dom';

describe("Upload", () => {
  it("should render", () => {
    render(<Upload data-testid="upload" />);
    expect(screen.getByTestId("upload")).toBeInTheDocument();
  });
});
