import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'
import { ThemeToggle } from '@/components/theme/toggle-theme'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center container'>
      <Navbar />
      <Hero />
      <div className="p-8 py-16 flex justify-center">
        <Projects />
      </div>
    </main>
  )
}
