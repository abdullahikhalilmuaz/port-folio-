import { useEffect, useState } from "react";
import { FaComment, FaGithub, FaHashtag } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "../styles/portfolio.css";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-server-9hh9.onrender.com/api/projects"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    return `https://portfolio-server-9hh9.onrender.com${imagePath}`;
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
