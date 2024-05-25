import { site } from '@/config/site'
import { Button } from '@/components/ui/button'
import SubHeader from '@/components/@core/subheader'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import { VscCode } from 'react-icons/vsc'
import ScrollTo from '../@core/scroll/scroll-to'
import { FiDownloadCloud } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className="flex relative h-dvh w-full flex-col justify-center items-center">
      <Navbar />
      <Image
        src="/hero.svg"
        alt=""
        draggable={false}
        width={0}
        height={0}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="w-full px-4 z-10 flex justify-center flex-col items-center gap-5">
        <SubHeader icon={VscCode} name="Frontend Developer" />
        <h1 className="font-semibold md:text-[3.25rem] text-4xl text-center">
          <span className="bg-gradient-to-r from-primary to-fuchsia-900 bg-clip-text text-transparent">
            {site.name}.
          </span>{' '}
          {site.owner}
        </h1>
        <p className="text-center text-muted-foreground text-lg lg:w-[30rem] w-full">
          Creating captivating web experiences that will leave a lasting
          impression in your costumers.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <Button variant="outline" size="lg" className="gap-2">
            <FiDownloadCloud size="1.1rem" />
            Download CV
          </Button>
          <ScrollTo to="contact">
            <Button size="lg" className="gap-2">
              Contact Me
            </Button>
          </ScrollTo>
        </div>
      </div>
      <div className="space-x-6 absolute bottom-8">
        {site.media.map(social => (
          <Button key={social.name} variant="ghost" size="icon" asChild>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <social.icon size="1.3rem" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Hero
