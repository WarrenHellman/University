import React from 'react';
import './Sidebar.css'


const Sidebar = () => {
  const titles = [[['Who We Are'],['Sub1', 'Sub2']], [['Getting Started']]]
  let navbar = titles.map(item=>{
    let subtitles=''
    if (item[1]){
      subtitles = item[1].map(sub=>{
        return(
        <h3>{sub}</h3>
        )
      })
    }
    return (
      <section>
        <h2>{item[0]}</h2>
        {subtitles}
      </section>
    )
  })
  return(
    <div className='Sidebar'>
      {navbar}
    </div>
  )
}

export default Sidebar;