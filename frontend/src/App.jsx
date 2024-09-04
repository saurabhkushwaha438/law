import './App.css'
import Hero from './Components/Hero.jsx'
import ContactForm from './Components/ContactForm.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Aboutus from './Components/Aboutus.jsx'
import BlogSection from './Components/Blogs.jsx'
function App() {
  
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <BlogSection></BlogSection>
   <Aboutus></Aboutus>
   <ContactForm></ContactForm>
   <Footer></Footer>
   </>
  )
}

export default App
