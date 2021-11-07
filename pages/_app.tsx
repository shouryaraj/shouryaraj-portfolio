import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shourya Raj</title>
        <link
          rel="icon"
          sizes="32x32"
          href="https://raw.githubusercontent.com/shouryaraj/shouryaraj-portfolio/master/images/logo.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
