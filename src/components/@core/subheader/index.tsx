import { Badge } from '@/components/ui/badge'
import CustomIcon from '@/components/ui/icon'
import { IconType } from 'react-icons'

type SubHeaderProps = {
  icon: IconType
  name: string
}

const SubHeader = ({ icon: Icon, name }: SubHeaderProps) => {
  return (
    <Badge variant='outline'>
      <div className='flex items-center text-primary gap-2'>
        <Icon size='0.9rem' />
        <span className='border-l border-l-primary/20 pl-2'>{name}</span>
      </div>
    </Badge>
  )
}

export default SubHeader
