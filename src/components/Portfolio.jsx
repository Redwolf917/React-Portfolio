import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Readme Generator',
      image: 'path-to-image1.jpg',
      deployedLink: 'https://github.com/Redwolf917/Read-Me-Generator.git',
      repoLink: 'git@github.com:Redwolf917/Read-Me-Generator.git'
    },
    {
        title: 'Habit Spark',
        image: 'path-to-image2.jpg',
        deployedLink: 'https://github.com/Redwolf917/Habit-Spark.git',
        repoLink: 'git@github.com:Redwolf917/Habit-Spark.git'
    },
    {
        title: 'Employee Tracker',
        image: 'path-to-image3.jpg',
        deployedLink: 'https://github.com/Redwolf917/Employee-Tracker.git',
        repoLink: 'git@github.com:Redwolf917/Employee-Tracker.git'
    },
    {
        title: 'Vehicle Builder',
        image: 'path-to-image4.jpg',
        deployedLink: 'https://github.com/Redwolf917/Vehicle-Builder.git',
        repoLink: 'git@github.com:Redwolf917/Vehicle-Builder.git'
    },
    {
        title: 'Weather Dashboard',
        image: 'path-to-image5.jpg',
        deployedLink: 'https://github.com/Redwolf917/Weather-Dashboard.git',
        repoLink: 'git@github.com:Redwolf917/Weather-Dashboard.git'
    },
    {
        title: 'Module 1 Challenge',
        image: 'path-to-image6.jpg',
        deployedLink: 'https://github.com/Redwolf917/module-1-challenge.git',
        repoLink: 'git@github.com:Redwolf917/module-1-challenge.git'
    }
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
