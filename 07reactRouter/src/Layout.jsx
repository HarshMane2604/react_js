import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

// when the outlet is used changes is done only in outlet
// In the context of React and React Router, the Outlet component is used to render child routes within a parent route. It acts as a placeholder for where the child routes will be displayed. This is particularly useful when you have nested routes and you want to render the child components within a parent component.



const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout