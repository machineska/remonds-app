import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  // membuat link auth dan guest non auth
  const authLink = (
    <ul>
      <li><a href="#!">Members</a></li>
      <li>
        <Link to="/dashboard">
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  )

  const guestLink = (
    <ul>
      <li><Link to="register">Register</Link></li>
      <li><Link to="login">Login</Link></li>
    </ul>
  )

  return (
    // copy dan paste navbar dari remonds-theme disini, dan rubah class menjadi className
    <nav className="navbar bg-dark">
      <h1>
        <a href="/"><i className="fas fa-code"></i> Remonds App</a>
      </h1>
  { !loading && (<Fragment>{ isAuthenticated ? authLink : guestLink }</Fragment>)}
    </nav>
  )
};

// proptypes
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

// mapStateProps
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);