import { AppProps } from 'next/app'
import '../styles/styles.css'
import { VotationProvider } from '../hooks/useVotation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VotationProvider>
      <Component {...pageProps} />
    </VotationProvider>
  )
}

export default MyApp
