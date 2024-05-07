import Icon from '@/components/ui/icon'
import { Badge } from '@/components/ui/badge'
import { site } from '@/config/site'
import { Button } from '@/components/ui/button'
import SubHeader from '@/components/@core/subheader'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className='flex relative w-full flex-col justify-center items-center'
      style={{ height: 'calc(100dvh - 6rem)' }}
    >
      <div className='w-full flex pb-16 justify-center flex-col items-center gap-5'>
        <SubHeader icon='lucide:code' name='Frontend Developer' />
        <h1 className='font-semibold md:text-5xl text-4xl text-center'>
          {site.name}. {site.owner}
        </h1>
        <p className='text-center text-muted-foreground text-lg lg:w-[30rem] w-full'>
          Creating captivating web experiences that will leave a lasting
          impression in your costumers.
        </p>
        <div className='flex items-center gap-4 mt-4'>
          <Button variant='outline' size='lg' className='gap-2'>
            <Icon icon='lucide:cloud-download' height='1.1rem' />
            Download CV
          </Button>
          <Link href='#contact'>
            <Button size='lg'>Contact Me</Button>
          </Link>
        </div>
      </div>
      <div className='space-x-6 absolute bottom-8'>
        {site.media.map((social) => (
          <Button key={social.name} variant='ghost' size='icon' asChild>
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
