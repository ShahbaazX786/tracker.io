import prisma from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
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
        <Grid columns={{ initial: '1', md: '2' }} gap={'5'}>
            <Box>
                <IssueDetails issue={issueDetails} />
            </Box>
            <Box>
                <EditIssueBtn issueId={issueDetails.id} />
            </Box>
        </Grid>
    )
}

export default IssueDetailPage;