import './App.css';
import {
  Navbar,
  About,
  Projects,
  Skills,
  Testimonials,
  Contact,
  Footer
} from './components'

function App() {
  return (
    <div className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
