import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import CustomIcon from '@/components/ui/icon'

type ProjectProps = {
  title: string
  description: string
  image: StaticImageData
  href: string
  github: string
  techs: string[]
  index: number
}

const Project = (props: ProjectProps) => {
  const { title, description, image, href, github, index, techs } = props

  return (
    <div className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        className='w-[30rem] h-auto rounded-md'
      />
      <div className="flex flex-col gap-8 w-[30rem]">
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-semibold'>
            <span className='font-space-mono'>{`0${index + 1}.`}{' '}</span>
            {title}
          </h3>
          <p className='text-muted-foreground'>{description}</p>
        </div>
        <div className="flex gap-4 items-center">
          {techs.map(tech => (
            <CustomIcon icon={tech} />
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
