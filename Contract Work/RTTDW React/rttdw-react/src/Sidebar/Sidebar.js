import React from 'react';
import './Sidebar.css'


const Sidebar = () => {
  // const titles = [[['Who We Are'],[]], [['Getting Started'],['Get Connected', 'Prerequisites', 'Get the Project', 'Contributing', 'Merge Conflicts','Back End Prereqs', 'Deploy Back End']]]
  const titles = [[[['Who We Are'],['#whoWeAre']],[]], [[['Getting Started'],['#gettingStarted']],[[['Get Connected'],['#getConnected']], [['Prerequisites'],['#prerequisites']],[['Get the Project'],['#getTheProject']], [['Contributing'],['#contributing']],[['Merge Conflicts'],['#mergeConflicts']],[['Back End Prereqs'],['#backEndPrereqs']],[['Deploy Back End'],['#deployBackEnd']]]]]
  let navbar = titles.map(item=>{
    let subtitles=''
    if (item[1]){
      subtitles = item[1].map(sub=>{
        return(
        <h3 className='subLinkCategory'><a href={sub[1]}><i className="far fa-square"></i>{sub[0]}</a></h3>
        )
      })
    }
    return (
        <section>
          <h3 className='mainLinkCategory'><a href={item[0][1]}><i className="fas fa-square"></i>{item[0][0]}</a></h3>
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

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

export default Sidebar;