const projects = [
  {
    title: "Ikook UK",
    url: "https://ikook.co.uk/",
  },
  {
    title: "Improperties NG",
    url: "https://improperties.ng/",
  },
  {
    title: "Puplar",
    url: "https://puplar.com/",
  },
];

const Projects = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-alien mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-alien rounded-lg p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-alien"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;