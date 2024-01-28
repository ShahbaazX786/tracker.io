import { IssueStatusBadge } from '@/components';
import { Issue, IssueStatus } from '@prisma/client';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import { Table } from '@radix-ui/themes';
import Link from 'next/link';

interface Props {
    searchParams: IssuePageQuery,
    issues: Issue[],
};

const IssueTable = ({ searchParams, issues }: Props) => {
    return (
        <Table.Root variant='surface'>
            <Table.Header>
                <Table.Row>
                    {tableColumns.map(c => (
                        <Table.ColumnHeaderCell key={c.value} className={c.className}><Link href={{
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
    )
}


export interface IssuePageQuery {
    status: IssueStatus,
    orderBy: keyof Issue,
    page: string
}

type tableColumnsType = {
    label: string;
    value: keyof Issue;
    className?: string;
}

const tableColumns: tableColumnsType[] = [
    { label: 'Issue', value: 'title' },
    { label: 'Status', value: 'status' },
    { label: 'Description', value: 'description', className: 'hidden sm:table-cell' },
    { label: 'Created On', value: 'createdAt', className: 'hidden md:table-cell' },
]

export const columnNames = tableColumns.map(column => column.label);

export default IssueTable;