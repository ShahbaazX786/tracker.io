import { Heading, Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi';

const CreateActionBtn = () => {
    return (
        <div className='flex flex-row justify-between'>
            <Heading>All Issues</Heading>
            <Button>
                <FiPlusCircle size={15} />
                <Link href={'/issues/new'} className='!text-white'>
                    Create Issue
                </Link>
            </Button>
        </div>
    )
}

export default CreateActionBtn;