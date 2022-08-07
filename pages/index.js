import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { EmojiSmile } from "react-bootstrap-icons";
import MainFooter from "../components/layout/Footer/MainFooter";
import MainHeader from "../components/layout/Header/MainHeader";
import classes from "../styles/index.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LoadingUI from "../components/UI/Loading/Loading";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"])),
    },
  };
}

function HomePage(props) {
  const { t } = useTranslation();

  return (
    <Fragment>
      <main>
        <Container
          fluid="xxxl"
          className={classes["page-container-min-height"]}
        >
          <h1>
            Main page <EmojiSmile />
          </h1>
          <hr />
          <p>
            Use this starter to save your time for multi language website en/de. To change the language either change the locale in URL or change via the language-switcher in footer.
          </p>
          <p className={`text-decoration-underline text-primary fw-bolder`}>
            Translation testing function: => {t("test_translation")}
          </p>
        </Container>
      </main>
    </Fragment>
  );
}

export default HomePage;
