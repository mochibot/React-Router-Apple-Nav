import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const SubNav = (props) => {
  const currentLink = props.links.find(item => `${item.link}` === props.match.params.product);
  console.log(currentLink );
  if (!currentLink) {
    return <div></div>
  } 

  return (
    <div>
      <div className='sub-nav-menu' style={{background: currentLink.link === 'TV' ? 'rgb(49, 49, 49)' : 'rgb(246, 246, 246)'}}>  
      {currentLink.sublink.map((item) => 
        <div className='sub-nav-links'>
          <img src={item.image} alt={item.name}/>
          <div style={{color: currentLink.link === 'TV' ? 'white' : 'black'}} key={item.name}>{item.name}</div>
        </div>)}
      </div>
    </div>
  )
}

export default SubNav;
