import React from 'react';
import {ToastContainer, toast} from 'react-toastify';

function Properties(props) {
  return (
    <>
      {/* <div className="container">
        <div>{props.a}</div>
        <div>{props.z}</div>
        <div>{props.b}</div>
        <div>{props.d}</div>
          </div> */}

      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.nav}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.features}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>=>{}
        </div>
      </nav> */}
      <button
        onClick={() => {
          toast.success('My Alert Is Working', {
            position: 'top-right',
            autoClose: 100,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }}
      >
        Toast
      </button>
      <ToastContainer />
    </>
  );
}

export default Properties;
