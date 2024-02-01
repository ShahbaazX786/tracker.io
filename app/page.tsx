{/* Bismillah */ }

import AllIssuesStatus from '@/components/AllIssuesStatus';
import IssueChart from '@/components/IssueChart';
import LatestIssues from '@/components/LatestIssues';
import { Flex, Grid } from '@radix-ui/themes';
import { Metadata } from 'next';

export default function Home() {
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap={'5'}>
      <Flex direction={'column'} gap={'5'}>
        <AllIssuesStatus />
        <IssueChart open={10} closed={20} inProgress={1} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}


export const metadata: Metadata = {
  title: 'Tracker.io - Dashboard',
  description: 'View all project issues',
};