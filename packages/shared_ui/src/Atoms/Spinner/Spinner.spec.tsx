import { screen, render } from "@testing-library/react";
import { Spinner } from "./index";
import "@testing-library/jest-dom";

describe("Spinner", () => {
  it("renders", () => {
    render(<Spinner  />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
