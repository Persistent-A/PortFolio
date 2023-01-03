import Header from "./components/Header";
import Intro from "./components/Intro";
import Work from "./components/Work";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Links from "./components/Links"
import Mail from "./components/Mail"

function App() {
  return (
    <div className="App">
      <Links />
      <Mail />
      <div className="main">
        <Header />
        <Intro />
        <AboutMe />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default App;
