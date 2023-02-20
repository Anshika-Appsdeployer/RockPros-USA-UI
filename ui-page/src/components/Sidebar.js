import React from 'react';
import Main from './Main/Main';
import { DiCode } from 'react-icons/di';

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 py-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-white" id="menu">

                <li>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Quotations</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Dispatch</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Loadout</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Reports</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Comments</span> </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-white">Admin</span>
                  </a>
                </li>

                <li>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Quarry</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Employee</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Materials</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Equipments</span> </a>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link py-0 px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i><DiCode style={{ fontSize: '30px' }} />
                    <span className="ms-1 d-none d-sm-inline">Trucker</span> </a>
                </li>

              </ul>
              {/* <hr />
              <div className="pb-2 py-0">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none py-0">
                  <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1 py-0">Admin</span>
                </a>
              </div> */}
            </div>
          </div>
          <div className="col py-3">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar