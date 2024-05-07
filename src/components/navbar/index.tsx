import { site } from '@/config/site'
import { ThemeToggle } from '@/components/theme/toggle-theme'

const Navbar = () => {
  return (
    <div className='flex w-full md:h-20 h-16 md:px-8 px-4 items-center justify-between'>
      <h1 className='font-semibold md:text-3xl text-2xl'>{site.name}</h1>
      <ThemeToggle />
    </div>
  )
}

export default Navbar
