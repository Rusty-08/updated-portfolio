import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import { IoCalendarSharp } from 'react-icons/io5'
import { IconType } from 'react-icons'
import { RxExternalLink } from 'react-icons/rx'
import { TooltipWrapper } from '@/components/ui/tooltip'

type ProjectProps = {
  date: string
  title: string
  description: string
  image: StaticImageData
  href: string
  github: string
  techs: {
    name: string
    icon: IconType
  }[]
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
      <div className="md:w-[30rem] w-full h-auto">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-6 md:w-[30rem] w-full">
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-muted-foreground gap-2">
            <IoCalendarSharp />
            <p className="text-sm">{date}</p>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center">
          {techs.map(({ name, icon: Icon }) => (
            <TooltipWrapper key={name} tooltip={name}>
              <Button variant="ghost" size="icon">
                <Icon size="1.2rem" />
              </Button>
            </TooltipWrapper>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              <RxExternalLink size="1.1rem" />
              Github
            </Button>
          </a>
          <Button>
            <a href={href} target="_blank" rel="noopener noreferrer">
              Live View
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Project
