import Image from 'next/image'
import Icon from '@/components/ui/icon'
import { Badge } from '@/components/ui/badge'
import { site } from '@/config/site'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme/toggle-theme'

const Profile = () => {
  return (
    <div className='flex w-1/2 flex-col justify-between items-center h-screen'>
      <div className='w-full flex justify-between'>
        {/* <Image src='/next.svg' alt='Logo' width={100} height={50} /> */}
        <h1 className='font-semibold text-3xl'>{site.name}</h1>
        <ThemeToggle className='hidden' />
      </div>
      <div className='w-full flex justify-center flex-col items-center gap-5'>
        <Badge variant='secondary'>
          <div className='flex items-center gap-2'>
            <Icon name='code' size={14} />
            <span className='border-l border-l-ring pl-2'>
              Frontend Developer
            </span>
          </div>
        </Badge>
        <h1 className='font-semibold text-5xl text-center'>
          Kaizokuō. Rusty Gunao.
        </h1>
        <p className='text-center text-lg px-20'>
          Creating captivating web experiences that will leave a lasting
          impression in your costumers.
        </p>
        <div className='flex items-center gap-4 mt-4'>
          <Button variant='outline' size='lg' className='gap-2'>
            <Icon name='cloud-download' height='1.1rem' />
            Download CV
          </Button>
          <Button size='lg'>Contact Me</Button>
        </div>
      </div>
      <div className='space-x-6'>
        {site.media.map((social) => (
          <Button key={social.name} variant='link' size='icon' asChild>
            <a href={social.link} target='_blank' rel='noopener noreferrer'>
              <Icon name={social.icon as any} height='1.3rem' />
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Profile
