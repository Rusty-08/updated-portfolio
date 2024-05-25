'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { PiSunDuotone } from 'react-icons/pi'
import { PiMoonDuotone } from 'react-icons/pi'

export function ThemeToggle({ ...props }) {
  const { setTheme, theme: initialTheme } = useTheme()
  const [theme, setLocalTheme] = useState<string>()

  const toggleTheme = () => {
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }, 100)
  }

  useEffect(() => {
    setLocalTheme(initialTheme)
  }, [initialTheme])

  if (theme) {
    return (
      <Button
        variant="ghost"
        className="text-primary active:scale-0 transition-transform duration-300 ease-in-out"
        size="icon"
        onClick={toggleTheme}
        {...props}
      >
        {theme === 'dark' ? (
          <PiMoonDuotone size="1.2rem" />
        ) : (
          <PiSunDuotone size="1.2rem" />
        )}
      </Button>
    )
  }
}
