import React from 'react'
import { Flex, Card, Box } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const IssueDetailPageLoader = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Flex gap={'8'} my={'3'}>
        <Skeleton width='5rem' />
        <Skeleton width='10rem' />
      </Flex>
      <Card className='prose mt-5'>
        <Skeleton count={5} />
      </Card>
    </Box>
  )
}

export default IssueDetailPageLoader;