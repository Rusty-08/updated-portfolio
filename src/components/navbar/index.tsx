import { site } from '@/config/site'
import { ThemeToggle } from '@/components/theme/toggle-theme'

const Navbar = () => {
  return (
    <div className='flex w-full h-24 px-8 items-center justify-between'>
      <h1 className='font-semibold text-3xl'>{site.name}</h1>
      <ThemeToggle />
    </div>
  )
}

export default Navbar
