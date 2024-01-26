import { IssueStatusBadge } from '@/components';
import { notFound } from 'next/navigation';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import Markdown from 'react-markdown';
interface Props {
    params: { id: string }
}
const IssueDetailPage = async ({ params }: Props) => {
    const id = parseInt(params.id);

    const issueDetails = await prisma.issue.findUnique({
        where: { id }
    });

    if (!issueDetails) {
        notFound();
    }

    return (
        <div>
            <Heading className='capitalize'>{issueDetails.title}</Heading>
            <Flex gap={'8'} my={'3'}>
                <IssueStatusBadge status={issueDetails.status} />
                <Text><b>Created on: </b> {issueDetails.createdAt.toDateString()}</Text>
            </Flex>
            <Card className='prose mt-5'>
                <Markdown>{issueDetails.description}</Markdown>
            </Card>
        </div>
    )
}

export default IssueDetailPage;