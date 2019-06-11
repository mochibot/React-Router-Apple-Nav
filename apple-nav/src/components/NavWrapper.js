import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';


class NavWrapper extends React.Component {

  render() {
    return (
      <div className='nav-wrapper'>
        <Link to='/'><FontAwesomeIcon className='nav-icon' icon={faApple} /></Link>
        {this.props.links.map(item => <Nav link={item} key={item.link} />)}
        <FontAwesomeIcon className='nav-icon' icon={faSearch} />
        <FontAwesomeIcon className='nav-icon' icon={faShoppingBag} />
      </div>
    )
  }
}

export default NavWrapper;