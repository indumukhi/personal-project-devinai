import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-800">
        &copy; {new Date().getFullYear()} Indumukhi. All rights reserved.
      </footer>
    </div>
  )
}
