import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt, faTabletAlt, faTv, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const SubNav = (props) => {
  const currentLink = props.links.find(item => `${item.link}` === props.match.params.product);
  console.log(currentLink );
  if (!currentLink ) {
    return <h2>Loading data...</h2>
  }

  let iconType;

  if (currentLink.link === 'Mac') {
    iconType = faLaptop;
  } else if (currentLink.link === 'iPad') {
    iconType = faTabletAlt;
  } else if (currentLink.link === 'iPhone') {
    iconType = faMobileAlt;
  } else if (currentLink.link === 'Watch') {
    iconType = faClock;
  } else if (currentLink.link === 'TV') {
    iconType = faTv;
  } else if (currentLink.link === 'Music') {
    iconType = faMusic;
  } else {
    iconType = faQuestionCircle;
  }

  return (
    <div className='sub-nav-menu'>
      {currentLink.sublink.map((item,index) => 
        <div className='sub-nav-links'>
          <FontAwesomeIcon className='sub-nav-icon' icon={iconType}/>
          <div key={item}>{item}</div>
        </div>)}
    </div>
  )
}

export default SubNav;
