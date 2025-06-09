import { Link } from "react-router-dom";
import "../styles/welcome.css";
export default function HomeWelcome({ setComponentToShow }) {
  const handlePortfolio = () => {
    setComponentToShow("portfolio");
  };
  return (
    <div className="welcome">
      <h2>
        Hello, I<span>'</span>am Abdullahi <span>H</span> Mu'az
      </h2>
      <span>
        I<span>'</span>m a Frontend Developer
      </span>
      <div>
        <button
          onClick={handlePortfolio}
          className="portfolio"
          style={{ margin: "0px 10px", fontFamily: "monospace" }}
        >
          View PortFolio
        </button>
        <a href="/resume.docx" target="_blank" rel="noopener noreferrer">
          <button style={{ margin: "10px 10px", fontFamily: "monospace" }}>
            View Resume
          </button>
        </a>
      </div>
    </div>
  );
}
