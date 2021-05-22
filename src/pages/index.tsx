import { useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'


import handler from './api/votation/[id]'
import * as S from './styles'

export default function Home() {

  useEffect(() => {
    getOutraInfo().then(resp => console.log(resp))

    getInfo().then(resp => console.log(resp))



  }, [])

  const getOutraInfo = async () => {
    return await axios.post('/api/vote/1')
  }

  const getInfo = async () => {
    return await axios.get('/api/votation/1')
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
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
            onClick={() => console.log("Teste")}
          >
            Clique para Votar
          </S.Button>
        </S.Main>


      </S.Container>
    </>
  )
}
