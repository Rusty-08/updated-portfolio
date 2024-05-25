'use client'

import React, { ReactNode } from 'react'
import { Element } from 'react-scroll'
import { ElementProps } from 'react-scroll/modules/components/Element'

type ScrolledElementProps = ElementProps & {
  children: ReactNode
}

const ScrolledElement = ({ children, ...props }: ScrolledElementProps) => {
  return (
    <Element {...props} ref={null}>
      {children}
    </Element>
  )
}

export default ScrolledElement
