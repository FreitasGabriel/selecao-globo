import { useVotation } from "../../context/useVotation";
import { CandidatesProps } from "../../types/index";

import { Container } from "./styles";

export function CandidateOptions({ candidates }: CandidatesProps) {
  const { selectedCandidate, selectCandidateOptions } = useVotation();

  return (
    <Container>
      {candidates.map((candidate, idx) => (
        <div
          key={idx}
          className="container"
          data-testid="candidates-container__test"
        >
          <h1 className="candidate-name">{candidate.name}</h1>
          <label key={idx} className="option-container">
            <input
              hidden
              key={idx}
              className="radio-option"
              type="radio"
              value={candidate.id}
              checked={selectedCandidate === candidate.id}
              onChange={() => selectCandidateOptions(candidate.id)}
            />
            <div className="img">
              <img
                className={`${
                  candidate.id === 1 ? "first" : "second"
                }-candidate`}
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt=""
              />
            </div>
          </label>
          <p className="votation-info">
            Para eliminar o <strong>{candidate.name}</strong> pelo telefone
            disque <strong>0800-123-001</strong> ou mande um SMS para{" "}
            <strong>8001</strong>
          </p>
        </div>
      ))}
    </Container>
  );
}
