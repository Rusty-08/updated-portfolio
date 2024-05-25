import { site } from '@/config/site'
import { ThemeToggle } from '@/components/theme/toggle-theme'
import { Button } from '@/components/ui/button'
import { FiDownloadCloud } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="flex z-50 w-full absolute top-0 md:h-28 h-20 md:px-16 px-6 items-center justify-between">
      <h1 className="font-semibold md:text-3xl text-2xl bg-gradient-to-r from-primary to-fuchsia-900 bg-clip-text text-transparent">
        {site.name}
      </h1>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
