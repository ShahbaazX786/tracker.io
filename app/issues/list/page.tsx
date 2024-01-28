import { IssueStatusBadge } from '@/components';
import prisma from '@/prisma/client';
import Link from 'next/link'
import { Table } from '@radix-ui/themes';
import CreateActionBtn from '../list/createActionBtn';
import { Issue, IssueStatus } from '@prisma/client';
import { ArrowUpIcon } from '@radix-ui/react-icons';

type tableColumnsType = {
  label: string;
  value: keyof Issue;
  className?: string;
}

const IssuesPage = async ({ searchParams }: { searchParams: { status: IssueStatus, orderBy: keyof Issue } }) => {
  const tableColumns: tableColumnsType[] = [
    { label: 'Issue', value: 'title' },
    { label: 'Status', value: 'status', className: 'hidden sm:table-cell' },
    { label: 'Description', value: 'description', className: 'hidden sm:table-cell' },
    { label: 'Created On', value: 'createdAt', className: 'hidden sm:table-cell' },
  ]


  const verifyFilterQuery = Object.values(IssueStatus);
  const status = verifyFilterQuery.includes(searchParams.status) ? searchParams.status : undefined;
  const verifySortQuery = tableColumns.map(column => column.value);
  const orderBy = verifySortQuery.includes(searchParams.orderBy) ? { [searchParams.orderBy]: 'asc' } : undefined;
  const issues = await prisma.issue.findMany({
    where: {
      status
    },
    orderBy
  });

  return (
    <div className='w-full h-full px-6 my-6 space-y-5'>
      <CreateActionBtn />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            {tableColumns.map(c => (
              <Table.ColumnHeaderCell key={c.value}><Link href={{
                query: { ...searchParams, orderBy: c.value }
              }}>{c.label}</Link>
                {c.value === searchParams.orderBy && <ArrowUpIcon className='inline' />}
              </Table.ColumnHeaderCell>))
            }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell className='break-words'><Link href={`/issues/${issue.id}`}>{issue.title}</Link></Table.Cell>
              <Table.Cell><IssueStatusBadge status={issue.status} /></Table.Cell>
              <Table.Cell className='hidden sm:table-cell break-words'>{issue.description}</Table.Cell>
              <Table.Cell className='hidden md:table-cell overflow-ellipsis'>{issue.createdAt.toLocaleDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

// this fix is enables this file to not be a static page in prod build.
export const dynamic = 'force-dynamic';

export default IssuesPage;