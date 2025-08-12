import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroHUD from "./components/HeroHUD";
import IntroDescription from "./components/IntroDescription";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div id="top"></div>
      <Header />
      <HeroHUD />
      <IntroDescription />
      <main className="main-content">
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
