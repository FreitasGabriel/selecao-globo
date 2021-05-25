import { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import Head from 'next/head'

import { VotationModal } from '../components/VotationModal/index'
import { CandidateOptions } from '../components/CandidateOptions/index'
import { useVotation } from '../hooks/useVotation'
import handler from './api/votation/[id]'
import * as S from './styles'

export default function Home() {

  useEffect(() => {
    getOutraInfo().then(resp => console.log(resp))

    getInfo().then(resp => console.log(resp))



  }, [])

  const { changeModalState, modalIsOpen, selectedCandidate } = useVotation()
  // const [showRecaptcha, setShowRecaptcha] = useState(false)
  // const [showButton, setShowButton] = useState(false)

  const getOutraInfo = async () => {
    return await axios.post('/api/vote/1')
  }

  const getInfo = async () => {
    return await axios.get('/api/votation/1')
  }

  const openModal = async () => {
    changeModalState(true)
  }

  const onRequestClose = async () => {
    changeModalState(false)
  }



  const validateRecaptcha = () => {
    // setShowButton(true)
    console.log('teste')
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
            <CandidateOptions options={[{ id: 1, name: "participante 1" }, { id: 2, name: "participante 2" }]} />

            {selectedCandidate !== 0 && (
              <div>
                <ReCAPTCHA
                  sitekey="6LdiT-8aAAAAAM1XPSblmf-1hpK4TzNGPBZ3-SLP"
                  onChange={() => validateRecaptcha()}
                />
              </div>
            )}

            <button className="vote-button">Envie seu voto agora</button>
          </VotationModal>
        </S.Main>


      </S.Container>
    </>
  )
}
