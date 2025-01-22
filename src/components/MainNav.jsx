import React from 'react'
import { Link } from "react-router"

function MainNav() {
  return (
    <>
     <nav className="flex justify-between align-middle h-8 bg-slate-300 items-center p-2">
        <div className="flex gap-5">
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
            <Link to='product'>Product</Link>
            <Link to='mycart'>Mycart</Link>
        </div>
        
        <div className="flex gap-5">
            <Link to='login'>Log in</Link>
            <Link to='register'>Register</Link>
        </div>
      </nav>
    </>
  )
}

export default MainNav