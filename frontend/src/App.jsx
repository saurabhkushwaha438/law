import './App.css'
import Hero from './Components/Hero.jsx'
import ContactForm from './Components/ContactForm.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Aboutus from './Components/Aboutus.jsx'
import BlogSection from './Components/BlogSection.jsx'
import { Route,Routes } from 'react-router-dom'
import CreateBlogForm from './Components/BlogInput.jsx'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path='/' 
          element={
            <>
              <Hero />
              <Aboutus />
              <ContactForm />
              <Footer />
            </>
          } 
        />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/blog' element={<BlogSection />} />
        <Route path='/createblog' element={<CreateBlogForm />} />
      </Routes>
    </>
  )
}

export default App
