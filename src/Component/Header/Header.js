import React from 'react';
import UserImg from '../../Assests/user.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand me-4" href="#">
          <span className='dark-bold'>GIFT</span> LIST
        </a>
        <button className="btn btn-gradient me-2 ps-3 pe-3">AI Gift Ideas</button>
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
          <ul className="navbar-nav mx-auto"> 
            <li className="nav-item">
              <a className="nav-link dark-bold" href="#">
                Lists
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dark-bold" href="#">
                Gift Exchange
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dark-bold" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dark-bold" href="#">
                Occasions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dark-bold" href="#">
                ECards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dark-bold" href="#">
                Blog
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link dark-bold" href="#">
               FAQ  
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <span className="me-2">Jane Smit</span>
            <img src={UserImg} alt="Jane Smit" className="rounded-circle" width="40" height="40" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
