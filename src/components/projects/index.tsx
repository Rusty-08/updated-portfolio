import Project from './project'
import { projects } from './projects-data'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center gap-20'>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          href={project.href}
          github={project.github}
          techs={project.techs}
          index={index}
        />
      ))}
    </div>
  )
}

export default Projects
