import { Routes, Route } from "react-router"

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Routes>
      <Route path="/" element={<a href='/about' style={{ color: 'blue' }}>Home</a>}/>
      <Route path="about" element={<a href='/' style={{ color: 'blue' }}>About</a>}/>
    </Routes>
    </>
  )
}

export default App
