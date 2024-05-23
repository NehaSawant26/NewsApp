import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark mx-5 fixed-top">

      <div className="container-fluid">

        <Link className="navbar-brand" to="#">NewsApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2">

            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/Business" ? "active" : ""}`} to="/Business">Business</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/Entertainment" ? "active" : ""}`} to="/Entertainment">Entertainment</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/Science" ? "active" : ""}`} to="/Science">Science</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/Sports" ? "active" : ""}`} to="/Sports">Sports</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/Health" ? "active" : ""}`} to="/Health">Health</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
