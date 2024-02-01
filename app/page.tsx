import AllIssuesStatus from '@/components/AllIssuesStatus';
import IssueChart from '@/components/IssueChart';
import LatestIssues from '@/components/LatestIssues';

export default function Home() {
  return (
    <>
      {/* <h1>Bismillah</h1> */}
      <LatestIssues />
      <AllIssuesStatus />
      <IssueChart open={10} closed={20} inProgress={1} />
    </>
  );
}
