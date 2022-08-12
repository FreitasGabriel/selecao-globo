import { AppProps } from "next/app";
import "../styles/styles.css";
import { VotationProvider } from "../context/useVotation";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VotationProvider>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <Component {...pageProps} />
    </VotationProvider>
  );
}

export default MyApp;
