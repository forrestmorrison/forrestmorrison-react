import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main> 
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;