import { IssueStatusBadge } from '@/components';
import { notFound } from 'next/navigation';
import prisma from '@/prisma/client';
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import Markdown from 'react-markdown';
import { Pencil2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
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
        <Grid columns={{ initial: '1', md: '2' }} gap={'5'}>
            <Box>
                <Heading className='capitalize'>{issueDetails.title}</Heading>
                <Flex gap={'8'} my={'3'}>
                    <IssueStatusBadge status={issueDetails.status} />
                    <Text><b>Created on: </b> {issueDetails.createdAt.toDateString()}</Text>
                </Flex>
                <Card className='prose mt-5'>
                    <Markdown>{issueDetails.description}</Markdown>
                </Card>
            </Box>
            <Box>
                <Button>
                    <Pencil2Icon />
                    <Link href={`/issues/${issueDetails.id}/edit`}> Edit Issue</Link>
                </Button>
            </Box>
        </Grid>
    )
}

export default IssueDetailPage;