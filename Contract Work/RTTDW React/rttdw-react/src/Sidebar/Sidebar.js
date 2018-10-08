import React from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
  return(
    <div className='Sidebar'>
      <p>{props.title}</p>
    </div>
  )
}

export default Sidebar;