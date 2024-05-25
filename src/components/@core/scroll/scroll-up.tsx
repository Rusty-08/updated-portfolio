'use client'

import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Link, animateScroll as scroll } from 'react-scroll'
import { SlArrowUp } from 'react-icons/sl'

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  const checkScroll = () => {
    if (window.scrollY > window.innerHeight * 1.5) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <Button
      onClick={() => scroll.scrollToTop({ duration: 300 })}
      className={cn(
        'fixed bottom-8 pb-0.5 right-6 shadow-md transform transition-all duration-300 ease-in-out',
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-0 pointer-events-none'
      )}
      size='icon'
    >
      <SlArrowUp size='0.8rem' />
    </Button>
  )
}

export default ScrollUp
