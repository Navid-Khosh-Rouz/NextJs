import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import {
  Container,
  Form,
  FormControl,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import LocalizedNavLink from "../../UI/NavLink/LocalizedNavLink";
import Button from "../../UI/Button/Button";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"])),
    },
  };
}

const MainHeader = ({ title, ...props }) => {
  const { t } = useTranslation("translation");
  const { locale } = useRouter()
  const [loading, setLoading] = useState(false);
  const [expand, setExpand] = useState(props.expand);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
      <Container fluid={props.fluid}>
        <Navbar.Brand href={`/${locale}`}>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

        {loading && (
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="btn btn-light">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        )}
      </Container>
    </Navbar>
  );
};

export default MainHeader;
