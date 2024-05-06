import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'

type ProjectProps = {
  title: string
  description: string
  image: StaticImageData
  href: string
  github: string
}

const Project = (props: ProjectProps) => {
  const { title, description, image, href, github } = props

  return (
    <div className='flex flex-col gap-4'>
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        className='w-full h-auto rounded-md'
      />
      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p>{description}</p>
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
  )
}

export default Project
