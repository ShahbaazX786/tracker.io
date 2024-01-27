import { Skeleton } from '@/components';
import { Box } from '@radix-ui/themes';

const IssueFormSkeleton = () => {
    return (
        <Box className='max-w-xl h-full border mt-5 p-6 rounded-md shadow-md'>
            <Skeleton height='2rem' />
            <Skeleton height='25rem' />
        </Box>
    )
}

export default IssueFormSkeleton;