import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroHUD from "./components/HeroHUD/HeroHUD";
import IntroDescription from "./components/IntroDescription/IntroDescription";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <div id="top"></div>
      <Header />
      <HeroHUD />
      <IntroDescription />
      <main className="main-content">
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
