import React from 'react'
import Login from './pages/Login'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Detail from './pages/Detail'
import Write from './pages/Write'
import Contact from './pages/Contact'

const Layout = () => {
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <Homepage/>,
      },
      {
        path:'/post/:id',
        element: <Detail/>,
      },
      {
        path:'/write',
        element: <Write/>,
      }
    ]

  },
  {
    path: '/login',
    element: <Login/>

  },
  {
    path: '/about',
    element: <Contact/>

  },
  {
    path: '/register',
    element: <Register/>

  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    
    </>
  )
}

export default App