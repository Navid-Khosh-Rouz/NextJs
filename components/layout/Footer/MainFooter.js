import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { websiteData } from "../../../config/data";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";
import OffcanvasUI from "../../UI/Offcanvas/Offcanvas";

const MainFooter = (props) => {
  const { footerTitle } = websiteData;

  return (
    <footer className="text-uppercase bg-success text-light">
      <Container fluid={props.fluid}>
        <Row className="justify-content-md-center g-0">
          <Col className="text-start py-3">{footerTitle}</Col>

          <Col className="text-end py-3">
            <LanguageSwitcher className={`m-auto`} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MainFooter;
