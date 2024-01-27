import { IssueStatusBadge } from '@/components';
import { Issue } from '@prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import Markdown from 'react-markdown';

const IssueDetails = ({ issue }: { issue: Issue }) => {
    return (
        <>
            <Heading className='capitalize'>{issue.title}</Heading>
            <Flex gap={'8'} my={'3'}>
                <IssueStatusBadge status={issue.status} />
                <Text><b>Created on: </b> {issue.createdAt.toDateString()}</Text>
            </Flex>
            <Card className='prose max-w-full' mt={'4'}>
                <Markdown>{issue.description}</Markdown>
            </Card>
        </>
    )
}

export default IssueDetails;