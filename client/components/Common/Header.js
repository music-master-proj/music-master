/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actionType from '../../redux/actions/actionTypes';
import './Styles/header.scss'

function Header() {
  const history = useHistory(),
    dispatch = useDispatch(),
    authData = useSelector((state) => state.auth.authData),
    // username = authData?.user?.name || 'User',
    //logout button click
    logout = () => {
      dispatch({ type: actionType.LOGOUT });
      history.push('/login');
    };

  return (
    <div>
      <Navbar collapseOnSelect expand='md' className='navbarContainer' variant='light' fixed='top' sticky='top'>
        <Navbar.Brand>
          <NavLink className='navLinkText' to='/'> <img src='assets/icons/favicon.ico' alt='Music Master Logo' /> </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='topNavbar' />
        <Navbar.Collapse id='topNavbar' className='justify-content-end' >
          <Nav activeKey='/'>
            <NavItem className='my-1'><a className='navLinkText px-3' activeStyle={{ color: 'var(--theme-navbarColor)' }} href='#'> Premium </a></NavItem>
            <NavItem className='my-1'><a className='navLinkText px-3' activeStyle={{ color: 'var(--theme-navbarColor)' }} href='#'> Discover </a></NavItem>
            <NavItem className='my-1'><a className='navLinkText px-3' activeStyle={{ color: 'var(--theme-navbarColor)' }} href='#'> Help </a></NavItem>
            <NavItem className='my-1'><a className='navLinkText px-3' activeStyle={{ color: 'var(--theme-navbarColor)' }} href='#'> Download </a></NavItem>
            {authData ? (
              <>
                <NavItem className='my-1'><NavLink className='navLinkText px-3' activeStyle={{ color: 'var(--theme-navbarColor)' }} to='/profile'> Profile </NavLink></NavItem>
                <NavItem className='my-1 bg-warning' onClick={logout}><NavLink className='navLinkText px-3' activeStyle={{ color: 'var(--theme-navbarColor)' }} to='/login'> Logout </NavLink></NavItem>

              </>) : (
              <>
                <NavItem className='my-1'><NavLink className='navLinkText px-3' activeStyle={{ color: 'var(--theme-navbarColor)' }} to='/login'> Login </NavLink></NavItem>
                <NavItem className='my-1'><NavLink className='navLinkText px-3' activeStyle={{ color: 'var(--theme-navbarColor)' }} to='/signup'>Sign Up</NavLink></NavItem>
              </>)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
