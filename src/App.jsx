import { Link, Routes, Route } from "react-router"

function App() {

  return (
    <>
      <nav className="flex justify-between align-middle h-8 bg-slate-300 items-center p-2">
          <div className="flex gap-5">
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
        </div>
        
        <div className="flex gap-5">
          <Link to='login'>Log in</Link>
          <Link to='register'>Register</Link>
        </div>
        
      </nav>

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
    </>
  )
}

export default App
