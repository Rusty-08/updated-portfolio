import { Badge } from '@/components/ui/badge'
import CustomIcon from '@/components/ui/icon'

type SubHeaderProps = {
  icon: string
  name: string
}

const SubHeader = ({ icon, name }: SubHeaderProps) => {
  return (
    <Badge variant='outline'>
      <div className='flex items-center text-primary gap-2'>
        <CustomIcon icon={icon} height={14} />
        <span className='border-l border-l-primary/20 pl-2'>{name}</span>
      </div>
    </Badge>
  )
}

export default SubHeader
