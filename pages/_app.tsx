import * as React from "react";
import "../styles/globals.css";
import Head from "next/head";
import type {AppProps} from "next/app"
import MainFrame from "../src/components/MainFrame";
import Footer from "../src/components/Footer";
import {RecoilRoot} from "recoil";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Dalda Shop</title>
      </Head>
      <main>
        <MainFrame/>
        <Component {...pageProps}/>
        <Footer/>
      </main>
    </RecoilRoot>
  )
}

export default MyApp
