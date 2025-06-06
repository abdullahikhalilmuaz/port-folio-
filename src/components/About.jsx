import {
  FaAward,
  FaCertificate,
  FaDiceOne,
  FaGraduationCap,
} from "react-icons/fa";
import "../styles/about.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useState } from "react";
import Dashboard from "../components/Dashboard";

export default function About() {
  const [component, setComponent] = useState("");

  const handleNewSkill = () => {
    setComponent("new-one");
  };
  return (
    <>
      {component === "new-one" ? (
        <Dashboard />
      ) : (
        <div className="about">
          <h2 className="about-header">About Me</h2>
          <h4 className="about-header1">
            My Name Abdullahi H Mu<span>'</span>az
          </h4>
          <p className="about-para">
            I'm a Full Stack Developer with hands-on experience in building
            scalable web applications using React.js, Node.js, Express.js, and
            MongoDB. I'm skilled in designing and consuming RESTful APIs,
            working with TypeScript for type-safe development, and using Git and
            GitHub for version control and collaboration. I enjoy building
            efficient, user-friendly solutions and continuously improving my
            development workflow.
          </p>

          <div className="skills-section">
            <h3 className="skills-header">Skills</h3>
            <div className="skills-list">
              <span className="skill-item">React.js</span>
              <span className="skill-item">Node.js</span>
              <span className="skill-item">Express.js</span>
              <span className="skill-item">MongoDB</span>
              <span className="skill-item">REST API</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">Git</span>
              <span className="skill-item">GitHub</span>
            </div>
          </div>

          <div className="me-full">
            <div
              className="education-wrapper"
              id="education-wrapper"
              style={{ width: "100%" }}
            >
              <h3 className="education-header">
                Education <FaGraduationCap className="grad" />
              </h3>
              <div className="education-container-wrapper">
                <div className="design-icons">
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                </div>
                <div className="education-container">
                  <p className="education-date">2021-2024</p>
                  <h3 className="education-title">NCE in Computer Science</h3>
                  <p className="education-description">
                    I am a graduate student of Federal College of Education
                    Katsina, <br />i graduated with upper first class, from
                    department of Computer Science
                  </p>

                  <p
                    className="certification-date"
                    style={{ marginTop: "20px" }}
                  >
                    2022
                  </p>
                  <h3 className="certification-title">
                    National Association of Computer Science Student (NACOSS)
                  </h3>
                  <p className="certification-descrtiption">
                    I was awarded the NACOSS certificate from the Department of
                    computer science
                  </p>
                </div>
              </div>
            </div>{" "}
            <div
              className="education-wrapper"
              id="education-wrapper"
              style={{ width: "100%" }}
            >
              <h3 className="education-header">
                Open Source Contributions <FaAward className="grad" /> (1)
              </h3>
              <div
                className="education-container-wrapper"
                style={{ height: "150px" }}
              >
                <div className="design-icons">
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                </div>
                <div className="education-container">
                  <p className="education-date">2024-2025</p>
                  <h3 className="education-title">Full Stack Developer</h3>
                  <p className="education-description">
                    I was selected by Federal College of Education Katsina,{" "}
                    <br />
                    to build a Unified Digital Hub All Tertiary Institutions
                    accross Nigeria.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="education-wrapper"
              id="education-wrapper"
              style={{ width: "100%" }}
            >
              <h3 className="education-header">
                Open Source Contributions <FaAward className="grad" /> (2)
              </h3>
              <div
                className="education-container-wrapper"
                style={{ height: "150px" }}
              >
                <div className="design-icons">
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                </div>
                <div className="education-container">
                  <p className="education-date">2024-2025</p>
                  <h3 className="education-title">
                    College Full Stack Libracy Circualtion System
                  </h3>
                  <p className="education-description">
                    I voluntereed to build a fully functional Library
                    Circulation System using MERN Stack
                    <h3>
                      <FaCircleArrowRight className="grad" /> Link in Portfolio
                    </h3>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="me-full">
            <div
              className="education-wrapper"
              id="education-wrapper"
              style={{ width: "100%" }}
            >
              <h3 className="education-header" onClick={handleNewSkill}>
                Certifications
              </h3>
              <div
                className="education-container-wrapper"
                style={{ height: "150px" }}
              >
                <div className="design-icons">
                  <div className="circle"></div>
                  <div className="line" style={{ height: "70px" }}></div>
                  <div className="circle"></div>
                </div>
                <div className="education-container">
                  <p className="education-date">2021-2025</p>
                  <p className="education-description">
                    <ul style={{ marginLeft: "-30PX", marginTop: "30PX" }}>
                      <li>Frontend Web Development Profile – W3Schools</li>
                      <li>Contributor to 3+ Open-Source Projects</li>
                      <li>Udemy: Advanced React & Node.js</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {console.log(component)}
        </div>
      )}
    </>
  );
}
