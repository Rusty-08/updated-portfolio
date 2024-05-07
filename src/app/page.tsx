import Contacts from '@/components/contacts'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center container overflow-hidden p-4'>
      <Navbar />
      <Hero />
      <div className='md:px-8 px-0 py-24 flex justify-center'>
        <Projects />
      </div>
      <div id='contact' className='md:px-8 px-0 md:pt-24 md:pb-10'>
        <Contacts />
      </div>
    </main>
  )
}
