import Image from 'next/image'
import Project from './project'
import { projects } from './projects-data'
import SubHeader from '@/components/@core/subheader'
import GradientTop from '../@core/gradients/top-border'
import { GoProjectSymlink } from 'react-icons/go'

const Projects = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex flex-col relative justify-center gap-20">
        <GradientTop />
        <div className="flex flex-col justify-center items-center gap-4">
          <SubHeader icon={GoProjectSymlink} name="My Projects" />
          <h2 className="font-semibold text-3xl text-center">
            Portfolio. Work Samples.
          </h2>
        </div>
        {projects.map((project, idx) => (
          <Project key={project.id} {...project} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default Projects
