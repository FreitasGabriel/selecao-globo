import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { useVotation } from "../../context/useVotation";
import { CandidateOptions } from "../../components/CandidateOptions/index";

import { submitVote } from "../../services/votes";

import { CandidatesProps } from "../../types";

import { Container, VoteButton, ReCaptchaValidator } from "./styles";

export function VotationPage({ candidates }: CandidatesProps) {
  const { selectedCandidate, changeVotationPageModal } = useVotation();
  const [recaptchaValidate, setRecaptchaValidate] = useState(false);

  const handleSubmitVote = async (candidateID: number) => {
    const status = await submitVote(candidateID);

    if (status === 201) changeVotationPageModal(false);
  };

  return (
    <Container>
      <CandidateOptions candidates={candidates} />

      {selectedCandidate !== 0 && (
        <ReCaptchaValidator>
          <ReCAPTCHA
            sitekey="6LdiT-8aAAAAAM1XPSblmf-1hpK4TzNGPBZ3-SLP"
            onChange={() => setRecaptchaValidate(true)}
          />
        </ReCaptchaValidator>
      )}

      <div className="button-container">
        <VoteButton
          type="submit"
          onClick={() => handleSubmitVote(selectedCandidate)}
          disabled={recaptchaValidate ? false : true}
        >
          Envie seu voto agora
        </VoteButton>
      </div>
    </Container>
  );
}
