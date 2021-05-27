import { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import Head from 'next/head'

import { VotationModal } from '../components/VotationModal/index'
import { CandidateOptions } from '../components/CandidateOptions/index'
import { useVotation } from '../hooks/useVotation'
import handler from './api/votation/[id]'
import * as S from './styles'
import { GetServerSideProps } from 'next'

interface CandidateProps {
  id: number;
  name: string;
}

interface CandidatesProps {
  candidates: CandidateProps[]
}

export default function Home({ candidates }: CandidatesProps) {

  const { changeModalState, modalIsOpen, selectedCandidate } = useVotation()
  const [recaptchaValidate, setRecaptchaValidate] = useState(false)

  const handleSubmitVote = async (candidateID: number) => {

    const payload = {
      votationID: 1
    }

    return await axios.post(`/api/vote/${candidateID}`, payload)
  }

  const openModal = async () => {
    changeModalState(true)
  }

  const onRequestClose = async () => {
    changeModalState(false)
  }

  const validateRecaptcha = () => {
    setRecaptchaValidate(true)
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>
      <S.Container>
        <S.HeaderContainer>
          BIG BROTHER BRASIL
        </S.HeaderContainer>

        <S.Main>

          <p>Quem deve sair?</p>
          <S.Imagem>
            <img className="first-candidate" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
            <img className="second-candidate" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
          </S.Imagem>

          <S.Button
            onClick={() => {
              openModal()
            }}
          >
            Clique para Votar
          </S.Button>

          <VotationModal
            isOpen={modalIsOpen}
            onClose={() => onRequestClose}
          >
            <CandidateOptions options={candidates} />

            {selectedCandidate !== 0 && (
              <S.ReCaptchaValidator>
                <ReCAPTCHA
                  sitekey="6LdiT-8aAAAAAM1XPSblmf-1hpK4TzNGPBZ3-SLP"
                  onChange={() => validateRecaptcha()}
                />
              </S.ReCaptchaValidator>
            )}

            <S.VoteButton
              type="submit"
              onClick={() => handleSubmitVote(selectedCandidate)}
              disabled={recaptchaValidate ? false : true}
            >
              Envie seu voto agora
            </S.VoteButton>

          </VotationModal>
        </S.Main>
      </S.Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const votationResponse = await axios.get('http://localhost:3000/api/votation/1')

  const candidatePayload = {
    candidates: votationResponse.data.votate[0].votates
  }

  const candidateResponse = await axios.get(`http://localhost:3000/api/candidate?ids=${votationResponse.data.votate[0].votates}`)

  return {
    props: {
      candidates: candidateResponse.data.candidates
    }
  }
}
