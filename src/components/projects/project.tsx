import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import CustomIcon from '@/components/ui/icon'

type ProjectProps = {
  date: string
  title: string
  description: string
  image: StaticImageData
  href: string
  github: string
  techs: string[]
  index: number
}

const Project = (props: ProjectProps) => {
  const { date, title, description, image, href, github, index, techs } = props

  return (
    <div
      className={`flex gap-8 items-center ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col`}
    >
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        className='md:w-[30rem] w-full h-auto rounded-md'
      />
      <div className='flex flex-col gap-8 md:w-[30rem] w-full'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center text-muted-foreground gap-2'>
            <CustomIcon icon='bx:bxs-calendar' height={16} />
            <p className='text-sm'>{date}</p>
          </div>
          <h3 className='text-xl font-semibold'>{title}</h3>
          <p className='text-muted-foreground'>{description}</p>
        </div>
        <div className='flex gap-4 items-center'>
          {techs.map((tech) => (
            <CustomIcon key={tech} icon={tech} />
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <Button variant='outline'>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              Github
            </a>
          </Button>
          <Button>
            <a href={href} target='_blank' rel='noopener noreferrer'>
              Live View
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Project
