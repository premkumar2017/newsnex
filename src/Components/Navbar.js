import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const Navbar = ({ search, handleInput, handleSearch }) => {
  const { isAuthenticated, userName, logout } = useContext(AuthContext); // Use correct context values

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Newsnex</h1>
        </Link>

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
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/feedback" className="nav-link">Feedback</Link>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hello, {userName}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          <form className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search News"
              value={search}
              onChange={handleInput}
            />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
