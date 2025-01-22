import React from 'react'
import { Routes, Route } from "react-router"
import Layout from '../layouts/Layout'

// user pages
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Recap from '../pages/Recap'
import ReactUserState from '../pages/ReactUserState'
import EasyZustand from '../pages/EasyZustand'
import Product from '../pages/Product'

// admin pages
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import Setting from '../pages/admin/Setting'


function AppRoutes() {
  return (
    <div>
        <Routes>
            {/* public */}
            <Route path='/' element={<Layout />}>
                <Route index element={<a href='/about'><Home /></a>}/>
                <Route path="about" element={<a href='/' >
                    <About /></a>}/>
                <Route path="contact" element={<a href='/' >
                    <Contact /></a>}/>
                <Route path="login" element={<a href='/' >
                    <Login /></a>}/>
                <Route path="register" element={<a href='/' >
                    <Register /></a>}/>
                <Route path="recap" element={<a href='/' >
                    <Recap /></a>}/>
                <Route path="reactUserState" element={<>
                    <ReactUserState /></>}/>
                <Route path="easyZustand" element={<>
                    <EasyZustand /></>}/>
                <Route path="product" element={<>
                    <Product /></>}/>
            </Route>

            {/* private */}
            <Route path="admin" element={
                <>
                {/* <h1>Admin Layout</h1>
                <Outlet /> */}
                <Layout />
                </>}> {/* parent */}
                <Route index element={<a href='/' >
                    <Dashboard /></a>}/>
                <Route path="manage" element={<a href='/' >
                    <Manage /></a>}/>
                <Route path="setting" element={<a href='/' >
                    <Setting /></a>}/>
            </Route>
        </Routes>
    </div>
  )
}


export default AppRoutes