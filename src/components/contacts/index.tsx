import SubHeader from '@/components/@core/subheader'
import { contacts } from './contact-data'
import Contact from './contact'
import { Button } from '@/components/ui/button'
import { site } from '@/config/site'
import CustomIcon from '@/components/ui/icon'
import { Card } from '@/components/ui/card'
import GradientTop from '@/components/@core/gradients/top-border'

const Contacts = () => {
  return (
    <div className='flex gap-20 flex-col justify-center'>
      <GradientTop />
      <div className='flex flex-col justify-center items-center gap-4'>
        <SubHeader icon='lucide:message-square-text' name='Contact Me' />
        <h2 className='font-semibold text-3xl text-center'>
          Let&apos;s get in touch.
        </h2>
      </div>
      <div className='flex items-center gap-4 flex-col'>
        {contacts.map((contact) =>
          contact.link ? (
            <Contact
              key={contact.name}
              icon={contact.icon}
              name={contact.name}
              link={contact.link}
            />
          ) : (
            <Contact
              key={contact.name}
              icon={contact.icon}
              name={contact.name}
            />
          )
        )}
      </div>
      <div className='flex flex-col gap-10 justify-center items-center'>
        <div className='space-x-6'>
          {site.media.map((social) => (
            <Button key={social.name} variant='ghost' size='icon' asChild>
              <a href={social.link} target='_blank' rel='noopener noreferrer'>
                <CustomIcon icon={social.icon as any} height='1.3rem' />
              </a>
            </Button>
          ))}
        </div>
        <Card className='px-6 border-primary/50 h-16'>
          <i className='text-sm h-full flex items-center text-center'>
            “Code is like humor. When you have to explain it, it’s bad.” – Cory
            House
          </i>
        </Card>
        <p className='text-muted-foreground text-sm'>
          2024 - {new Date().getFullYear()} •{' '}
          <span className='bg-gradient-to-r from-primary to-fuchsia-900 bg-clip-text text-transparent'>
            {site.name}
          </span>{' '}
          • {site.owner}
        </p>
      </div>
    </div>
  )
}

export default Contacts
