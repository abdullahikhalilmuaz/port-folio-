import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye, FaSearch, FaSpinner } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { toast } from "react-toastify";
import "../styles/dashboard.css";

export default function DashboardToShow() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    projectId: null,
    projectTitle: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/projects");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/projects/${projectId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      // Refresh the project list
      await fetchProjects();
      toast.success("Project deleted successfully");
    } catch (err) {
      toast.error("Failed to delete project");
      console.error(err);
    } finally {
      setDeleteModal({ show: false, projectId: null, projectTitle: "" });
    }
  };

  const filteredProjects = projects.filter((project) => {
    const searchContent = `${project.description} ${project.hashtags?.join(
      " "
    )}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-overlay">
          <FaSpinner className="spinner" />
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-message">
          <p>Error loading projects: {error}</p>
          <button onClick={fetchProjects} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Projects Dashboard</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="projects-stats">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p>{projects.length}</p>
        </div>
        <div className="stat-card">
          <h3>Displayed</h3>
          <p>{filteredProjects.length}</p>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.length === 0 ? (
          <div className="no-projects">
            {searchTerm ? (
              <p>No projects match your search criteria</p>
            ) : (
              <p>No projects available</p>
            )}
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                {project.image ? (
                  <img
                    src={`http://localhost:5000${project.image}`}
                    alt={project.description}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "";
                      e.target.className = "image-error";
                    }}
                  />
                ) : (
                  <div className="no-image-placeholder">No Image</div>
                )}
              </div>

              <div className="project-content">
                <h3>
                  {project.description.substring(0, 50)}
                  {project.description.length > 50 ? "..." : ""}
                </h3>

                <div className="project-meta">
                  <span className="date">
                    Created: {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                  {project.hashtags?.length > 0 && (
                    <div className="tags">
                      {project.hashtags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="project-links">
                  {project.hostedLink && (
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      <FiExternalLink /> Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                </div>

                <div className="project-actions">
                  <button className="action-button view">
                    <FaEye /> View
                  </button>
                  <button className="action-button edit">
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() =>
                      setDeleteModal({
                        show: true,
                        projectId: project.id,
                        projectTitle: project.description.substring(0, 30),
                      })
                    }
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.show && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Deletion</h3>
            <p>
              Are you sure you want to delete the project "
              {deleteModal.projectTitle}
              {deleteModal.projectTitle.length === 30 ? "..." : ""}"?
            </p>
            <p>This action cannot be undone.</p>
            <div className="modal-actions">
              <button
                className="cancel-button"
                onClick={() =>
                  setDeleteModal({
                    show: false,
                    projectId: null,
                    projectTitle: "",
                  })
                }
              >
                Cancel
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteProject(deleteModal.projectId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
