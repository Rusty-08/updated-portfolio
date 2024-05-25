'use client'

import { Card, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import GradientTop from '../@core/gradients/top-border'
import { RxExternalLink } from 'react-icons/rx'
import { contacts } from './contact-data'

const ContactsLists = () => {
  return (
    <div className="flex items-center gap-4 flex-col">
      {contacts.map(({ icon: Icon, name, link }) => (
        <Card key={name} className="lg:w-[35rem] w-[22rem] h-16 px-6">
          <GradientTop />
          <div className="flex gap-4 items-center w-full h-full">
            <div className="flex items-center justify-center border-r pr-4">
              <Icon size="1.3rem" />
            </div>
            <div className="flex flex-grow items-center justify-between">
              <h5>{name}</h5>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <RxExternalLink size="1.2rem" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default ContactsLists
