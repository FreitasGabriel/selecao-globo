import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { VotationModal } from '../components/VotationModal/index'
import { VotationPage } from '../components/Votation/index'
import { ResultPage } from '../components/Result/index'
import { useVotation } from '../hooks/useVotation'
import * as S from './styles'

interface VotationProps {
  id: number;
  votesCount: number;
  candidateId: number;
  votationId: number;
}

interface CandidateProps {
  id: number;
  name: string;
}

interface CandidatesProps {
  candidates: CandidateProps[];
  votation: VotationProps[];
}

export default function Home({ candidates, votation }: CandidatesProps) {

  const { changeModalState, modalIsOpen, votationPageModal } = useVotation()

  const openModal = async () => {
    changeModalState(true)
  }

  const onRequestClose = async () => {
    changeModalState(false)
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
            {votationPageModal ? (
              <VotationPage candidates={candidates} />

            ) : (
              <ResultPage vote={votation} />
            )}


          </VotationModal>
        </S.Main>
      </S.Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const votationResponse = await axios.get('http://localhost:3000/api/votation/1')

  const votationInfo = await axios.get('http://localhost:3000/api/result/1')

  const candidateResponse = await axios.get(`http://localhost:3000/api/candidates?ids=${votationResponse.data.votate[0].votates}`)

  return {
    props: {
      candidates: candidateResponse.data.candidates,
      votation: votationInfo.data
    }
  }
}
