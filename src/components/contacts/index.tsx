import SubHeader from '@/components/@core/subheader'
import GradientTop from '@/components/@core/gradients/top-border'
import { TbMessageCode } from 'react-icons/tb'
import ContactsLists from './contact'

const Contacts = () => {
  return (
    <div className="flex gap-20 flex-col justify-center">
      <GradientTop />
      <div className="flex flex-col justify-center items-center gap-4">
        <SubHeader icon={TbMessageCode} name="Contact Me" />
        <h2 className="font-semibold text-3xl text-center">
          Let&apos;s get in touch.
        </h2>
      </div>
      <ContactsLists />
    </div>
  )
}

export default Contacts
