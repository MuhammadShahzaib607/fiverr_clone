import React from 'react'
import "./projectsCard.scss"
import { Link } from 'react-router-dom'

const ProjectsCard = ({item}) => {
  console.log (item.desc)
  return (
<Link to="/">

<div className="cardContainer">
    <div className='projectsCard'>
  <img src={item.img} className='img' alt="" />

<div className="info">
 <img src={item.pp} className='pp' alt="" />
<div className="texts">
  <h2>{item.cat}</h2>
  <span>{item.username}</span>
</div>
</div>
    </div>
</div>

</Link>

  )
}

export default ProjectsCard