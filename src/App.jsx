import { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import { createBrowserRouter, Outlet, Route, RouterProvider } from 'react-router-dom'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import Gigs from './pages/gigs/Gigs.jsx'
import Add from './pages/add/Add.jsx'
import Gig from './pages/gig/Gig.jsx'
import Login from './pages/login/Login.jsx'
import Message from './pages/message/Message.jsx'
import Messages from './pages/messages/Messages.jsx'
import MyGigs from './pages/myGigs/MyGigs.jsx'
import Orders from './pages/orders/Orders.jsx'
import Register from './pages/register/Register.jsx'

function App() {

const Layout = ()=> {
  return (
    <>
    <Navbar />
<Outlet />
<Footer />
    </>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/gigs",
      element: <Gigs />
    },
    {
      path: "/add",
      element: <Add />
    },
    {
      path: "/gig/:id",
      element: <Gig />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/message/:id",
      element: <Message />
    },
    {
      path: "/messages",
      element: <Messages />
    },
    {
      path: "/myGigs",
      element: <MyGigs />
    },
    {
      path: "/orders",
      element: <Orders />
    },
    {
      path: "/signup",
      element: <Register />
    },
  ]
}])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
