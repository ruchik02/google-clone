import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import Body from "../components/Body";
const Index = () => {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1920px-Google_%22G%22_Logo.svg.png"
        />
        <title>Google</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* header */}
      <Header />
      {/* body */}
      <Body />
      {/* Footer */}
    </div>
  );
};

export default Index;
