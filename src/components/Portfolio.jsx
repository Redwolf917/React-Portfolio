// src/components/Portfolio.jsx
// import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'path-to-image1.jpg',
      deployedLink: 'https://your-deployed-link1.com',
      repoLink: 'https://github.com/your-repo-link1'
    },
    // Add 5 more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
