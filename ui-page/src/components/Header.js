import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/rock-pros-usa.jpg';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import { DiCode } from 'react-icons/di';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" bg="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Button variant="outline-secondary" className="text-white ms-2 d-sm-none" onClick={handleShow}>
              <RxHamburgerMenu className="text-white ms-0 ps-0" style={{ fontSize: '20px' }} />
            </Button>
          </Navbar.Brand>

            <Offcanvas show={show} onHide={handleClose} className="bg-dark">
              <Offcanvas.Header closeButton className="text-white">

                <img src={logo}
                  width="80"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo" />

              </Offcanvas.Header>
              <div className="m-2 p-auto">
                <ul className="list-unstyled">
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Dashboard
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Quotation
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Order
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Dispatch
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Loadout
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Reports
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Comments
                  </li>
                </ul>
              </div>

              <Offcanvas.Title className="text-white p-2">
                Admin
              </Offcanvas.Title>

              <div className="m-2 p-auto">
                <ul className="list-unstyled">
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Customers
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Quarry
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Employee
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Materials
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Equipments
                  </li>
                  <li className="text-white mb-2">
                    <DiCode style={{ fontSize: '30px' }} />
                    Trucker
                  </li>
                </ul>
              </div>
            </Offcanvas>

          <CgProfile className="text-white cursor-pointer" style={{ fontSize: '30px' }} />
        </Container>
      </Navbar>
    </>
  )
}

export default Header