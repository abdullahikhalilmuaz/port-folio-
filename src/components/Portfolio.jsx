import { useEffect, useState } from "react";
import { FaComment, FaGithub, FaHashtag } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../styles/portfolio.css";
import projectImage from "../upload/project.png"; // Make sure this path is correct

export default function Portfolio() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Library Circulation System",
      description:
        "A web based Full Stack Library Circulation and Management System, featuring all traditional library management system, converting all traditional library features into software based. Responsive Design, Eye catching designs, and fully functional.",
      hashtags: ["LibraryCirculationSystem", "LibraryManagementSystem"],
      githubLink:
        "https://github.com/abdullahikhalilmuaz/library-circulation-system-client",
      hostedLink: "https://library-circulation-system.onrender.com/",
      comments: [],
      image: projectImage, // Using the imported image
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (typeof imagePath === "string" && imagePath.startsWith("http"))
      return imagePath;
    return imagePath; // Return the imported image directly
  };

  if (loading) {
    return (
      <div className="pf-container">
        <h2 className="pf-title">Projects</h2>
        <div className="pf-loading">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pf-container">
        <h2 className="pf-title">Projects</h2>
        <div className="pf-error">{error}</div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="pf-container">
        <h2 className="pf-title">Projects</h2>
        <div className="pf-empty">No projects yet. Add your first project!</div>
      </div>
    );
  }

  return (
    <div className="pf-container">
      <h2 className="pf-title">Projects</h2>
      <div className="pf-grid">
        {projects.map((project) => {
          const imageUrl = getImageUrl(project.image);
          return (
            <div key={project.id} className="pf-card">
              <div className="pf-img-container">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={project.title || "Project screenshot"}
                    className="pf-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "";
                      e.target.parentElement.innerHTML = `
                        <div class="pf-img-placeholder">
                          <span>Image not available</span>
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div className="pf-img-placeholder">
                    <span>No image provided</span>
                  </div>
                )}
              </div>

              <div className="pf-content">
                <h3 className="pf-card-title">
                  {project.title || "Untitled Project"}
                </h3>
                <p className="pf-description">{project.description}</p>

                {project.hashtags && project.hashtags.length > 0 && (
                  <div className="pf-tags">
                    {project.hashtags.map((tag, index) => (
                      <span key={index} className="pf-tag">
                        <FaHashtag /> {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pf-actions">
                  {project.hostedLink && (
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-action-btn"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-action-btn"
                    >
                      <FaGithub /> Code
                    </a>
                  )}

                  <button className="pf-action-btn">
                    <FaComment /> Comments ({project.comments?.length || 0})
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
