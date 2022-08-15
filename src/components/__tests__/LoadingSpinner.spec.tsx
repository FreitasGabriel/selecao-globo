import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "../LoadingSpinner/index";

describe("Loading Spinner", () => {
  it("render spinner correctily", () => {
    render(<LoadingSpinner />);

    expect(screen.getAllByTestId("spinner__test"));
  });
});
