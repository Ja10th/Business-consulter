import Nav from "./components/navbar/nav";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Color from "./components/color/color";
import Slide from "./components/slider/slide";
import Whyus from "./components/whyus/whyus";
import Company from "./components/company/company";
import Exo from "./components/experience/exo";
import Project from "./components/Project/project";
import Customer from "./components/customers/customer";
import News from "./components/news/news";
import Trusted from "./components/trusted/trusted";
import Support from "./components/support/support";
import Letter from "./components/letter/letter";
import Footer from "./components/footer/footer";
import Trust from "./components/trust/trust";

const App = () => {
  return (
    <>
      <Trust />
      <Nav />
      <Hero />
      <About />
      <Color />
      <Slide />
      <Whyus />
      <Company />
      <Exo />
      <Project />
      <Customer />
      <News />
      <Trusted />
      <Support />
      <Letter />
      <Footer />
    </>
  );
};

export default App;
