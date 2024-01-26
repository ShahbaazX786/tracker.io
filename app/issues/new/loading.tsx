import React from 'react'
import { Box } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const NewIssuePageLoader = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton />
        <Skeleton height='20rem' />
    </Box>
  )
}

export default NewIssuePageLoader;