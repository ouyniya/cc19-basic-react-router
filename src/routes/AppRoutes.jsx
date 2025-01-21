import React from 'react'
import { Routes, Route } from "react-router"
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'

function AppRoutes() {
  return (
    <div>

        <Routes>
            {/* public */}
            <Route path='/' element={<Layout />}>
                <Route index element={<a href='/about'><Home /></a>}/>
                <Route path="about" element={<a href='/' ><About /></a>}/>
                <Route path="contact" element={<a href='/' ><Contact /></a>}/>
                <Route path="login" element={<a href='/' ><Login /></a>}/>
                <Route path="register" element={<a href='/' ><Register /></a>}/>
            </Route>

            {/* private */}
            <Route path="admin" element={
                <>
                {/* <h1>Admin Layout</h1>
                <Outlet /> */}
                <Layout />
                </>}> {/* parent */}
                <Route index element={<a href='/' >Dashboard page</a>}/>
                <Route path="manage" element={<a href='/' >Manage page</a>}/>
                <Route path="setting" element={<a href='/' >Setting page</a>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes