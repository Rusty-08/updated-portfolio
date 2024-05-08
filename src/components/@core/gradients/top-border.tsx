import { cn } from '@/lib/utils'
import React from 'react'
import { ClassNameValue } from 'tailwind-merge'

const GradientTop = ({ className }: { className?: ClassNameValue }) => {
  return (
    <div
      className={cn('flex -translate-y-[1px] w-full justify-center', className)}
    >
      <div className='w-3/4'>
        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent' />
      </div>
    </div>
  )
}

export default GradientTop
