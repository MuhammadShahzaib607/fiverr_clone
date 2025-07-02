import React, { useState } from 'react'
import "./gigs.scss"
import { gigs } from '../../data'
import GigCard from '../../components/gigCard/GigCard'

const Gigs = () => {

const [open, setOpen] = useState(false)
const [sort, setSort] = useState("sales")

const reSort = (type)=> {
setSort(type)
setOpen(false)
}

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadCrumbs">Fiverr - Graphics & Design -</span>
        <h2>AI Artist</h2>
        <p>Explore the boundaries of art and technology with Fiverr's AI Artists</p>

        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>{sort === "Sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={()=> setOpen(!open)} />
           {open && <div className="rightMenu">
              {sort === "Sales" ? <span onClick={()=> reSort("CreateAt")}>Newest</span> :
              <span onClick={()=> reSort("Sales")}>Best Selling</span>}
            </div>}
          </div>

        </div>
         <div className="cards">
            {
              gigs.map((gig)=> {
                return <GigCard key={gig.id} item={gig}/>
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Gigs