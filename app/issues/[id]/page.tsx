import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import DeleteIssueBtn from './DeleteIssueBtn';
import EditIssueBtn from './EditIssueBtn';
import IssueDetails from './IssueDetails';
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
        <Grid columns={{ initial: '1', sm: '5' }} gap={'5'}>
            <Box className='md:col-span-4'>
                <IssueDetails issue={issueDetails} />
            </Box>
            <Box>
                <Flex direction={'column'} gap={'4'}>
                    <EditIssueBtn issueId={issueDetails.id} />
                    <DeleteIssueBtn issueId={issueDetails.id} />
                </Flex>
            </Box>
        </Grid>
    )
}

export default IssueDetailPage;