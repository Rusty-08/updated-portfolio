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
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
    </Button>
  )
}
