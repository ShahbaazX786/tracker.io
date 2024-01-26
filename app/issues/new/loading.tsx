import { Skeleton } from '@/components'
import { Box } from '@radix-ui/themes'

const NewIssuePageLoader = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton />
        <Skeleton height='20rem' />
    </Box>
  )
}

export default NewIssuePageLoader;