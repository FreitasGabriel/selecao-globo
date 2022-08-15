import { render, screen } from "@testing-library/react";
import { PercentageBar } from "../PercentageBar/index";

describe("Loading Spinner", () => {
  it("render spinner correctily", () => {
    render(<PercentageBar />);

    expect(screen.getAllByTestId("percentage__test"));
  });
});
