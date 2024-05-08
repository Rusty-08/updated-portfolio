import Contacts from '@/components/contacts'
import Hero from '@/components/hero'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className='flex px-0 flex-col w-full items-center justify-center container overflow-hidden'>
      <Hero />
      <div className='md:px-8 px-4 py-10 flex justify-center'>
        <Projects />
      </div>
      <div id='contact' className='md:px-8 w-full md:pt-16 pt-10 pb-10'>
        <Contacts />
      </div>
    </main>
  )
}
