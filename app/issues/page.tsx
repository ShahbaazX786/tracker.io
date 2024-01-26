import React from 'react'

import prisma from '@/prisma/client'
import { Table } from '@radix-ui/themes';
import IssueStatusBadge from '@/components/IssueStatusBadge';
import delay from 'delay';
import CreateActionBtn from './createActionBtn';
import Link from '@/components/Link';

const IssuesPage = async () => {
  await delay(2000);
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
  )
}

export default IssuesPage;