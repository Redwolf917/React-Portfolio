// src/components/Project.jsx
import PropTypes from 'prop-types';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Project</a> | 
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </p>
    </div>
  );
};

// Adding PropTypes for validation
Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;
