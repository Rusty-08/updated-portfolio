import Project from './project'
import { projects } from './projects-data'
import SubHeader from '@/components/@core/subheader'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center gap-20'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <SubHeader icon='lucide:folder-output' name='My Projects' />
        <h2 className='font-semibold text-3xl text-center'>
          Portfolio. Work Samples.
        </h2>
      </div>
      {projects.map((project, index) => (
        <Project
          key={index}
          date={project.date}
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
