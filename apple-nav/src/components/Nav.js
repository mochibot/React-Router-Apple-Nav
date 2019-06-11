import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <Link to={`/${props.link.link}`}>{props.link.link}</Link>
  )
}

export default Nav;