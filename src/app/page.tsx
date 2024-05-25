import ScrolledElement from '@/components/@core/scroll/element'
import Contacts from '@/components/contacts'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className="flex px-0 pb-10 flex-col w-full items-center justify-center container overflow-hidden">
      <Hero />
      <div className="md:px-8 px-4 py-10 flex justify-center">
        <Projects />
      </div>
      <div className="md:px-8 w-full md:pt-16 pt-10 pb-10">
        <ScrolledElement name="contact">
          <Contacts />
        </ScrolledElement>
      </div>
      <Footer />
    </main>
  )
}
