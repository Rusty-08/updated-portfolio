'use client'

import { Card, CardHeader } from '@/components/ui/card'
import CustomIcon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import GradientTop from '../@core/gradients/top-border'

type ContactProps = {
  icon: string
  name: string
  link?: string
}

const Contact = ({ icon, name, link }: ContactProps) => {
  return (
    <Card className='lg:w-[35rem] w-[22rem] h-16 px-6'>
      <GradientTop />
      <div className='flex gap-4 items-center w-full h-full'>
        <div className='flex items-center justify-center border-r pr-4'>
          <CustomIcon icon={icon} />
        </div>
        <div className='flex flex-grow items-center justify-between'>
          <h5>{name}</h5>
          {link && (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <Button variant='ghost' size='icon'>
                <CustomIcon icon='fluent:link-32-regular' />
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

export default Contact
