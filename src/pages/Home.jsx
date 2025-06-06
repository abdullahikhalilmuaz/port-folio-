import "../styles/home.css";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Certification from "../components/Certification";
import HomeWelcome from "../components/HomeWelcome";

export default function Home({ componentToShow, setComponentToShow }) {
  return (
    <div className="home-main-container">
      {componentToShow === "info" ? (
        <About />
      ) : componentToShow === "portfolio" ? (
        <Portfolio />
      ) : componentToShow === "services" ? (
        <Services />
      ) : componentToShow === "contact" ? (
        <Contact />
      ) : (
        <HomeWelcome setComponentToShow={setComponentToShow} />
      )}
    </div>
  );
}
