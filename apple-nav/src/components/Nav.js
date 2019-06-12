import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <NavLink exact to={`/${props.link.link}`}>{props.link.link}</NavLink>
  )
}

export default Nav;