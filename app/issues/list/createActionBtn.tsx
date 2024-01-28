import { Button, Flex, Heading } from '@radix-ui/themes';
import Link from 'next/link';
import { FiPlusCircle } from 'react-icons/fi';
import IssueStatusFilter from './IssueStatusFilter';

const CreateActionBtn = () => {
    return (
        <div className='flex flex-col mt-4 sm:flex-row sm:mt-0 justify-between'>
            <Heading>All Issues</Heading>
            <Flex mt={{ initial: "5", xs: '5', sm: '0' }} justify={'between'} wrap={'wrap'} gap={'3'}>
                <IssueStatusFilter />
                <Button>
                    <FiPlusCircle size={15} />
                    <Link href={'/issues/new'} className='!text-white'>
                        Create Issue
                    </Link>
                </Button>
            </Flex>
        </div>
    )
}

export default CreateActionBtn;