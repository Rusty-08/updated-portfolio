import Icon from '@/components/ui/icon'
import { Badge } from '@/components/ui/badge'
import { site } from '@/config/site'
import { Button } from '../ui/button'
import { ThemeToggle } from '@/components/theme/toggle-theme'

const Hero = () => {
  return (
    <div className='flex relative w-full flex-col justify-center items-center' style={{ height: 'calc(100dvh - 6rem)' }}>
      <div className='w-full flex pb-8 justify-center flex-col items-center gap-5'>
        <Badge variant='secondary'>
          <div className='flex items-center gap-2'>
            <Icon icon='lucide:code' height={14} />
            <span className='border-l border-l-ring pl-2'>
              Frontend Developer
            </span>
          </div>
        </Badge>
        <h1 className='font-semibold text-5xl text-center'>
          Kaizokuō. Rusty Gunao.
        </h1>
        <p className='text-center text-muted-foreground text-lg w-[30rem]'>
          Creating captivating web experiences that will leave a lasting
          impression in your costumers.
        </p>
        <div className='flex items-center gap-4 mt-4'>
          <Button variant='outline' size='lg' className='gap-2'>
            <Icon icon='lucide:cloud-download' height='1.1rem' />
            Download CV
          </Button>
          <Button size='lg'>Contact Me</Button>
        </div>
      </div>
      <div className='space-x-6 absolute bottom-8'>
        {site.media.map((social) => (
          <Button key={social.name} variant='link' size='icon' asChild>
            <a href={social.link} target='_blank' rel='noopener noreferrer'>
              <Icon icon={social.icon as any} height='1.3rem' />
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Hero
