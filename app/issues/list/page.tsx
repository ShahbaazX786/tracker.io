import Pagination from '@/components/shared/Pagination';
import prisma from '@/prisma/client';
import { IssueStatus } from '@prisma/client';
import { Flex } from '@radix-ui/themes';
import CreateActionBtn from '../list/createActionBtn';
import IssueTable, { IssuePageQuery, columnNames } from './IssueTable';


interface Props {
  searchParams: IssuePageQuery
}

const IssuesPage = async ({ searchParams }: Props) => {
  // filter issue status params
  const verifyFilterQuery = Object.values(IssueStatus);
  const status = verifyFilterQuery.includes(searchParams.status) ? searchParams.status : undefined;

  //sort column params
  const orderBy = columnNames.includes(searchParams.orderBy) ? { [searchParams.orderBy]: 'asc' } : undefined;

  //page params
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const where = { status }
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  });

  const issueCount = await prisma.issue.count({ where });

  return (
    <Flex direction={'column'} gap={'4'}>
      <CreateActionBtn />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination currentPage={page} pageSize={pageSize} itemCount={issueCount} />
    </Flex>
  );
};

// this fix is enables this file to not be a static page in prod build.
export const dynamic = 'force-dynamic';

export default IssuesPage;