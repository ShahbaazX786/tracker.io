import { IssueStatusBadge, Link } from '@/components';
import prisma from '@/prisma/client';
import { Table } from '@radix-ui/themes';
import CreateActionBtn from './createActionBtn';

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className='w-full h-full px-6 my-6 space-y-5'>
      <CreateActionBtn />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden sm:table-cell'>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Date</Table.ColumnHeaderCell>
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