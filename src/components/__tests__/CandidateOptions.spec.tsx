import { render, screen } from "@testing-library/react";
import { candidates } from "../__mocks__/candidates";
import { CandidateOptions } from "../CandidateOptions/index";

describe("Candidate Options", () => {
  it("Renders correctily", () => {
    render(<CandidateOptions candidates={candidates} />);

    expect(screen.getAllByTestId("candidates-container__test"));
  });
});
