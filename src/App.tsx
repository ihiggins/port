import About from "./about/About";
import Footer from "./footer/Footer";
import "./Global.scss";
import Landing from "./landing/Landing";
import Layout from "./layout/Layout";
import Main from "./Main";
import { Nav } from "./nav/nav";
import Projects from "./projects/Projects";
function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Layout>
        <Landing />
        <About />
        <Projects />
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
