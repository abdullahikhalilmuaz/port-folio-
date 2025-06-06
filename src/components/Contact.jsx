import { useState } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGit,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaSlack,
  FaWhatsapp,
} from "react-icons/fa";
import "../styles/contact.css";
import { FaTwitter, FaX } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS service ID, template ID, and public key
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    // Send the email using EmailJS
    emailjs
      .send(
        serviceId,
        templateId,
        {
          to_email: "muazdevy@gmail.com",
          from_name: "Portfolio Contact Form",
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )
      .then(
        (response) => {
          toast.success("Email sent successfully!");
          setFormData({ subject: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-main-container">
      <h3 className="h3">Socials</h3>
      <div className="main-wrapper">
        <div>
          <a
            href="https://github.com/abdullahihmuaz/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <h3>Github</h3>
        </div>
        <div>
          <a
            href="https://linkedin.com/in/abdullahi-h-mu-az-18a2ab353/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <h3>LinkedIn</h3>
        </div>
        <div>
          <a
            href="https://github.com/abdullahihmuaz/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <h3>Facebook</h3>
        </div>
        <div>
          <a
            href="https://github.com/abdullahihmuaz/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <h3>What'sapp</h3>
        </div>
      </div>
      <div className="main-wrapper">
        <div>
          <FaSlack />
          <h3>Slack</h3>
        </div>
        <div>
          <FaTwitter />
          <h3>Twitter</h3>
        </div>
        <div>
          <FaDiscord />
          <h3>Discord</h3>
        </div>
        <div>
          <a href="mailto:muazdevy@gmail.com" style={{ color: "white" }}>
            <FaMailBulk />
          </a>
          <h3>Email</h3>
        </div>
      </div>

      {/* <div className="send-mail">
        <h3
          style={{
            borderLeft: "5px solid orange",
            margin: "30px",
            padding: "0px 10px",
          }}
        >
          Send Mail
        </h3>
        <p
          style={{
            margin: "30px",
            borderLeft: "5px solid orange",
            padding: "0px 10px",
          }}
        >
          Drop a message
        </p>
        <div className="send-mail-main-container">
          <form onSubmit={handleSubmit}>
            <input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows={5}
              style={{ resize: "none" }}
              placeholder="Compose Message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="input-submit">
              Send Message
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
}
