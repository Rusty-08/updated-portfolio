'use client'

import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-scroll'

type ScrollToProps = LinkProps & {
  children: ReactNode
}

const ScrollTo = ({ children, ...props }: ScrollToProps) => {
  return (
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      offset={50}
      duration={300}
      {...props}
      ref={null}
    >
      {children}
    </Link>
  )
}

export default ScrollTo
