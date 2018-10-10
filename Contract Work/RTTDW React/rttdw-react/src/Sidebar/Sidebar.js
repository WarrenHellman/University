import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = () => {
  const titles = [[['Who We Are'],[], ["'/'"]], [['Getting Started'],['Get Connected', 'Prerequisites', 'Get the Project', 'Contributing', 'Merge Conflicts','Back End Prereqs', 'Deploy Back End']['/gettingStarted']]]
  let navbar = titles.map(item=>{
    let subtitles=''
    if (item[1]){
      subtitles = item[1].map(sub=>{
        return(
        <h3 className='subLinkCategory'><i className="far fa-square"></i>{sub}</h3>
        )
      })
    }
    return (
      <Router>
        <section>
        <Link to='/'><h3 className='mainLinkCategory'><i className="fas fa-square"></i>{item[0]}</h3></Link>
          {subtitles}
          <Route exact path ='/' component ={Home}/>
        </section>
      </Router>
    )
  })
  return(
    <div className='Sidebar'>
      {navbar}
    </div>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default Sidebar;