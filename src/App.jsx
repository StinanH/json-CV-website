
import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Career from "./Components/Career"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"



import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/career" element={<Career/>}/>
          <Route path ="/projects" element={<Projects/>}/>
          <Route path ="/contact" element={<Contact />}/>
        </Routes>
        <Footer/> 
      </BrowserRouter>  
    </>
  )
}

export default App
