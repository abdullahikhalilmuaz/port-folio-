import { useState } from "react";
import "../styles/header.css";
import { FiHome } from "react-icons/fi";
import { AiFillCloseCircle, AiFillOpenAI } from "react-icons/ai";
import {
  FaAmazon,
  FaAtom,
  FaClosedCaptioning,
  FaGithub,
  FaInfo,
  FaPhone,
} from "react-icons/fa";
import { BsFillPaletteFill } from "react-icons/bs";

export default function Header({ setComponentToShow, componentToShow }) {
  const handleHome = () => {
    setComponentToShow("home");
  };
  const handleGithub = () => {
    setComponentToShow("github");
  };
  const handleContact = () => {
    setComponentToShow("contact");
  };
  const handleInfo = () => {
    setComponentToShow("info");
  };
  return (
    <div className="main-header">
      <div className="title">
        <h3>
          Abdullahi{" "}
          <span
            style={{
              color: "orange",
            }}
          >
            H
          </span>{" "}
          Mu'az
        </h3>
      </div>

      <div className="navs">
        <div className="navs1" onClick={handleHome}>
          <FiHome />
        </div>
        <div className="navs2" onClick={handleGithub}>
          <a
            href="https://github.com/abdullahikhalilmuaz/"
            target="_blank"
            style={{ color: "white" }}
          >
            <FaGithub />
          </a>
        </div>
        <div className="navs3" onClick={handleContact}>
          <FaPhone />
        </div>
        <div className="navs4" onClick={handleInfo}>
          <FaInfo />
        </div>
      </div>
    </div>
  );
}
