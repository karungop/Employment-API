import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Workday Clone</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shifts">Shifts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/hours">Hours Logged</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
