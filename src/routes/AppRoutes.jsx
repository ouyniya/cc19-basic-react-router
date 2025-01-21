import React from 'react'
import { Routes, Route } from "react-router"
import MainNav from '../components/MainNav'

function AppRoutes() {
  return (
    <div>
        <MainNav />

    <Routes>
      <Route path="/" element={<a href='/about' style={{ color: 'blue' }}>Home</a>}/>
      <Route path="about" element={<a href='/' style={{ color: 'blue' }}>About</a>}/>
      <Route path="contact" element={<a href='/' style={{ color: 'blue' }}>Contact</a>}/>
      <Route path="login" element={<a href='/' style={{ color: 'blue' }}>Log in Page</a>}/>
      <Route path="register" element={<a href='/' style={{ color: 'blue' }}>Register</a>}/>

      <Route path="admin"> {/* parent */}
        <Route path="dashboard" element={<a href='/' style={{ color: 'green' }}>Dashboard page</a>}/>
        <Route path="manage" element={<a href='/' style={{ color: 'red' }}>Manage page</a>}/>
        <Route path="setting" element={<a href='/' style={{ color: 'red' }}>Setting page</a>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default AppRoutes