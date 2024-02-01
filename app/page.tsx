{/* Bismillah */ }

import AllIssuesStatus from '@/components/AllIssuesStatus';
import IssueChart from '@/components/IssueChart';
import LatestIssues from '@/components/LatestIssues';
import { Flex, Grid } from '@radix-ui/themes';

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
