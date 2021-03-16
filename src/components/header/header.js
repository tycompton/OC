import React from 'react';

const header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">OC</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#directions">Directions</a>
            <a className="nav-link" href="/teams">Teams</a>
            <a className="nav-link" href="/matches">Matches</a>
            <a className="nav-link" href="#">Admins</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default header;