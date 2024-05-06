import Project from './project'
import { projects } from './projects-data'

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          href={project.href}
          github={project.github}
        />
      ))}
    </div>
  )
}

export default Projects
