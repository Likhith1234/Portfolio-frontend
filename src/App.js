import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App;
