import { AuthOptions } from '@/app/auth/AuthOptions';
import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import AssignIssue from './AssignIssue';
import DeleteIssueBtn from './DeleteIssueBtn';
import EditIssueBtn from './EditIssueBtn';
import IssueDetails from './IssueDetails';
import { cache } from 'react';

interface Props {
    params: { id: string }
}

const fetchUser = cache((issueId: number) => prisma.issue.findUnique({ where: { id: issueId } }));

const IssueDetailPage = async ({ params }: Props) => {
    const issue = await fetchUser(parseInt(params.id));
    const session = await getServerSession(AuthOptions);
    const id = parseInt(params.id);

    const issueDetails = await prisma.issue.findUnique({
        where: { id }
    });

    if (!issueDetails) {
        notFound();
    }

    return (
        <Grid columns={{ initial: '1', sm: '5' }} gap={'5'}>
            <Box className='md:col-span-4'>
                <IssueDetails issue={issueDetails} />
            </Box>
            {session && (<Box>
                <Flex direction={'column'} gap={'4'}>
                    <AssignIssue issue={issueDetails} />
                    <EditIssueBtn issueId={issueDetails.id} />
                    <DeleteIssueBtn issueId={issueDetails.id} />
                </Flex>
            </Box>)}
        </Grid>
    )
}

export async function generateMetadata({ params }: Props) {
    const issue = await fetchUser(parseInt(params.id));

    return {
        title: issue?.title,
        description: 'Details of issue - ' + issue?.id
    }
}

export default IssueDetailPage;