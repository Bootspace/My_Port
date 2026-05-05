const skills = [
  "Restful APIs",
  "NestJS",
  "Express",
  "TypeScript",
  "MongoDB",
  "Postgres",
  "MySQL",
  "JavaScript",
  "Docker",
  "Kubernetes",
  "AWS Cloud Services",
  "Git",
  "CI/CD",
  "Reactjs",
  "React-Native",
  "GraphQL",
];

const Skills = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-alien mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border border-alien rounded-lg text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;