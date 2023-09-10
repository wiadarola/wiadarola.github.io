import './App.css';
import NavBar from './components/NavBar';
import NavTop from './components/NavTop';
import Hero from './components/Hero';
// import Skills from './components/Skills';
import Projects from './components/Projects';
import Description from './components/Description';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  return (
    <>
      < NavBar />
      < NavTop />
      < Hero />
      {/* < Skills /> */}
      < Description />
      < Projects />

      {/* < About /> */}
      {/* < Contact /> */}
    </>
  );
}

export default App
