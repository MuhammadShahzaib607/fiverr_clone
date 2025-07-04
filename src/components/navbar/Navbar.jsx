import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

const [active, setActive] = useState(false)
const [open, setOpen] = useState(false)

const {pathname} = useLocation()

const isActive = ()=> {
    window.scrollY > 0 ? setActive(true) : setActive(false)
}

useEffect(() => {
  setOpen(false);
}, [pathname]);

useEffect(()=> {
    window.addEventListener("scroll", isActive)

    return ()=> {
        window.removeEventListener("scroll", isActive)
    }
})

const currentUser = {
    id: 1,
    userName: "Shahzaib",
    isSeller: true
}

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
    <div className="container">
        
<div className="logo">
<Link className='link' to="/" >
<span className='text'>fiverr</span>
    <span className='dot'>.</span>
</Link>
</div>

<div className="links">
    <span>Fiverr Business</span>
    <span>Explore</span>
    <span>English</span>
    <span>Sign in</span>
    {!currentUser?.isSeller && <span>Become a Seller</span>}
    {!currentUser?.isSeller && <button style={active ? {color: "black", border: "1px solid black"} : {color: "white"}}>join</button>}
    {currentUser && 
    <div className="user">
        <img src="/avatar.png" onClick={()=> setOpen(!open)} alt="" />
        <div className="userName">{currentUser?.userName}</div>
{open && <div className="options">
    {
        currentUser?.isSeller ? 
        <>
        <Link to="/myGigs" className='link' >Gigs</Link >
        <Link to="/add" className='link' >Add New Gig</Link >
        <Link to="/orders" className='link' >Orders</Link >
        <Link to="/messages" className='link' >Messages</Link >
        <Link to="/" className='link' >Logout</Link >
        </>
:
<>
        <Link to="/orders" className='link' >Orders</Link >
        <Link to="/messages" className='link' >Messages</Link >
        <Link to="/" className='link' >Logout</Link >
</>
        
    }
</div>}

    </div>
    }
</div>

    </div>

{active || pathname !== "/" ? <hr /> : null}

{
active || pathname !== "/" ?     <div className="menu">
        <Link to="/" className="link">Graphics & Design</Link>
        <Link to="/" className="link">Video & Animation </Link>
        <Link to="/" className="link">Writing & Translation</Link>
        <Link to="/" className="link">AI Services</Link>
        <Link to="/" className="link">Digital Marketing</Link>
        <Link to="/" className="link">Music & Audio</Link>
        <Link to="/" className="link">Programming & Tech</Link>
        <Link to="/" className="link">Business</Link>
        <Link to="/" className="link">Lifestyle</Link>
    </div> : null    
}

    </div>
  )
}

export default Navbar