import { site } from '@/config/site'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Footer = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
      <div className='space-x-6'>
        {site.media.map((social) => (
          <Button key={social.name} variant='ghost' size='icon' asChild>
            <a href={social.link} target='_blank' rel='noopener noreferrer'>
              <social.icon size='1.3rem' />
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
  )
}

export default Footer
