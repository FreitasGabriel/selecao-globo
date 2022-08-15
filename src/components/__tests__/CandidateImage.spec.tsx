import { render, screen } from "@testing-library/react";
import { CandidateImage } from "../CandidateImage/index";

describe("Candidate Image", () => {
  it("Renders correctily first candidate", () => {
    render(<CandidateImage candidate="first-candidate" />);

    expect(screen.getAllByTestId("candidate-img__test"));
  });

  it("Renders correctily second candidate", () => {
    render(<CandidateImage candidate="second-candidate" />);

    expect(screen.getAllByTestId("candidate-img__test"));
  });
});
