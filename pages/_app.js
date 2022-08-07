import React, { useEffect } from "react";

import "../config/custom.scss";
import "../styles/globals.css";

import { appWithTranslation, useTranslation } from "next-i18next";
import SSRProvider from "react-bootstrap/SSRProvider";
import MainFooter from "../components/layout/Footer/MainFooter";
import MainHeader from "../components/layout/Header/MainHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AlertContainer from "../components/Alert/AlertContainer";
import Head from "next/head";
import Script from "next/script";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"])),
    },
  };
}

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();

  useEffect(() => {
    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {
      // load JS bootstrap dependency
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <SSRProvider>
      <MainHeader fluid="xxxl" expand="xl" title={t("Home")} />

      <Component {...pageProps} />

      <MainFooter fluid="xxxl" />

      <AlertContainer />
    </SSRProvider>
  );
}

export default appWithTranslation(MyApp);
