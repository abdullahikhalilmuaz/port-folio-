import { useState, useRef } from "react";
import "../styles/addProject.css";

const POST_URL = "http://localhost:3000/api/projects";

export default function AddProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    hashtags: "",
    githubLink: "",
    hostedLink: "",
    comments: "[]",
  });
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      if (!formData.title) {
        throw new Error("Title is required");
      }

      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("hashtags", formData.hashtags);
      data.append("githubLink", formData.githubLink);
      data.append("hostedLink", formData.hostedLink);
      data.append("comments", formData.comments);
      if (image) {
        data.append("image", image);
      }

      const res = await fetch(POST_URL, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const result = await res.json();
      setSuccessMessage("Project added successfully!");
      setFormData({
        title: "",
        description: "",
        hashtags: "",
        githubLink: "",
        hostedLink: "",
        comments: "[]",
      });
      setImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setErrorMessage(err.message || "Failed to add project");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Project</h2>
      <form className="add-project-form" onSubmit={handleSubmit}>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="form-group">
          <label htmlFor="title">Project Title*</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="My Awesome Project"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Project Description*</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your project..."
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hashtags">Hashtags</label>
          <input
            type="text"
            id="hashtags"
            name="hashtags"
            placeholder="webdev, react, javascript (comma separated)"
            value={formData.hashtags}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="githubLink">GitHub Repository URL</label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            placeholder="https://github.com/yourusername/project"
            value={formData.githubLink}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hostedLink">Hosted Application URL</label>
          <input
            type="url"
            id="hostedLink"
            name="hostedLink"
            placeholder="https://yourproject.com"
            value={formData.hostedLink}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group file-upload">
          <label>Project Image</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: "none" }}
          />
          <button
            type="button"
            onClick={triggerFileInput}
            className="upload-btn"
          >
            {image ? image.name : "Choose Image"}
          </button>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Add Project"}
        </button>
      </form>
    </div>
  );
}
