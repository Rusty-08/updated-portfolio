import Profile from '@/components/profile'
import Projects from '@/components/projects'
import { ThemeToggle } from '@/components/theme/toggle-theme'

export default function Home() {
  return (
    <main className='flex min-h-screen p-10 container'>
      <Profile />
      <div className='flex w-full flex-col items-end gap-8'>
        <ThemeToggle className='sm:hidden lg:inline-flex' />
        <Projects />
      </div>
    </main>
  )
}
