'use client'

import { useTheme } from 'next-themes'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const themes = [
  { icon: 'sun', label: 'Light' },
  { icon: 'moon', label: 'Dark' },
]

export function ThemeToggle({ ...props }) {
  const { setTheme, theme: initialTheme } = useTheme()
  const [theme, setLocalTheme] = useState<string>()

  useEffect(() => {
    setLocalTheme(initialTheme)
  }, [initialTheme])

  return (
    <Button
      variant='ghost'
      className='text-primary'
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      <Icon icon={theme === 'dark' ? 'lucide:moon' : 'lucide:sun'} />
    </Button>
  )
}
