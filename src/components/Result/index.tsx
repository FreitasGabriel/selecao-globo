import { useEffect, useState } from "react";
import Countdown from "react-countdown";

import { getCandidate } from "../../services/candidate";
import { useVotation } from "../../context/useVotation";
import { CandidateProps } from "../../types/index";

import { PercentageBar } from "../PercentageBar/index";
import { CandidateImage } from "../CandidateImage/index";
import { LoadingSpinner } from "../LoadingSpinner";

import { Container, CountdownWrapper, SpinnerWrapper } from "./styles";

export function ResultPage() {
  const { selectedCandidate } = useVotation();
  const [candidate, setCandidate] = useState<CandidateProps>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCandidate(selectedCandidate).then((response) => {
      setCandidate(response.data.candidate);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    });
  }, []);

  return (
    <Container>
      {loading ? (
        <SpinnerWrapper>
          <LoadingSpinner />
        </SpinnerWrapper>
      ) : (
        <>
          <p className="result-text">
            <strong>Parabéns!</strong> Seu voto para{" "}
            <strong>{candidate?.name}</strong> foi enviado com sucesso.
          </p>

          <div className="candidates-img">
            <CandidateImage candidate="first-candidate" />

            <CountdownWrapper>
              <PercentageBar />
              <p className="text-countdown">FALTAM</p>
              <Countdown
                className="countdown"
                date={Date.now() + 1000000 * 48}
              />
              <p className="text-countdown">PARA ENCERRAR A VOTAÇÃO</p>
            </CountdownWrapper>

            <CandidateImage candidate="second-candidate" />
          </div>
        </>
      )}
    </Container>
  );
}
