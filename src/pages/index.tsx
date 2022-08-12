import axios from "axios";
import { GetServerSideProps } from "next";

import { VotationModal } from "../components/VotationModal/index";
import { VotationPage } from "../components/Votation/index";
import { ResultPage } from "../components/Result/index";
import { CandidateImage } from "../components/CandidateImage/index";

import { useVotation } from "../context/useVotation";

import { CandidatesProps, Votation } from "../types/index";

import {
  Button,
  HeaderTitle,
  Wrapper,
  ImagesWrapper,
  Container,
  ButtonWrapper,
} from "./styles";

export default function Home({ candidates }: CandidatesProps) {
  const { changeModalState, modalIsOpen, votationPageModal } = useVotation();

  return (
    <Container>
      <HeaderTitle>BIG BROTHER BRASIL</HeaderTitle>

      <Wrapper>
        <h2>Quem deve sair?</h2>
        <ImagesWrapper>
          <CandidateImage candidate="first-candidate" />
          <CandidateImage candidate="second-candidate" />
        </ImagesWrapper>

        <ButtonWrapper>
          <Button
            onClick={() => {
              changeModalState(true);
            }}
          >
            VOTE
          </Button>
        </ButtonWrapper>

        <VotationModal
          isOpen={modalIsOpen}
          onClose={() => changeModalState(false)}
        >
          {votationPageModal ? (
            <VotationPage candidates={candidates} />
          ) : (
            <ResultPage />
          )}
        </VotationModal>
      </Wrapper>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const votationResponse = await axios.get<Votation>(
    "http://localhost:3000/api/votation/1"
  );

  const candidateResponse = await axios.get<CandidatesProps>(
    `http://localhost:3000/api/candidates?ids=${votationResponse.data.votate[0].votates}`
  );

  return {
    props: {
      candidates: candidateResponse.data.candidates,
    },
  };
};
