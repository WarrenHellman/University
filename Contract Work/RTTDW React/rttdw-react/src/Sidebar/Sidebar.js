import React from 'react';
import './Sidebar.css'


const Sidebar = () => {
  const titles = [[['Who We Are'],[]], [['Getting Started'],['Get Connected', 'Prerequisites', 'Get the Project', 'Contributing', 'Merge Conflicts','Back End Prereqs', 'Deploy Back End']]]
  let navbar = titles.map(item=>{
    let subtitles=''
    if (item[1]){
      subtitles = item[1].map(sub=>{
        return(
        <h3 className='subLinkCategory'><i class="far fa-square"></i>{sub}</h3>
        )
      })
    }
    return (
      <section>
        <h3 className='mainLinkCategory'><i class="fas fa-square"></i>{item[0]}</h3>
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