import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

function App() {
  return <>
    <Navbar />
    <main>
      <Portfolio />
      <About />
      <Contact />
    </main>
    <Footer />
  </>;
}
export default App;